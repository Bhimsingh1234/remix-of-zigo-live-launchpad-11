import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const optionalText = (max: number) => z.string().trim().max(max).optional().default("");
const phone = z.string().trim().min(7, "Enter a valid number").max(24).regex(/^[+\d][\d\s()-]+$/, "Enter a valid number");

export const onboardingSchema = z.object({
  type: z.enum(["PARTNER", "SELLER", "AGENCY"]),
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  companyName: optionalText(160),
  agencyName: optionalText(160),
  email: z.string().trim().email("Enter a valid email").max(255),
  mobileNumber: phone,
  whatsappNumber: phone,
  country: z.string().trim().min(2, "Country is required").max(100),
  state: z.string().trim().min(2, "State is required").max(100),
  city: optionalText(100),
  partnerType: optionalText(80),
  website: optionalText(300),
  socialMedia: optionalText(500),
  experience: optionalText(1200),
  numberOfHosts: z.coerce.number().int().min(0).max(1_000_000).optional(),
  investmentCapacity: optionalText(200),
  expectedMonthlyBusiness: optionalText(200),
  currentPlatform: optionalText(200),
  hearAboutZigo: optionalText(200),
  paymentBusinessDetails: optionalText(1000),
  description: z.string().trim().min(20, "Please provide at least 20 characters").max(3000),
  agreed: z.literal(true, { errorMap: () => ({ message: "Please confirm the information is accurate" }) }),
  websiteCheck: z.string().max(0).optional().default(""),
  utmSource: optionalText(180),
  utmMedium: optionalText(180),
  utmCampaign: optionalText(180),
  utmContent: optionalText(180),
  referrer: optionalText(500),
  landingPage: optionalText(500),
}).superRefine((data, context) => {
  if (data.type === "PARTNER" && !data.partnerType) {
    context.addIssue({ code: "custom", path: ["partnerType"], message: "Partner type is required" });
  }
  if (data.type === "AGENCY" && !data.agencyName) {
    context.addIssue({ code: "custom", path: ["agencyName"], message: "Agency name is required" });
  }
});

export type OnboardingInput = z.input<typeof onboardingSchema>;

const clean = (value: string | undefined) => value?.replace(/[<>]/g, "").trim() || null;

export const submitOnboardingRequest = createServerFn({ method: "POST" })
  .inputValidator((input: OnboardingInput) => onboardingSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.websiteCheck) return { success: true as const };

    const now = new Date();
    const bucket = Math.floor(now.getTime() / 600_000);
    const fingerprintSource = `${data.type}:${data.email.toLowerCase()}:${data.mobileNumber.replace(/\D/g, "")}:${bucket}`;
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(fingerprintSource));
    const submissionFingerprint = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const since = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("onboarding_requests")
      .select("id", { count: "exact", head: true })
      .eq("email", data.email.toLowerCase())
      .gte("created_at", since);

    if (countError) {
      console.error("Onboarding rate check failed", countError.message);
      throw new Error("SUBMISSION_FAILED");
    }
    if ((count ?? 0) >= 4) throw new Error("RATE_LIMITED");

    const { error } = await supabaseAdmin.from("onboarding_requests").insert({
      type: data.type,
      full_name: clean(data.fullName) ?? data.fullName,
      company_name: clean(data.companyName),
      agency_name: clean(data.agencyName),
      email: data.email.toLowerCase(),
      mobile_number: data.mobileNumber,
      whatsapp_number: data.whatsappNumber,
      country: clean(data.country) ?? data.country,
      state: clean(data.state) ?? data.state,
      city: clean(data.city),
      partner_type: clean(data.partnerType),
      website: clean(data.website),
      social_media: clean(data.socialMedia),
      experience: clean(data.experience),
      number_of_hosts: data.numberOfHosts ?? null,
      investment_capacity: clean(data.investmentCapacity),
      expected_monthly_business: clean(data.expectedMonthlyBusiness),
      current_platform: clean(data.currentPlatform),
      hear_about_zigo: clean(data.hearAboutZigo),
      payment_business_details: clean(data.paymentBusinessDetails),
      description: clean(data.description) ?? data.description,
      utm_source: clean(data.utmSource),
      utm_medium: clean(data.utmMedium),
      utm_campaign: clean(data.utmCampaign),
      utm_content: clean(data.utmContent),
      referrer: clean(data.referrer),
      landing_page: clean(data.landingPage),
      status: "PENDING",
      submission_fingerprint: submissionFingerprint,
    });

    if (error) {
      if (error.code === "23505") return { success: true as const, duplicate: true as const };
      console.error("Onboarding insert failed", error.code, error.message, getRequestHeader("user-agent"));
      throw new Error("SUBMISSION_FAILED");
    }

    return { success: true as const };
  });