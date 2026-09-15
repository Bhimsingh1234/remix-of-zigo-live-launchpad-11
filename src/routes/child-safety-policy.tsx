import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/child-safety-policy")({
  head: () => ({ meta: [{ title: "Child Safety Policy — Zigo Live" }, { name: "description", content: "Child safety standards and protections for Zigo Live." }, { property: "og:title", content: "Child Safety Policy — Zigo Live" }, { property: "og:description", content: "Child safety standards and protections for Zigo Live." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/child-safety-policy" }] }),
  component: () => <LegalPage title="Child Safety Policy" summary="Our commitment to a safe, age-appropriate and respectful community." />,
});