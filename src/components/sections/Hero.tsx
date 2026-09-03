import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Globe2,
  Layers,
  Monitor,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

const offerings = [
  { icon: Code2, label: "Software Development", desc: "Web, mobile & cloud apps", color: "text-blue dark:text-blue-light", bg: "bg-blue/10 dark:bg-blue/15" },
  { icon: Monitor, label: "Website Design", desc: "High-converting UX/UI", color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-500/10" },
  { icon: Layers, label: "SaaS Products", desc: "Deploy in 24 hours", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: BarChart3, label: "Digital Marketing", desc: "SEO, PPC & social campaigns", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10" },
  { icon: Globe2, label: "Graphic Design", desc: "Brand identity & collateral", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-500/10" },
  { icon: Users, label: "Dedicated Support", desc: "24/7 technical assistance", color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-500/10" },
];

const highlights = [
  { icon: CheckCircle2, text: "Free Consultation", color: "text-emerald-500" },
  { icon: TrendingUp, text: "99% Client Retention", color: "text-blue dark:text-blue-light" },
  { icon: Star, text: "5-Star Rated Service", color: "text-amber-500" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16 sm:pt-20 md:pt-24">

      {/* ── Rich Background & Orbs ─────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 select-none">
        {/* Top Right Primary Orb */}
        <div className="absolute -right-32 -top-32 hidden h-[720px] w-[720px] animate-glow-pulse rounded-full opacity-70 md:block"
          style={{ background: "radial-gradient(circle, rgba(1,48,162,0.18) 0%, rgba(26,79,212,0.08) 45%, transparent 70%)" }} />
        {/* Bottom Left Secondary Orb */}
        <div className="absolute -bottom-40 -left-32 hidden h-[640px] w-[640px] animate-glow-pulse rounded-full opacity-60 md:block"
          style={{ background: "radial-gradient(circle, rgba(26,79,212,0.15) 0%, rgba(1,48,162,0.05) 45%, transparent 70%)", animationDelay: "2.2s" }} />

        {/* Radial Mesh Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(1,48,162,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 85%)",
        }} />

        {/* Dark mode glow enhancements - desktop optimized */}
        <div className="absolute -right-24 -top-24 hidden h-[680px] w-[680px] rounded-full bg-blue/[0.18] blur-[100px] md:dark:block" />
        <div className="absolute -bottom-20 -left-24 hidden h-[580px] w-[580px] rounded-full bg-blue-light/[0.14] blur-[90px] md:dark:block" />
      </div>

      {/* ── Floating tech pills removed ──────────────────────── */}



      {/* ── Main Hero Content ────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-4 pb-14 sm:py-16 lg:py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">

          {/* Left Hero Column */}
          <div>
            <FadeIn>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue/25 bg-blue/8 px-4.5 py-2 text-[0.8125rem] font-extrabold text-blue shadow-sm dark:border-blue-light/30 dark:bg-blue/12 dark:text-blue-light">
                <Sparkles size={14} className="animate-pulse-dot" />
                Digital Solutions Company
                <span className="h-3.5 w-px bg-blue/20 dark:bg-blue-light/20" />
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-600 dark:text-emerald-400">Available Now</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mb-6 font-[family-name:var(--font-jakarta)] text-5xl font-black leading-[1.06] tracking-tight sm:text-[3.35rem] lg:text-[3.65rem]">
                The Best Option{" "}
                <span className="text-gradient">for Your Digital</span>{" "}
                Future
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mb-8 max-w-lg text-[1.0625rem] leading-relaxed text-text-secondary">
                From custom software and stunning websites to ready-to-deploy SaaS platforms - Azytion delivers end-to-end digital solutions that drive real growth.
              </p>
            </FadeIn>

            {/* Feature Highlights */}
            <FadeIn delay={0.2}>
              <div className="mb-9 flex flex-wrap gap-4">
                {highlights.map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-2 text-[0.875rem] font-semibold text-text-secondary">
                    <Icon size={16} className={color} />
                    {text}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.25}>
              <div className="flex flex-wrap gap-3.5">
                <Button href="/contact" size="default">
                  Start Your Project
                  <ArrowRight size={16} />
                </Button>
                <Button href="/products" variant="outline" size="default">
                  Explore Products
                </Button>
              </div>
            </FadeIn>

            {/* Client Social Proof */}
            <FadeIn delay={0.32}>
              <div className="mt-9 flex items-center gap-5">
                <div className="flex -space-x-2.5">
                  {["SR", "MK", "AP", "DM", "EP"].map((initials, i) => (
                    <div key={initials}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-bg bg-gradient-to-br from-blue via-blue-light to-blue-dark text-[0.65rem] font-extrabold text-white shadow-sm"
                      style={{ zIndex: 5 - i }}>
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-[0.85rem] font-black text-text-primary">5.0</span>
                  </div>
                  <span className="text-[0.78rem] text-text-muted">
                    Trusted by <strong className="font-bold text-text-primary">50+ businesses worldwide</strong>
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Live Stats */}
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-border/80 pt-8 dark:border-white/10">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <strong className="block font-[family-name:var(--font-jakarta)] text-3xl font-black leading-none text-text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </strong>
                    <span className="mt-1.5 block text-xs font-medium text-text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Showcase Card */}
          <FadeIn delay={0.18} className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Card Outer Glow */}
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-blue/20 via-blue-light/10 to-transparent blur-2xl dark:from-blue/30 dark:via-blue-light/20" />

              <div className="relative overflow-hidden rounded-[28px] border border-card-border bg-card-bg shadow-[0_24px_64px_rgba(1,48,162,0.12)] dark:border-white/10 dark:shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
                {/* Header Banner */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-dark via-blue to-blue-light px-7 py-6 text-white">
                  <div className="pointer-events-none absolute right-4 top-3 h-16 w-16 animate-spin-slow opacity-20">
                    <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                      <path d="M32 0L34.9 29.1L64 32L34.9 34.9L32 64L29.1 34.9L0 32L29.1 29.1Z" fill="white" />
                    </svg>
                  </div>

                  <div className="relative">
                    <p className="mb-1 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-white/70">
                      What We Deliver
                    </p>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-black text-white">
                      Full-Stack Digital Solutions
                    </h2>
                  </div>
                </div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-2 gap-px bg-border/70 dark:bg-white/5">
                  {offerings.map(({ icon: Icon, label, desc, color, bg }, i) => (
                    <div
                      key={label}
                      className={`group flex flex-col gap-2 bg-card-bg p-5 transition-colors hover:bg-bg-subtle ${i === offerings.length - 1 && offerings.length % 2 !== 0 ? "col-span-2" : ""}`}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${bg}`}>
                        <Icon size={18} className={color} />
                      </div>
                      <div>
                        <p className="text-[0.875rem] font-bold text-text-primary group-hover:text-blue dark:group-hover:text-blue-light transition-colors">{label}</p>
                        <p className="text-[0.78rem] text-text-muted">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between border-t border-border bg-bg-subtle px-6 py-4 dark:border-white/5">
                  <span className="text-[0.8rem] font-bold text-text-secondary">
                    Sri Lanka &amp; Worldwide
                  </span>
                  <Button href="/contact" size="sm">
                    Get Started
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>

              {/* Floating Stat Chips */}
              <div className="absolute -right-4 -top-5 hidden animate-float items-center gap-2.5 rounded-2xl border border-card-border bg-card-bg pl-3.5 pr-4 py-2.5 shadow-xl dark:border-white/10 dark:shadow-black/60 md:flex z-20">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue/10 text-blue dark:bg-blue/20 dark:text-blue-light">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <p className="text-[0.78rem] font-extrabold leading-tight text-text-primary">150+ Projects</p>
                  <p className="text-[0.68rem] text-text-muted font-medium">Delivered</p>
                </div>
              </div>

              <div className="absolute -left-6 -bottom-6 z-20 hidden animate-float-delayed items-center gap-2.5 rounded-2xl border border-card-border bg-card-bg pl-3.5 pr-4 py-2.5 shadow-xl dark:border-white/10 dark:shadow-black/60 md:flex">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                  <Star size={16} className="fill-current" />
                </span>
                <div>
                  <p className="text-[0.78rem] font-extrabold leading-tight text-text-primary">5-Star Rated</p>
                  <p className="text-[0.68rem] text-text-muted font-medium">50+ clients</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
