import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | MONTECH Global Services" },
      { name: "description", content: "Terms for using the MONTECH Global Services website." },
      { property: "og:title", content: "Terms | MONTECH Global Services" },
      { property: "og:description", content: "Terms for using the MONTECH Global Services website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms">
      <p>By using this website, you agree to these terms.</p>
      <h2>Website information</h2>
      <p>Content on this website is for general information about MONTECH Global Services. Service details, scope, and pricing are confirmed separately in writing.</p>
      <h2>Consultation requests</h2>
      <p>Submitting a consultation request does not create a contract. We will contact you to discuss your requirements.</p>
      <h2>Contact</h2>
      <p>Questions about these terms can be sent to <a href="mailto:info@montechglobalservices.com">info@montechglobalservices.com</a>.</p>
    </LegalPage>
  );
}
