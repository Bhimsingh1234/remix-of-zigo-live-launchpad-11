import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { submitOnboardingRequest } from "@/lib/onboarding.functions";

export type ApplicationType = "PARTNER" | "SELLER" | "AGENCY";

const COPY = {
  PARTNER: { title: "Partner With Zigo", subtitle: "Tell us about yourself and how you would like to work with Zigo.", submit: "Submit Partnership Request" },
  SELLER: { title: "Become a Zigo Coin Seller", subtitle: "Tell us about your business and recharge experience.", submit: "Apply as Coin Seller" },
  AGENCY: { title: "Become a Zigo Agency", subtitle: "Build your host network and grow your agency with Zigo.", submit: "Submit Agency Request" },
} as const;

type FormErrors = Record<string, string>;

const fieldClass = "h-12 w-full rounded-md border border-input bg-input/40 px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 placeholder:text-muted-foreground";
const areaClass = `${fieldClass} min-h-28 resize-y py-3`;

function Field({ label, name, required, error, children, ...props }: { label: string; name: string; required?: boolean; error?: string; children?: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <label className="grid gap-2 text-sm font-medium text-foreground"><span>{label}{required ? " *" : ""}</span>{children ?? <input name={name} required={required} className={fieldClass} {...props} />}{error && <span className="text-xs text-destructive">{error}</span>}</label>;
}

export function ApplicationDialog({ type, open, onOpenChange }: { type: ApplicationType; open: boolean; onOpenChange: (open: boolean) => void }) {
  const submitRequest = useServerFn(submitOnboardingRequest);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const copy = COPY[type];

  const attribution = useMemo(() => ({ utmSource: "", utmMedium: "", utmCampaign: "", utmContent: "", referrer: "", landingPage: "" }), []);
  useEffect(() => {
    if (!open || typeof window === "undefined") return;
    const query = new URLSearchParams(window.location.search);
    Object.assign(attribution, {
      utmSource: query.get("utm_source") ?? "", utmMedium: query.get("utm_medium") ?? "",
      utmCampaign: query.get("utm_campaign") ?? "", utmContent: query.get("utm_content") ?? "",
      referrer: document.referrer, landingPage: window.location.href,
    });
  }, [open, attribution]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());
    const nextErrors: FormErrors = {};
    const required = ["fullName", "email", "mobileNumber", "whatsappNumber", "country", "state", "description"];
    if (type === "PARTNER") required.push("partnerType");
    if (type === "AGENCY") required.push("agencyName", "city");
    required.forEach((name) => { if (!String(values[name] ?? "").trim()) nextErrors[name] = "This field is required"; });
    if (!/^\S+@\S+\.\S+$/.test(String(values.email ?? ""))) nextErrors.email = "Enter a valid email";
    for (const name of ["mobileNumber", "whatsappNumber"]) if (!/^[+\d][\d\s()-]{6,23}$/.test(String(values[name] ?? ""))) nextErrors[name] = "Enter a valid number";
    if (String(values.description ?? "").trim().length < 20) nextErrors.description = "Please provide at least 20 characters";
    if (!form.get("agreed")) nextErrors.agreed = "Please confirm the information is accurate";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    try {
      await submitRequest({ data: {
        type, fullName: String(values.fullName), companyName: String(values.companyName ?? ""), agencyName: String(values.agencyName ?? ""),
        email: String(values.email), mobileNumber: String(values.mobileNumber), whatsappNumber: String(values.whatsappNumber),
        country: String(values.country), state: String(values.state), city: String(values.city ?? ""), partnerType: String(values.partnerType ?? ""),
        website: String(values.website ?? ""), socialMedia: String(values.socialMedia ?? ""), experience: String(values.experience ?? ""),
        numberOfHosts: values.numberOfHosts ? Number(values.numberOfHosts) : undefined, investmentCapacity: String(values.investmentCapacity ?? ""),
        expectedMonthlyBusiness: String(values.expectedMonthlyBusiness ?? ""), currentPlatform: String(values.currentPlatform ?? ""),
        hearAboutZigo: String(values.hearAboutZigo ?? ""), paymentBusinessDetails: String(values.paymentBusinessDetails ?? ""),
        description: String(values.description), agreed: true, websiteCheck: String(values.websiteCheck ?? ""), ...attribution,
      } });
      setSuccess(true);
      toast.success("Your request has been submitted successfully.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally { setSubmitting(false); }
  };

  const close = () => { setSuccess(false); setErrors({}); onOpenChange(false); };
  return <Dialog open={open} onOpenChange={(value) => { if (!submitting) value ? onOpenChange(true) : close(); }}>
    <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto border-border/70 bg-card/95 p-0 shadow-neon backdrop-blur-2xl sm:rounded-xl">
      {success ? <div className="grid min-h-96 place-items-center p-8 text-center">
        <div><div className="mx-auto grid size-20 place-items-center rounded-full bg-success/15 text-success"><Check className="size-10" /></div>
          <DialogTitle className="mt-6 text-2xl">Application Submitted Successfully!</DialogTitle>
          <DialogDescription className="mx-auto mt-3 max-w-lg text-base leading-7">Thank you for partnering with Zigo. Our team will review your request and contact you within 24 hours.</DialogDescription>
          <p className="mt-3 text-sm text-muted-foreground">Your application has been received successfully.</p>
          <Button variant="neon" size="lg" className="mt-7" onClick={close}>Back to Zigo</Button>
        </div></div> : <>
        <DialogHeader className="border-b border-border/70 px-6 py-6 sm:px-8"><DialogTitle className="text-2xl">{copy.title}</DialogTitle><DialogDescription className="text-sm">{copy.subtitle}</DialogDescription></DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-5 px-6 pb-8 sm:px-8" noValidate>
          <input className="hidden" name="websiteCheck" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="fullName" required error={errors.fullName} maxLength={120} autoComplete="name" />
            {type === "AGENCY" ? <Field label="Agency Name" name="agencyName" required error={errors.agencyName} maxLength={160} /> : <Field label={type === "PARTNER" ? "Company / Business Name" : "Business Name"} name="companyName" maxLength={160} />}
            <Field label="Email Address" name="email" required error={errors.email} type="email" autoComplete="email" maxLength={255} />
            <Field label="Mobile Number" name="mobileNumber" required error={errors.mobileNumber} type="tel" autoComplete="tel" />
            <Field label="WhatsApp Number" name="whatsappNumber" required error={errors.whatsappNumber} type="tel" />
            <Field label="Country" name="country" required error={errors.country} autoComplete="country-name" />
            <Field label="State" name="state" required error={errors.state} autoComplete="address-level1" />
            <Field label="City" name="city" required={type === "AGENCY"} error={errors.city} autoComplete="address-level2" />
            {type === "PARTNER" && <Field label="Partner Type" name="partnerType" required error={errors.partnerType}><select name="partnerType" className={fieldClass} defaultValue=""><option value="" disabled>Select partner type</option>{["Business Partner","Marketing Partner","Distribution Partner","Strategic Partner","Investment Partner","Technology Partner","Other"].map((value) => <option key={value}>{value}</option>)}</select></Field>}
            {type === "AGENCY" && <Field label="Number of Hosts / Talent" name="numberOfHosts" type="number" min={0} />}
            <Field label="Website" name="website" type="url" placeholder="https://" maxLength={300} />
            <Field label={type === "AGENCY" ? "Website / Social Media" : "Instagram / Social Media"} name="socialMedia" maxLength={500} />
            <Field label={type === "AGENCY" ? "Previous Agency Experience" : "Business Experience"} name="experience" maxLength={1200} />
            {type === "PARTNER" && <Field label="Expected Monthly Business / Investment Capacity" name="investmentCapacity" maxLength={200} />}
            {type === "SELLER" && <Field label="Expected Monthly Recharge Volume" name="expectedMonthlyBusiness" maxLength={200} />}
            {(type === "AGENCY" || type === "SELLER") && <Field label={type === "AGENCY" ? "Current Platform / Agency Name" : "Current Recharge / Reselling Experience"} name="currentPlatform" maxLength={200} />}
            {type === "AGENCY" && <Field label="How did you hear about Zigo?" name="hearAboutZigo" maxLength={200} />}
          </div>
          {type === "SELLER" && <label className="grid gap-2 text-sm font-medium"><span>Payment / Business Details</span><textarea name="paymentBusinessDetails" className={areaClass} maxLength={1000} placeholder="Describe accepted payment methods or business setup. Never share passwords, PINs, OTPs or card numbers." /></label>}
          <label className="grid gap-2 text-sm font-medium"><span>{type === "PARTNER" ? "How would you like to partner with Zigo? / Message" : "Description / Message"} *</span><textarea name="description" required className={areaClass} maxLength={3000} />{errors.description && <span className="text-xs text-destructive">{errors.description}</span>}</label>
          <label className="flex items-start gap-3 text-sm text-muted-foreground"><input name="agreed" type="checkbox" className="mt-1 size-4 accent-primary" /><span>I agree that the information provided is accurate.{errors.agreed && <span className="mt-1 block text-xs text-destructive">{errors.agreed}</span>}</span></label>
          <Button variant="neon" size="lg" disabled={submitting} className="w-full sm:w-fit">{submitting ? <><Loader2 className="animate-spin" />Submitting…</> : <>{copy.submit} <span aria-hidden>→</span></>}</Button>
        </form></>}
    </DialogContent>
  </Dialog>;
}