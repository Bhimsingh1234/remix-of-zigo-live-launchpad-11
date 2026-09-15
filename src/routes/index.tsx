import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, BadgeDollarSign, CheckCircle2, CirclePlay, Clock3, Download, Gift,
  Heart, Headphones, Menu, MessageCircle, PhoneCall, Radio, ShieldCheck, Sparkles,
  Star, TrendingUp, UserPlus, Users, Video, WalletCards, X, Zap,
} from "lucide-react";

import { ApplicationDialog, type ApplicationType } from "@/components/application-dialog";
import { Button } from "@/components/ui/button";
import appVisual from "@/assets/zigo-app-visual.png";
import logo from "@/assets/zigo-logo.png.asset.json";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.stackearn.zigo.live";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zigo Live – Go Live, Connect & Grow" },
      { name: "description", content: "Join Zigo Live – a next-generation live streaming platform for live entertainment, real-time chat, calls, virtual gifts, hosts, agencies, sellers and business partners." },
      { property: "og:title", content: "Zigo Live – Go Live, Connect & Grow" },
      { property: "og:description", content: "Go live, connect in real time and grow with the Zigo community." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Zigo Live", url: "/", email: "stackearn@gmail.com", sameAs: [PLAY_URL] }) }],
  }),
  component: Index,
});

const features = [
  [Radio, "Live Streaming", "Share moments and talent with a real-time audience."],
  [Video, "Audio & Video Calls", "Move from discovery to genuine face-to-face connection."],
  [MessageCircle, "Real-time Chat", "Keep every live room lively with instant conversation."],
  [Gift, "Virtual Gifts", "Celebrate creators with expressive digital gifts."],
  [WalletCards, "Coins & Wallet", "Enjoy a simple, flexible virtual coin experience."],
  [UserPlus, "Follow & Connect", "Find people you enjoy and build lasting connections."],
  [BadgeDollarSign, "Host Earnings", "Turn creativity and consistency into opportunity."],
  [ShieldCheck, "Safe Community", "Designed for positive, respectful live experiences."],
] as const;

const benefits = [[Clock3,"24/7 Community"],[Zap,"Real-time Connections"],[CirclePlay,"Live Entertainment"],[TrendingUp,"Earn & Grow"]] as const;

function StoreButton({ store, href = PLAY_URL }: { store: "Apple" | "Google"; href?: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className="store-button" aria-label={store === "Google" ? "Get Zigo Live on Google Play" : "Download Zigo Live on the App Store"}>
    {store === "Google" ? <CirclePlay className="size-7 text-accent-foreground" /> : <span className="text-2xl">●</span>}
    <span><small>{store === "Google" ? "GET IT ON" : "Download on the"}</small><strong>{store === "Google" ? "Google Play" : "App Store"}</strong></span>
  </a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [application, setApplication] = useState<ApplicationType | null>(null);
  const openApplication = (type: ApplicationType) => setApplication(type);

  return <div className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/30">
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-2xl">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:px-8">
        <a href="#home" className="flex min-w-0 items-center"><img src={logo.url} alt="Zigo Live" className="h-12 w-auto max-w-48 object-contain" /></a>
        <nav className="ml-auto hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {[["Home","home"],["Features","features"],["Join Zigo","join"],["About","about"],["Contact","contact"]].map(([label,id]) => <a key={id} className="nav-link" href={`#${id}`}>{label}</a>)}
        </nav>
        <Button variant="neon" className="ml-5 hidden lg:inline-flex" asChild><a href={PLAY_URL} target="_blank" rel="noreferrer"><Download />Download App</a></Button>
        <Button variant="glass" size="icon" className="shrink-0 lg:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="border-t border-border bg-card/95 px-5 py-4 backdrop-blur-2xl lg:hidden">{[["Home","home"],["Features","features"],["Join Zigo","join"],["About","about"],["Contact","contact"]].map(([label,id]) => <a key={id} onClick={() => setMenuOpen(false)} className="block border-b border-border/60 py-3 text-sm font-medium" href={`#${id}`}>{label}</a>)}<Button variant="neon" className="mt-4 w-full" asChild><a href={PLAY_URL} target="_blank" rel="noreferrer">Download App</a></Button></nav>}
    </header>

    <main>
      <section id="home" className="hero-shell relative flex min-h-[760px] items-center pt-28">
        <div className="particle particle-one" /><div className="particle particle-two" /><div className="particle particle-three" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div className="relative z-10 max-w-2xl animate-rise">
            <div className="eyebrow"><span className="size-2 rounded-full bg-live shadow-live" /> LIVE • CONNECT • GROW</div>
            <h1 className="mt-7 text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">Go Live.<br/><span className="text-gradient">Connect.</span><br/>Grow.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Zigo Live brings people closer through live streaming, real-time chat, audio &amp; video calls, virtual gifts and more. Meet new people, build connections and be part of a growing community.</p>
            <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2"><StoreButton store="Apple" href="mailto:stackearn@gmail.com?subject=Zigo%20Live%20for%20iOS" /><StoreButton store="Google" /></div>
            <div className="mt-7 flex items-center gap-3 text-sm text-muted-foreground"><div className="flex -space-x-2">{["ZA","RO","AN","PR"].map((name) => <span key={name} className="avatar-mini">{name}</span>)}</div><span>Join a growing global community</span></div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[640px] animate-float-soft" aria-label="Zigo Live app preview">
            <div className="phone-glow" />
            <img src={appVisual} alt="Two phones showing Zigo Live streams, chat and discovery" width={1200} height={1200} fetchPriority="high" className="relative z-10 h-full w-full object-contain" />
            <span className="float-chip chip-live"><Radio /> LIVE</span><span className="float-chip chip-heart"><Heart className="fill-current" /></span><span className="float-chip chip-gift"><Gift /></span><span className="float-chip chip-chat"><MessageCircle /> Amazing live!</span>
          </div>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-5 max-w-7xl px-5 lg:px-8"><div className="benefit-strip">{benefits.map(([Icon,label]) => <div key={label} className="benefit"><Icon /><span>{label}</span></div>)}</div></div>

      <section id="features" className="section-shell">
        <div className="section-heading"><span className="eyebrow">BUILT FOR EVERY CONNECTION</span><h2>Everything You Need to <span className="text-gradient">Connect, Go Live &amp; Grow</span></h2><p>Purpose-built tools for a lively, rewarding and connected community.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(([Icon,title,description], index) => <article key={title} className="feature-card" style={{ animationDelay: `${index * 50}ms` }}><div className="icon-tile"><Icon /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section id="join" className="section-shell pt-10">
        <div className="section-heading"><span className="eyebrow">JOIN OUR COMMUNITY</span><h2>Become a Part of <span className="text-gradient">Zigo</span></h2><p>Whether you want to enjoy Zigo, showcase your talent, build a business or create new opportunities, there’s a place for you.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <RoleCard featured icon={Users} title="Become a User" text="Join Zigo and explore live entertainment, connect with people, chat, enjoy live streams and discover new experiences." button="Join Zigo" href={PLAY_URL} />
          <RoleCard featured icon={Star} title="Become a Host" text="Go live, showcase your talent, build your audience, receive virtual gifts and grow with Zigo." button="Become a Host" href={PLAY_URL} />
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <RoleCard icon={CheckCircle2} title="Become a Partner" text="Partner with Zigo and explore business, marketing, distribution and strategic growth opportunities." button="Become a Partner" onClick={() => openApplication("PARTNER")} />
          <RoleCard icon={BadgeDollarSign} title="Become a Coin Seller" text="Build your own Zigo coin-selling business and serve Zigo users with flexible recharge opportunities." button="Become a Seller" onClick={() => openApplication("SELLER")} />
          <RoleCard icon={TrendingUp} title="Become an Agency" text="Build your host network, recruit talent, manage your team and grow your agency with Zigo." button="Become an Agency" onClick={() => openApplication("AGENCY")} />
        </div>
      </section>

      <section id="about" className="section-shell"><div className="about-band"><div><span className="eyebrow">ABOUT ZIGO</span><h2>More Than Just a Live App</h2></div><p>Zigo Live is built to bring people together through live streaming, real-time communication and digital experiences. Our goal is to create a platform where users can connect, creators can grow, agencies can build communities and partners can discover new opportunities.</p></div></section>

      <section className="section-shell pt-4"><div className="cta-band"><Sparkles className="cta-spark" /><h2>Ready to Be Part of Zigo?</h2><p>Download Zigo and start your journey today.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button variant="neon" size="lg" asChild><a href={PLAY_URL} target="_blank" rel="noreferrer"><Download />Download Google Play</a></Button><Button variant="glass" size="lg" onClick={() => openApplication("PARTNER")}>Become a Partner</Button><Button variant="glass" size="lg" onClick={() => openApplication("AGENCY")}>Become an Agency</Button></div></div></section>

      <section id="contact" className="section-shell py-14"><div className="contact-row"><div><span className="eyebrow">LET’S TALK</span><h2>Contact Zigo</h2><p>Questions about the app, partnerships or growing with Zigo?</p></div><Button variant="glass" size="lg" asChild><a href="mailto:stackearn@gmail.com"><MessageCircle />stackearn@gmail.com</a></Button></div></section>
    </main>

    <footer className="border-t border-border/70 px-5 py-6 text-center text-sm text-muted-foreground"><div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-3 gap-y-2"><span>© 2026 Zigo Live</span><span>·</span><Link to="/privacy-policy">Privacy Policy</Link><span>·</span><Link to="/child-safety-policy">Child Safety Policy</Link><span>·</span><Link to="/user-agreement">User Agreement</Link><span>·</span><a href="mailto:stackearn@gmail.com">Contact Us</a><span>·</span><button onClick={() => openApplication("PARTNER")}>Become a Partner</button><span>·</span><button onClick={() => openApplication("AGENCY")}>Become an Agency</button></div></footer>
    {application && <ApplicationDialog type={application} open onOpenChange={(open) => { if (!open) setApplication(null); }} />}
  </div>;
}

function RoleCard({ icon: Icon, title, text, button, href, onClick, featured = false }: { icon: typeof Users; title: string; text: string; button: string; href?: string; onClick?: () => void; featured?: boolean }) {
  return <article className={`role-card ${featured ? "role-featured" : ""}`}><div className="icon-tile"><Icon /></div><div className="min-w-0"><h3>{title}</h3><p>{text}</p><Button variant={featured ? "neon" : "glass"} className="mt-6" asChild={Boolean(href)} onClick={onClick}>{href ? <a href={href} target="_blank" rel="noreferrer">{button}<ArrowRight /></a> : <>{button}<ArrowRight /></>}</Button></div></article>;
}