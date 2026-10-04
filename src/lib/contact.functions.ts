import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const consultationServices = [
  "Cold Calling",
  "Appointment Setting",
  "Lead Generation",
  "SDR / BDR Support",
  "Customer Support",
  "Virtual Assistant",
  "Data Entry & Web Research",
  "Other",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name.").max(100, "Keep your name under 100 characters."),
  companyName: z.string().trim().min(1, "Enter your company name.").max(150, "Keep the company name under 150 characters."),
  businessEmail: z.string().trim().email("Enter a valid business email.").max(255, "Keep the email under 255 characters."),
  phoneWhatsapp: z.string().trim().min(5, "Enter a valid phone or WhatsApp number.").max(40, "Keep the number under 40 characters."),
  serviceInterest: z.enum(consultationServices, { required_error: "Choose a service." }),
  monthlyRequirement: z.string().trim().min(1, "Enter your estimated monthly requirement.").max(120, "Keep this under 120 characters."),
  message: z.string().trim().min(1, "Tell us briefly about your requirements.").max(2000, "Keep your message under 2,000 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

async function hashIdentifier(value: string) {
  const bytes = new TextEncoder().encode(value.trim().toLowerCase());
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export const submitContactRequest = createServerFn({ method: "POST" })
  .validator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const identifierHash = await hashIdentifier(data.businessEmail);
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

    const { data: limit, error: limitReadError } = await supabaseAdmin
      .from("contact_rate_limits")
      .select("submission_count, window_started_at")
      .eq("identifier_hash", identifierHash)
      .maybeSingle();

    if (limitReadError) throw new Error("Unable to verify this request. Please try again.");
    if (limit && limit.window_started_at > oneHourAgo && limit.submission_count >= 3) {
      throw new Error("Too many requests. Please wait before trying again.");
    }

    const nextLimit = limit && limit.window_started_at > oneHourAgo
      ? { submission_count: limit.submission_count + 1, window_started_at: limit.window_started_at }
      : { submission_count: 1, window_started_at: new Date().toISOString() };

    const { error: limitWriteError } = await supabaseAdmin.from("contact_rate_limits").upsert({
      identifier_hash: identifierHash,
      ...nextLimit,
    });
    if (limitWriteError) throw new Error("Unable to verify this request. Please try again.");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      full_name: data.fullName,
      company_name: data.companyName,
      business_email: data.businessEmail,
      phone_whatsapp: data.phoneWhatsapp,
      service_interest: data.serviceInterest,
      monthly_requirement: data.monthlyRequirement,
      message: data.message,
    });

    if (error) throw new Error("Your request could not be submitted. Please try again or contact us directly.");
    return { success: true as const };
  });