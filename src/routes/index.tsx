import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Headphones,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  SolarPanel,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

import teamImage from "@/assets/montech-team.jpg";
import { ConsultationForm } from "@/components/consultation-form";
import { SiteButton } from "@/components/site-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Montech Global Services | BPO & Remote Business Support" },
      {
        name: "description",
        content:
          "Montech Global Services provides cold calling, appointment setting, lead generation, SDR support, customer support, and virtual assistant services.",
      },
      { property: "og:title", content: "Montech Global Services | BPO & Remote Business Support" },
      {
        property: "og:description",
        content: "Professional BPO support for outreach, sales development, customer service, and day-to-day business operations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://montechglobalservices.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://montechglobalservices.com/" }],
  }),
  component: Index,
});

const services = [
  { name: "Cold Calling", description: "Professional outbound calling aligned with your campaign goals.", icon: Headphones },
  { name: "Appointment Setting", description: "Focused prospect engagement that helps fill your team's calendar.", icon: ClipboardCheck },
  { name: "Lead Generation", description: "Targeted outreach to identify and connect with relevant prospects.", icon: Target },
  { name: "Lead Qualification", description: "Structured conversations that help your team focus on better-fit opportunities.", icon: Check },
  { name: "SDR / BDR Support", description: "Flexible sales development support built around your workflow.", icon: BarChart3 },
  { name: "Customer Support", description: "Responsive support that represents your business with care.", icon: MessageCircle },
  { name: "Virtual Assistant Services", description: "Reliable day-to-day assistance that keeps work moving.", icon: Users },
  { name: "Data Entry & Web Research", description: "Careful data handling and practical online research support.", icon: Search },
  { name: "E-commerce Support", description: "Operational assistance for online stores and customer workflows.", icon: ShoppingCart },
  { name: "B2B Outreach", description: "Consistent, professional outreach tailored to business audiences.", icon: Building2 },
];

const industries = [
  { name: "Financial Services", icon: CircleDollarSign },
  { name: "Home Services", icon: Home },
  { name: "Solar", icon: SolarPanel },
  { name: "Insurance", icon: ShieldCheck },
  { name: "Real Estate", icon: Building2 },
  { name: "B2B Services", icon: Users },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Local Services", icon: Target },
];

const navItems = [
  ["Services", "#services"],
  ["Why Montech", "#why-us"],
  ["How It Works", "#how-it-works"],
  ["Industries", "#industries"],
  ["About", "#about"],
] as const;

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Montech Global Services home">
      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary text-lg font-black text-primary-foreground shadow-sm">
        M
      </span>
      <span className="min-w-0 leading-none">
        <span className={inverse ? "block truncate text-base font-extrabold text-footer-foreground" : "block truncate text-base font-extrabold text-foreground"}>MONTECH</span>
        <span className={inverse ? "mt-1 block truncate text-[0.6rem] font-bold uppercase tracking-[0.18em] text-footer-muted" : "mt-1 block truncate text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground"}>
          Global Services
        </span>
      </span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
          <Brand />
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <SiteButton href="#contact" className="hidden lg:inline-flex">
            Get a Free Consultation <ArrowRight className="size-4" aria-hidden="true" />
          </SiteButton>
          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-md border border-border bg-background text-foreground lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-bold text-foreground hover:bg-secondary"
                >
                  {label}
                </a>
              ))}
              <SiteButton href="#contact" className="mt-3" onClick={() => setMenuOpen(false)}>
                Get a Free Consultation
              </SiteButton>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative flex min-h-[760px] items-center overflow-hidden pt-20 lg:min-h-[min(860px,94vh)]" aria-labelledby="hero-title">
          <img
            src={teamImage}
            alt="A professional remote operations team collaborating in a modern office"
            width={1600}
            height={1000}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-[67%_center]"
          />
          <div className="absolute inset-0 bg-hero-mobile md:bg-[linear-gradient(90deg,var(--hero-overlay)_0%,var(--hero-overlay)_45%,var(--hero-overlay-soft)_72%,transparent_100%)]" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="max-w-2xl text-primary-foreground">
              <p className="mb-6 inline-flex items-center gap-2 border-l-2 border-accent bg-hero-label px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">
                <span className="size-1.5 rounded-full bg-accent" /> Global BPO & Remote Support
              </p>
              <h1 id="hero-title" className="text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
                BPO support built to move your business forward.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg sm:leading-8">
                Cold calling, appointment setting, lead generation, SDR support, customer support, and virtual assistant services—delivered as an extension of your team.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <SiteButton href="#contact" variant="light">
                  Get a Free Consultation <ArrowRight className="size-4" aria-hidden="true" />
                </SiteButton>
                <SiteButton
                  href="#contact"
                  className="border border-hero-border bg-transparent text-primary-foreground shadow-none hover:bg-hero-label"
                >
                  Contact Us
                </SiteButton>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background" aria-label="Our working principles">
          <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              [Users, "Flexible Team Support", "Support shaped around your business needs."],
              [Target, "Goal-Aligned Delivery", "Every engagement starts with your priorities."],
              [Clock3, "Dependable Operations", "Consistent communication and thoughtful execution."],
            ].map(([Icon, title, text]) => {
              const TrustIcon = Icon as typeof Users;
              return (
                <div key={title as string} className="flex gap-4 py-8 md:px-7 first:pl-0 last:pr-0">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent text-primary">
                    <TrustIcon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-bold">{title as string}</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{text as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro eyebrow="What we do" title="Specialized support across your business" text="Choose the services that fit your goals, workflows, and growth plans." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {services.map(({ name, description, icon: Icon }) => (
                <article key={name} className="group flex min-h-60 flex-col rounded-md border border-border bg-background p-6 shadow-[0_12px_36px_var(--card-shadow)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_16px_42px_var(--card-shadow-hover)]">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent text-primary">
                    <Icon className="size-5 transition-transform group-hover:-translate-y-0.5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold leading-6">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-eyebrow">Why choose Montech</p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-5xl">Support that adapts to how your business operates.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
                We approach every engagement as an extension of your operation—learning your requirements, aligning with your process, and keeping communication clear.
              </p>
              <SiteButton href="#contact" variant="secondary" className="mt-8">
                Discuss Your Requirements <ArrowRight className="size-4" aria-hidden="true" />
              </SiteButton>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                [Sparkles, "Built Around Your Needs", "Select the support functions that matter most to your business."],
                [Users, "An Extension of Your Team", "Collaborative support designed to work alongside your internal team."],
                [ShieldCheck, "Professional Communication", "Clear, respectful communication across every customer and prospect touchpoint."],
                [Zap, "Practical and Focused", "A straightforward approach centered on your real operational priorities."],
              ].map(([Icon, title, text]) => {
                const ReasonIcon = Icon as typeof Users;
                return (
                  <article key={title as string} className="rounded-md border border-border border-t-primary bg-secondary p-6 shadow-[0_10px_30px_var(--card-shadow)]">
                    <ReasonIcon className="size-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-bold">{title as string}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-24" aria-labelledby="process-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">How it works</p>
              <h2 id="process-title" className="mt-4 text-3xl font-extrabold sm:text-5xl">A clear path from brief to support.</h2>
            </div>
            <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-0">
              {[
                ["01", "Share Your Requirements", "Tell us about your goals, current process, and the support you need."],
                ["02", "Shape the Right Approach", "We discuss the service mix and workflow that best fits your operation."],
                ["03", "Start Working Together", "Your support begins with clear expectations and ongoing communication."],
              ].map(([number, title, text]) => (
                <li key={number} className="border-t border-process-border pt-6 md:px-8 md:first:pl-0 md:last:pr-0">
                  <span className="text-sm font-black text-accent">{number}</span>
                  <h3 className="mt-8 text-xl font-bold">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-process-muted">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="industries" className="scroll-mt-20 bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro eyebrow="Industries" title="Versatile support for varied sectors" text="Our services are structured to support businesses across customer-focused and growth-driven industries." />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map(({ name, icon: Icon }) => (
                <div key={name} className="flex items-center gap-4 rounded-md border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold">{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg shadow-[0_24px_60px_var(--image-shadow)] sm:min-h-[520px]">
              <img src={teamImage} alt="Business support specialists discussing an outsourcing workflow together" loading="lazy" width={1600} height={1008} className="absolute inset-0 size-full object-cover object-[62%_center]" />
            </div>
            <div className="lg:pl-10">
              <p className="section-eyebrow">About us</p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-5xl">Practical remote support with a global outlook.</h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Montech Global Services provides BPO and remote business support for companies that need dependable help across sales outreach, customer service, administration, research, and e-commerce operations.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Our focus is simple: understand what your business needs, communicate clearly, and provide support that fits your way of working.
              </p>
              <a href="mailto:info@montechglobalservices.com" className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:underline">
                info@montechglobalservices.com <ChevronRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-cta py-20 text-primary-foreground sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="lg:pt-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Free consultation</p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-5xl">Tell us where your business needs support.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-hero-muted">
                Share your requirements and our team will review the best-fit service approach for your operation.
              </p>
              <div className="mt-9 space-y-4 border-t border-process-border pt-7">
                <p className="font-bold">Montech Global Services</p>
                <a href="mailto:info@montechglobalservices.com?subject=Free%20Consultation%20Request" className="flex items-center gap-3 text-sm text-hero-muted transition-colors hover:text-primary-foreground">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-hero-label text-accent"><Mail className="size-5" aria-hidden="true" /></span>
                  info@montechglobalservices.com
                </a>
                <a href="tel:+8801576768207" className="flex items-center gap-3 text-sm text-hero-muted transition-colors hover:text-primary-foreground">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-hero-label text-accent"><Phone className="size-5" aria-hidden="true" /></span>
                  +880 1576 768207
                </a>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </section>
      </main>

      <footer className="bg-footer py-12 text-footer-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Brand inverse />
            <p className="mt-5 text-sm text-footer-muted">BPO & Remote Business Support</p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="mailto:info@montechglobalservices.com" className="hover:text-primary-foreground">info@montechglobalservices.com</a>
              <a href="tel:+8801576768207" className="hover:text-primary-foreground">+880 1576 768207</a>
            </div>
          </div>
          <div className="md:text-right">
            <a href="#top" className="inline-flex items-center gap-2 text-sm font-bold hover:text-primary-foreground">Back to top <ArrowRight className="size-4 -rotate-90" /></a>
            <p className="mt-5 text-xs text-footer-muted">© 2026 Montech Global Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-2xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}