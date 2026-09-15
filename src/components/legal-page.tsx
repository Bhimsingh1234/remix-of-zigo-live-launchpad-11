import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/zigo-logo.png.asset.json";

export function LegalPage({ title, summary }: { title: string; summary: string }) {
  return <main className="legal-shell">
    <div className="legal-card">
      <Link to="/" aria-label="Zigo Live home"><img src={logo.url} alt="Zigo Live" className="h-12 w-auto" /></Link>
      <div className="mt-12 icon-tile"><ShieldCheck /></div>
      <h1 className="mt-5 text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{summary}</p>
      <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground">
        <p>This page is being prepared for Zigo Live. The final policy will explain the standards, responsibilities and protections that apply when using the platform.</p>
        <p>For policy questions before the final version is published, contact <a className="text-primary hover:underline" href="mailto:stackearn@gmail.com">stackearn@gmail.com</a>.</p>
      </div>
      <Button variant="glass" className="mt-10" asChild><Link to="/"><ArrowLeft />Back to Zigo</Link></Button>
    </div>
  </main>;
}