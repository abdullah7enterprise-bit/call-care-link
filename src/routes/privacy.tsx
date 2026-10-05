import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | MONTECH Global Services" },
      { name: "description", content: "How MONTECH Global Services collects, uses, and protects information shared through our website." },
      { property: "og:title", content: "Privacy Policy | MONTECH Global Services" },
      { property: "og:description", content: "How MONTECH Global Services handles information shared through our website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This policy explains how MONTECH Global Services handles information you share with us through this website.</p>
      <h2>Information we collect</h2>
      <p>When you submit the consultation form, we collect your name, company name, business email, phone number, service interest, monthly requirement, and message.</p>
      <h2>How we use it</h2>
      <p>We use this information only to respond to your request and discuss our services. We do not sell your information.</p>
      <h2>Contact</h2>
      <p>For privacy questions, email <a href="mailto:info@montechglobalservices.com">info@montechglobalservices.com</a>.</p>
    </LegalPage>
  );
}
