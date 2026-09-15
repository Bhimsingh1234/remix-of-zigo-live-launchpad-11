import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/user-agreement")({
  head: () => ({ meta: [{ title: "User Agreement — Zigo Live" }, { name: "description", content: "Terms for using the Zigo Live platform." }, { property: "og:title", content: "User Agreement — Zigo Live" }, { property: "og:description", content: "Terms for using the Zigo Live platform." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/user-agreement" }] }),
  component: () => <LegalPage title="User Agreement" summary="The terms and community responsibilities for using Zigo Live." />,
});