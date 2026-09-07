import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Headphones,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Shield,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/hero-call-center.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "VoiceAxis | BPO & Call Center Partnership for Growth Teams",
      },
      {
        name: "description",
        content:
          "Professional BPO and call center partner for outbound calls, lead qualification, follow-ups, appointment setting, and customer communication. Competitive pricing, experienced agents, and clear reporting.",
      },
      {
        property: "og:title",
        content: "VoiceAxis | BPO & Call Center Partnership for Growth Teams",
      },
      {
        property: "og:description",
        content:
          "Scale your outreach with experienced agents, flexible scaling, quality monitoring, and transparent reporting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "VoiceAxis | BPO & Call Center Partnership for Growth Teams",
      },
      {
        name: "twitter:description",
        content:
          "Scale your outreach with experienced agents, flexible scaling, quality monitoring, and transparent reporting.",
      },
    ],
  }),
});

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Outbound Calling",
    description:
      "High-touch outbound campaigns delivered by trained agents who represent your brand with professionalism and consistency.",
    icon: Phone,
  },
  {
    title: "Lead Qualification",
    description:
      "Validate interest, capture intent, and pass only sales-ready leads to your team so reps spend time on real opportunities.",
    icon: Users,
  },
  {
    title: "Follow-up Management",
    description:
      "Structured follow-up sequences that keep prospects warm, answer questions, and move conversations forward.",
    icon: MessageSquare,
  },
  {
    title: "Appointment Setting",
    description:
      "Book qualified meetings directly onto your calendar with confirmed attendees and full context for every call.",
    icon: Calendar,
  },
  {
    title: "Customer Communication",
    description:
      "Ongoing customer touchpoints, retention calls, feedback collection, and support routing that protects relationships.",
    icon: Headphones,
  },
  {
    title: "Performance Reporting",
    description:
      "Clear dashboards and scheduled reports on call volume, conversion rates, talk time, and campaign outcomes.",
    icon: BarChart3,
  },
];

const differentiators = [
  {
    title: "Experienced Agents",
    description:
      "Agents trained in consultative calling, objection handling, and CRM hygiene before they ever dial on your behalf.",
    icon: Users,
  },
  {
    title: "Competitive Pricing",
    description:
      "Transparent per-hour, per-seat, and outcome-based models with no hidden fees or long-term lock-ins.",
    icon: TrendingUp,
  },
  {
    title: "Flexible Scaling",
    description:
      "Scale up for product launches or seasonal peaks, then scale back without penalty when demand normalizes.",
    icon: TrendingUp,
  },
  {
    title: "Quality Monitoring",
    description:
      "Recorded calls, live coaching, scorecards, and QA reviews to maintain script adherence and brand voice.",
    icon: Shield,
  },
  {
    title: "Clear Reporting",
    description:
      "Real-time dashboards plus weekly business reviews so you always know what is working and what needs adjusting.",
    icon: BarChart3,
  },
  {
    title: "24/7 Coverage",
    description:
      "Run campaigns across time zones with agents available when your prospects and customers are ready to talk.",
    icon: Clock,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your ideal customer profile, value proposition, objections, and existing sales motion.",
  },
  {
    step: "02",
    title: "Setup",
    description:
      "Agents are trained on your script, systems, and CRM so they sound like an extension of your team.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "Campaigns go live with daily standups, live QA, and rapid feedback loops in the first two weeks.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We review outcomes weekly, refine messaging, and adjust targeting to improve conversion over time.",
  },
];

const plans = [
  {
    name: "Starter",
    description: "Best for testing a new campaign or filling a small pipeline gap.",
    price: "$1,200",
    unit: "/ month",
    features: [
      "1 dedicated agent",
      "40 hours per week",
      "Lead qualification",
      "Follow-up calls",
      "Weekly reporting",
      "Email support",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Growth",
    description: "For teams that need consistent outbound and appointment setting support.",
    price: "$3,500",
    unit: "/ month",
    features: [
      "3 dedicated agents",
      "Full-time coverage",
      "Outbound + appointment setting",
      "CRM integration",
      "Daily dashboards",
      "QA scorecards",
      "Bi-weekly strategy calls",
    ],
    cta: "Talk to sales",
    featured: true,
  },
  {
    name: "Scale",
    description: "Custom capacity, advanced workflows, and dedicated account management.",
    price: "Custom",
    unit: "",
    features: [
      "5+ agents",
      "Multi-timezone coverage",
      "Custom scripts & workflows",
      "API integrations",
      "Real-time analytics",
      "Dedicated account manager",
      "24/7 operations available",
    ],
    cta: "Request quote",
    featured: false,
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">VoiceAxis</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="outline" asChild>
              <a href="#contact">Request quote</a>
            </Button>
            <Button asChild>
              <a href="tel:+15551234567">Call us</a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3">
                <Button variant="outline" asChild className="w-full">
                  <a href="#contact">Request quote</a>
                </Button>
                <Button asChild className="w-full">
                  <a href="tel:+15551234567">Call us</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="bg-hero-gradient px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <Badge
                variant="secondary"
                className="mb-6 text-xs font-semibold uppercase tracking-wider"
              >
                BPO & Call Center Partner
              </Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Scale your outreach with reliable calling operations
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Professional agents for outbound calls, lead qualification, follow-ups, and
                appointment setting. Flexible capacity, transparent reporting, and quality you can
                trust.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">Request a quote</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#services">Explore services</a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>Trained agents in 5 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>Weekly performance reviews</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <img
                src={heroImage}
                alt="Professional call center team providing BPO services and customer outreach"
                width={1344}
                height={768}
                className="h-auto w-full object-cover"
                priority="true"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "500+", label: "Agents deployed" },
              { value: "2M+", label: "Calls handled" },
              { value: "40%", label: "Avg. cost savings" },
              { value: "98%", label: "Client retention" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                End-to-end calling operations
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From first dial to closed deal, our agents support the full outreach lifecycle.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="group transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="bg-secondary/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Built for growth, quality, and control
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We combine experienced talent, competitive pricing, and transparent operations so
                  your outreach keeps pace with your ambitions.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  {[
                    "Agents trained on your script and CRM",
                    "Live QA and recorded call reviews",
                    "Flexible contracts that scale monthly",
                    "Dedicated account manager on Growth plans",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <Card key={item.title} className="bg-card">
                    <CardHeader className="pb-3">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A simple path to live campaigns
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We move fast without cutting corners. Most teams are live within two weeks.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div key={step.step} className="relative">
                  <div className="text-5xl font-bold text-border">{step.step}</div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-secondary/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Transparent, scalable pricing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose a plan that fits your current volume and upgrade as you grow.
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col ${plan.featured ? "border-accent shadow-lg" : ""}`}
                >
                  {plan.featured && (
                    <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">
                      Most popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.unit}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardContent className="pt-0">
                    <Button
                      variant={plan.featured ? "default" : "outline"}
                      className="w-full"
                      asChild
                    >
                      <a href="#contact">{plan.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-brand-gradient px-4 py-20 text-primary-foreground sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to scale your calling operation?
                </h2>
                <p className="mt-4 text-lg opacity-90">
                  Tell us about your campaign and we will respond with a tailored proposal within one
                  business day.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 opacity-80" aria-hidden="true" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 opacity-80" aria-hidden="true" />
                    <span>hello@voiceaxis.example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 opacity-80" aria-hidden="true" />
                    <span>Monday - Friday: 8am - 8pm EST</span>
                  </div>
                </div>
              </div>
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-6 sm:p-8">
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Thanks for your interest. Our team will contact you shortly.");
                    }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Work email
                        </label>
                        <Input id="email" type="email" placeholder="you@company.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input id="company" placeholder="Company name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        What do you need help with?
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Outbound calling, lead qualification, appointment setting..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send inquiry
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      We respect your privacy and never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">VoiceAxis</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Reliable BPO and call center support that helps businesses generate qualified leads,
                book appointments, and build stronger customer relationships.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Services</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-foreground">
                    Outbound calling
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground">
                    Lead qualification
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground">
                    Appointment setting
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground">
                    Customer communication
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#why-us" className="hover:text-foreground">
                    Why VoiceAxis
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-foreground">
                    Our process
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VoiceAxis. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Privacy policy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms of service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
