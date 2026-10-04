import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  consultationServices,
  contactSchema,
  submitContactRequest,
  type ContactFormValues,
} from "@/lib/contact.functions";

const fieldClassName = "h-12 border-input bg-background px-4 text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-2";

export function ConsultationForm() {
  const submitRequest = useServerFn(submitContactRequest);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      businessEmail: "",
      phoneWhatsapp: "",
      monthlyRequirement: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    setSubmitError("");
    try {
      await submitRequest({ data: values });
      reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setSubmitError(error instanceof Error ? error.message : "Your request could not be submitted. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-md bg-background p-5 text-left text-foreground shadow-[0_24px_60px_var(--button-shadow-dark)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
          <Input id="fullName" autoComplete="name" maxLength={100} aria-invalid={Boolean(errors.fullName)} className={fieldClassName} {...register("fullName")} />
        </FormField>
        <FormField label="Company Name" htmlFor="companyName" error={errors.companyName?.message}>
          <Input id="companyName" autoComplete="organization" maxLength={150} aria-invalid={Boolean(errors.companyName)} className={fieldClassName} {...register("companyName")} />
        </FormField>
        <FormField label="Business Email" htmlFor="businessEmail" error={errors.businessEmail?.message}>
          <Input id="businessEmail" type="email" inputMode="email" autoComplete="email" maxLength={255} aria-invalid={Boolean(errors.businessEmail)} className={fieldClassName} {...register("businessEmail")} />
        </FormField>
        <FormField label="Phone / WhatsApp" htmlFor="phoneWhatsapp" error={errors.phoneWhatsapp?.message}>
          <Input id="phoneWhatsapp" type="tel" inputMode="tel" autoComplete="tel" maxLength={40} aria-invalid={Boolean(errors.phoneWhatsapp)} className={fieldClassName} {...register("phoneWhatsapp")} />
        </FormField>
        <FormField label="Service Interested In" htmlFor="serviceInterest" error={errors.serviceInterest?.message}>
          <select id="serviceInterest" defaultValue="" aria-invalid={Boolean(errors.serviceInterest)} className={`${fieldClassName} w-full rounded-md border pr-9`} {...register("serviceInterest")}>
            <option value="" disabled>Select a service</option>
            {consultationServices.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </FormField>
        <FormField label="Estimated Monthly Requirement" htmlFor="monthlyRequirement" error={errors.monthlyRequirement?.message}>
          <Input id="monthlyRequirement" placeholder="e.g. 2 agents or 80 hours" maxLength={120} aria-invalid={Boolean(errors.monthlyRequirement)} className={fieldClassName} {...register("monthlyRequirement")} />
        </FormField>
      </div>
      <div className="mt-5">
        <FormField label="Message" htmlFor="message" error={errors.message?.message}>
          <Textarea id="message" rows={5} maxLength={2000} placeholder="Tell us about your goals, current process, and the support you need." aria-invalid={Boolean(errors.message)} className="min-h-36 resize-y border-input bg-background px-4 py-3 text-foreground shadow-none focus-visible:ring-2" {...register("message")} />
        </FormField>
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-6 min-h-12 w-full px-6 font-bold sm:w-auto">
        {isSubmitting ? <><LoaderCircle className="animate-spin" aria-hidden="true" /> Sending request</> : <>Request a Consultation <ArrowRight aria-hidden="true" /></>}
      </Button>

      <div className="mt-5 min-h-12" aria-live="polite">
        {status === "success" && (
          <p className="flex items-start gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> Thank you. Your consultation request has been received.
          </p>
        )}
        {status === "error" && <p className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">{submitError}</p>}
      </div>
    </form>
  );
}

function FormField({ label, htmlFor, error, children }: { label: string; htmlFor: string; error: string | undefined; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-bold">{label} <span className="text-destructive" aria-hidden="true">*</span></label>
      {children}
      {error ? <p className="mt-1.5 text-sm font-semibold text-destructive">{error}</p> : null}
    </div>
  );
}