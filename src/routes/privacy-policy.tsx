import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Zigo Live" }, { name: "description", content: "Privacy information for Zigo Live users." }, { property: "og:title", content: "Privacy Policy — Zigo Live" }, { property: "og:description", content: "Privacy information for Zigo Live users." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/privacy-policy" }] }),
  component: () => <LegalPage title="Privacy Policy" summary="How Zigo Live protects and handles personal information." />,
});