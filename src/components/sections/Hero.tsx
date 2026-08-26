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

const techPills = [
  { label: "React",      color: "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 bg-cyan-500/6"                       },
  { label: "Next.js",    color: "text-text-primary border-border bg-card-bg"                                              },
  { label: "Node.js",    color: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/6"           },
  { label: "TypeScript", color: "text-blue border-blue/20 bg-blue/6 dark:text-blue-light dark:border-blue-light/20"       },
  { label: "AWS",        color: "text-amber-600 dark:text-amber-400 border-amber-500/20 bg-amber-500/6"                  },
  { label: "Flutter",    color: "text-sky-600 dark:text-sky-400 border-sky-500/20 bg-sky-500/6"                           },
];

const offerings = [
  { icon: Code2,    label: "Software Development", desc: "Web, mobile & cloud apps",      color: "text-blue dark:text-blue-light",         bg: "bg-blue/8 dark:bg-blue/12"           },
  { icon: Monitor,  label: "Website Design",        desc: "Beautiful, high-converting",    color: "text-violet-600 dark:text-violet-400",   bg: "bg-violet-500/8"                     },
  { icon: Layers,   label: "SaaS Products",         desc: "Deploy in 24 hours",            color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/8"                    },
  { icon: BarChart3, label: "Digital Marketing",    desc: "SEO, PPC & social media",       color: "text-amber-600 dark:text-amber-400",     bg: "bg-amber-500/8"                      },
  { icon: Globe2,   label: "Graphic Design",        desc: "Brand identity & collateral",   color: "text-rose-600 dark:text-rose-400",       bg: "bg-rose-500/8"                       },
  { icon: Users,    label: "Dedicated Support",     desc: "24/7 expert assistance",        color: "text-cyan-600 dark:text-cyan-400",       bg: "bg-cyan-500/8"                       },
];

const highlights = [
  { icon: CheckCircle2, text: "Free consultation",    color: "text-emerald-500" },
  { icon: TrendingUp,   text: "99% client retention", color: "text-blue dark:text-blue-light" },
  { icon: Star,         text: "5-star rated service", color: "text-amber-500"   },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">

      {/* ── Background ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 select-none">
        {/* Ambient orbs */}
        <div className="absolute -right-40 -top-40 h-[700px] w-[700px] animate-glow-pulse rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(1,48,162,0.12) 0%, rgba(26,79,212,0.06) 40%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -left-40 h-[580px] w-[580px] animate-glow-pulse rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(26,79,212,0.1) 0%, rgba(1,48,162,0.04) 40%, transparent 70%)", animationDelay: "2s" }} />
        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(1,48,162,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 10%, transparent 80%)",
        }} />
        {/* Dark mode boosts */}
        <div className="absolute -right-32 -top-32 hidden h-[640px] w-[640px] rounded-full bg-blue/[0.14] blur-[130px] dark:block" />
        <div className="absolute -bottom-24 -left-32 hidden h-[520px] w-[520px] rounded-full bg-blue-light/[0.12] blur-[110px] dark:block" />
      </div>

      {/* ── Floating tech pills ─────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        {[
          { pill: techPills[0], pos: "left-[4%] top-[20%]",  delay: "0s",   anim: "animate-float"     },
          { pill: techPills[2], pos: "left-[2%] top-[42%]",  delay: "1.2s", anim: "animate-float-slow" },
          { pill: techPills[4], pos: "left-[5%] top-[64%]",  delay: "2.4s", anim: "animate-diagonal"  },
          { pill: techPills[3], pos: "right-[4%] top-[26%]", delay: "0.8s", anim: "animate-float-delayed" },
          { pill: techPills[5], pos: "right-[5%] top-[52%]", delay: "1.8s", anim: "animate-bob"        },
          { pill: techPills[1], pos: "right-[3%] top-[70%]", delay: "3s",   anim: "animate-float"     },
        ].map(({ pill, pos, delay, anim }) => (
          <div key={pill.label} className={`absolute ${pos} ${anim} hidden xl:block`} style={{ animationDelay: delay }}>
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.72rem] font-semibold opacity-50 backdrop-blur-sm ${pill.color}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {pill.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">

          {/* ── Left: copy ──────────────────────────────────────── */}
          <div>
            <FadeIn>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue/20 bg-blue/6 px-4 py-2 text-[0.8125rem] font-semibold text-blue dark:border-blue-light/20 dark:bg-blue/8 dark:text-blue-light">
                <Sparkles size={13} className="animate-pulse-dot" />
                Digital Solutions Company
                <span className="h-3.5 w-px bg-blue/20 dark:bg-blue-light/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Available now</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mb-6 font-[family-name:var(--font-jakarta)] text-5xl font-extrabold leading-[1.07] tracking-tight sm:text-[3.25rem] lg:text-[3.5rem]">
                The Best Option{" "}
                <span className="text-gradient">for Your Digital</span>{" "}
                Future
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mb-8 max-w-lg text-[1.0625rem] leading-relaxed text-text-secondary">
                From custom software and stunning websites to ready-to-deploy SaaS platforms — Azytion delivers end-to-end digital solutions that drive real growth.
              </p>
            </FadeIn>

            {/* Highlights */}
            <FadeIn delay={0.2}>
              <div className="mb-9 flex flex-wrap gap-4">
                {highlights.map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-2 text-[0.875rem] font-medium text-text-secondary">
                    <Icon size={15} className={color} />
                    {text}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Start Your Project
                  <ArrowRight size={16} />
                </Button>
                <Button href="/products" variant="outline">
                  Explore Products
                </Button>
              </div>
            </FadeIn>

            {/* Social proof */}
            <FadeIn delay={0.32}>
              <div className="mt-9 flex items-center gap-5">
                <div className="flex -space-x-2">
                  {["SR", "MK", "AP", "DM", "EP"].map((initials, i) => (
                    <div key={initials}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg bg-gradient-to-br from-blue to-blue-light text-[0.6rem] font-extrabold text-white"
                      style={{ zIndex: 5 - i }}>
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-[0.8rem] font-bold text-text-primary">5.0</span>
                  </div>
                  <span className="text-[0.78rem] text-text-muted">
                    Trusted by <strong className="font-semibold text-text-secondary">50+ businesses</strong>
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-border pt-8">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <strong className="block font-[family-name:var(--font-jakarta)] text-[1.75rem] font-extrabold leading-none text-text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </strong>
                    <span className="mt-1 block text-sm text-text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right: services showcase ──────────────────────── */}
          <FadeIn delay={0.18} className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-br from-blue/15 via-transparent to-blue-light/10 blur-2xl dark:from-blue/25 dark:to-blue-light/15" />

              <div className="relative overflow-hidden rounded-[28px] border border-card-border bg-card-bg shadow-[0_24px_64px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/60 to-transparent" />

                {/* Header band */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-dark via-blue to-blue-light px-7 py-6">
                  {/* Decorative elements inside header */}
                  <div className="pointer-events-none absolute right-4 top-3 h-16 w-16 animate-spin-slow opacity-[0.18]">
                    <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                      <path d="M32 0L34.9 29.1L64 32L34.9 34.9L32 64L29.1 34.9L0 32L29.1 29.1Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute bottom-2 left-4 h-12 w-12 animate-spin-slow opacity-[0.15]"
                    style={{ animationDirection: "reverse", animationDuration: "12s" }}>
                    <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                      <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="1.5" strokeDasharray="5 4"/>
                    </svg>
                  </div>
                  {/* Morphing blob */}
                  <div className="pointer-events-none absolute right-16 bottom-1 h-10 w-10 animate-morph bg-white/8 opacity-50" />

                  <div className="relative">
                    <p className="mb-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/60">
                      What We Deliver
                    </p>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-white">
                      Full-Stack Digital Solutions
                    </h2>
                  </div>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-2 gap-px bg-border">
                  {offerings.map(({ icon: Icon, label, desc, color, bg }, i) => (
                    <div
                      key={label}
                      className={`group flex flex-col gap-2 bg-card-bg p-5 transition-colors hover:bg-bg-subtle ${i === offerings.length - 1 && offerings.length % 2 !== 0 ? "col-span-2" : ""}`}
                    >
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg}`}>
                        <Icon size={17} className={color} />
                      </div>
                      <div>
                        <p className="text-[0.875rem] font-semibold text-text-primary">{label}</p>
                        <p className="text-[0.78rem] text-text-muted">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="flex items-center justify-between border-t border-border bg-bg-subtle px-6 py-4">
                  <span className="text-[0.8rem] font-semibold text-text-secondary">
                    Sri Lanka &amp; Worldwide
                  </span>
                  <Button href="/contact" size="sm">
                    Get Started
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>

              {/* Floating stat chips */}
              <div className="absolute -right-4 -top-5 hidden animate-float items-center gap-2 rounded-2xl border border-card-border bg-card-bg pl-3 pr-4 py-2.5 shadow-xl dark:shadow-black/50 md:flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue/10 text-blue dark:text-blue-light">
                  <CheckCircle2 size={14} />
                </span>
                <div>
                  <p className="text-[0.75rem] font-bold leading-tight text-text-primary">150+ Projects</p>
                  <p className="text-[0.68rem] text-text-muted">Delivered</p>
                </div>
              </div>

              <div className="absolute -left-5 bottom-16 hidden animate-float-delayed items-center gap-2 rounded-2xl border border-card-border bg-card-bg pl-3 pr-4 py-2.5 shadow-xl dark:shadow-black/50 md:flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <Star size={14} className="fill-current" />
                </span>
                <div>
                  <p className="text-[0.75rem] font-bold leading-tight text-text-primary">5-Star Rated</p>
                  <p className="text-[0.68rem] text-text-muted">50+ clients</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
