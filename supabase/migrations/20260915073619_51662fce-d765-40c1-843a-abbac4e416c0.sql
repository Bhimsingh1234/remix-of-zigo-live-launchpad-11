CREATE TYPE public.onboarding_request_type AS ENUM ('USER', 'HOST', 'PARTNER', 'SELLER', 'AGENCY');
CREATE TYPE public.onboarding_request_status AS ENUM ('PENDING', 'REVIEWING', 'APPROVED', 'REJECTED');

CREATE TABLE public.onboarding_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type public.onboarding_request_type NOT NULL,
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 120),
  company_name text,
  agency_name text,
  email text NOT NULL CHECK (char_length(email) <= 255),
  mobile_number text NOT NULL CHECK (char_length(mobile_number) BETWEEN 7 AND 24),
  whatsapp_number text NOT NULL CHECK (char_length(whatsapp_number) BETWEEN 7 AND 24),
  country text NOT NULL CHECK (char_length(country) BETWEEN 2 AND 100),
  state text NOT NULL CHECK (char_length(state) BETWEEN 2 AND 100),
  city text,
  partner_type text,
  website text,
  social_media text,
  experience text,
  number_of_hosts integer CHECK (number_of_hosts IS NULL OR number_of_hosts BETWEEN 0 AND 1000000),
  investment_capacity text,
  expected_monthly_business text,
  current_platform text,
  hear_about_zigo text,
  payment_business_details text,
  description text NOT NULL CHECK (char_length(description) BETWEEN 20 AND 3000),
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  referrer text,
  landing_page text,
  status public.onboarding_request_status NOT NULL DEFAULT 'PENDING',
  admin_note text,
  submission_fingerprint text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT onboarding_requests_type_fields CHECK (
    (type = 'PARTNER' AND partner_type IS NOT NULL)
    OR (type = 'AGENCY' AND agency_name IS NOT NULL)
    OR type = 'SELLER'
  )
);

GRANT ALL ON public.onboarding_requests TO service_role;

ALTER TABLE public.onboarding_requests ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX onboarding_requests_recent_fingerprint_idx
  ON public.onboarding_requests (submission_fingerprint);
CREATE INDEX onboarding_requests_status_created_idx
  ON public.onboarding_requests (status, created_at DESC);
CREATE INDEX onboarding_requests_type_created_idx
  ON public.onboarding_requests (type, created_at DESC);

CREATE OR REPLACE FUNCTION public.set_onboarding_request_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_onboarding_request_updated_at
BEFORE UPDATE ON public.onboarding_requests
FOR EACH ROW
EXECUTE FUNCTION public.set_onboarding_request_updated_at();