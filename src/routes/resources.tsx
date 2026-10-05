import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | MONTECH Global Services" },
      { name: "description", content: "Helpful links and contact information from MONTECH Global Services." },
      { property: "og:title", content: "Resources | MONTECH Global Services" },
      { property: "og:description", content: "Helpful links and contact information from MONTECH Global Services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <LegalPage title="Resources">
      <p>Useful links for working with MONTECH Global Services.</p>
      <h2>Get started</h2>
      <p><a href="/#services">Our services</a> · <a href="/#how-it-works">How it works</a> · <a href="/#contact">Get a Free Consultation</a></p>
      <h2>Policies</h2>
      <p><Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms</Link></p>
      <h2>Contact</h2>
      <p>Email <a href="mailto:info@montechglobalservices.com">info@montechglobalservices.com</a> or call <a href="tel:+8801576768207">+880 1576 768207</a>.</p>
    </LegalPage>
  );
}
