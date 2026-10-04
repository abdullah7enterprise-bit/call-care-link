CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 100),
  company_name TEXT NOT NULL CHECK (char_length(company_name) BETWEEN 1 AND 150),
  business_email TEXT NOT NULL CHECK (char_length(business_email) <= 255),
  phone_whatsapp TEXT NOT NULL CHECK (char_length(phone_whatsapp) BETWEEN 5 AND 40),
  service_interest TEXT NOT NULL CHECK (service_interest IN ('Cold Calling', 'Appointment Setting', 'Lead Generation', 'SDR / BDR Support', 'Customer Support', 'Virtual Assistant', 'Data Entry & Web Research', 'Other')),
  monthly_requirement TEXT NOT NULL CHECK (char_length(monthly_requirement) BETWEEN 1 AND 120),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.contact_rate_limits (
  identifier_hash TEXT PRIMARY KEY,
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  submission_count INTEGER NOT NULL DEFAULT 1 CHECK (submission_count BETWEEN 1 AND 20)
);
GRANT ALL ON public.contact_rate_limits TO service_role;
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;