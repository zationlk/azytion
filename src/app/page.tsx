import {
  ArrowRight,
  Award,
  BarChart3,
  Globe2,
  MessageSquareQuote,
  Rocket,
  TrendingUp,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  DecoratorsA,
  DecoratorsD,
  DecoratorsE,
  DecoratorsF,
} from "@/components/ui/SectionDecorators";
import { clients, processSteps } from "@/lib/data";

const whyUs = [
  { icon: Rocket,    title: "Fast Delivery",  desc: "30% faster than industry average on every project."    },
  { icon: Award,     title: "Proven Quality", desc: "99% client retention across 150+ delivered projects."  },
  { icon: Globe2,    title: "Global Reach",   desc: "Clients across 20+ countries and time zones."          },
  { icon: BarChart3, title: "Data-Driven",    desc: "Every decision backed by analytics & measurable results." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Trusted by ─────────────────────────────────────────── */}
      <section className="border-y border-border bg-bg-subtle py-10">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <p className="mb-7 text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-text-muted">
              Trusted by leading companies worldwide
            </p>
          </FadeIn>
          {/* Mobile marquee */}
          <div className="relative overflow-hidden md:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-bg-subtle to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-bg-subtle to-transparent" />
            <div className="flex animate-marquee gap-12 whitespace-nowrap">
              {[...clients, ...clients].map((client, i) => (
                <span key={`${client}-${i}`} className="font-[family-name:var(--font-jakarta)] text-[1.0625rem] font-bold text-text-muted/40">
                  {client}
                </span>
              ))}
            </div>
          </div>
          {/* Desktop */}
          <FadeIn>
            <div className="hidden flex-wrap items-center justify-center gap-x-12 gap-y-3 md:flex">
              {clients.map((client) => (
                <span key={client} className="font-[family-name:var(--font-jakarta)] text-[1.0625rem] font-bold text-text-muted/40 transition-all duration-200 hover:text-text-muted">
                  {client}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services — uses DecoratorsB (diamonds + cross) ──────── */}
      <ServicesGrid />

      {/* ── About — uses DecoratorsA (star + dashed circle) ─────── */}
      <section className="relative overflow-hidden bg-bg-subtle py-28">
        <DecoratorsA />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Visual */}
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue/10 via-transparent to-blue-light/8 blur-2xl" />
                <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-dark via-[#0a2580] to-blue p-px shadow-[0_24px_64px_rgba(1,48,162,0.22)]">
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[23px] bg-gradient-to-br from-blue-dark to-blue">
                    <div className="pointer-events-none absolute inset-0 opacity-[0.09]"
                      style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                    <div className="absolute h-56 w-56 rounded-full bg-white/8 blur-3xl" />
                    <span className="relative font-[family-name:var(--font-jakarta)] text-7xl font-black tracking-tight text-white/8 select-none md:text-8xl">AZYTION</span>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-3 rounded-2xl border border-card-border bg-card-bg px-6 py-4 text-center shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                  <strong className="block font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-blue dark:text-blue-light">5+</strong>
                  <span className="text-[0.78rem] text-text-muted">Years of Excellence</span>
                </div>
                <div className="absolute -left-4 top-8 rounded-2xl border border-card-border bg-card-bg px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/8 dark:bg-blue/12">
                      <Users2 size={17} className="text-blue dark:text-blue-light" />
                    </div>
                    <div>
                      <strong className="block font-[family-name:var(--font-jakarta)] text-xl font-extrabold text-text-primary">50+</strong>
                      <span className="text-[0.72rem] text-text-muted">Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 bottom-16 hidden animate-float-slow items-center gap-2.5 rounded-2xl border border-card-border bg-card-bg px-4 py-3 shadow-lg dark:shadow-black/50 lg:flex">
                  <MessageSquareQuote size={15} className="text-blue dark:text-blue-light" />
                  <span className="text-[0.78rem] font-semibold text-text-primary">5-star rated</span>
                </div>
              </div>
            </FadeIn>

            {/* Copy */}
            <FadeIn delay={0.14}>
              <SectionHeader
                label="About Azytion"
                title={<>Your Trusted Partner in <span className="text-gradient">Digital Innovation</span></>}
              />
              <p className="mb-4 text-[1rem] leading-relaxed text-text-secondary">
                At Azytion, we believe every business deserves the best digital tools to thrive. Our team combines creativity with technical excellence to deliver solutions that exceed expectations.
              </p>
              <p className="mb-8 text-[0.9375rem] leading-relaxed text-text-secondary">
                Whether you need a custom application, a stunning website, or a ready-to-use SaaS platform — we are <strong className="font-semibold text-text-primary">The Best Option</strong> for turning your vision into reality.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-3">
                {whyUs.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="group rounded-xl border border-card-border bg-card-bg p-4 transition-all duration-200 hover:border-blue/20 hover:shadow-sm">
                    <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-blue/8 dark:bg-blue/12">
                      <Icon size={15} className="text-blue dark:text-blue-light" />
                    </div>
                    <p className="mb-0.5 text-[0.875rem] font-semibold text-text-primary">{title}</p>
                    <p className="text-[0.8rem] leading-relaxed text-text-muted">{desc}</p>
                  </div>
                ))}
              </div>
              <Button href="/about">
                Learn About Us <ArrowRight size={15} />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Products ───────────────────────────────────────────── */}
      <ProductsGrid limit={3} showViewAll />

      {/* ── Featured Case Study — uses DecoratorsF (plus signs) ─── */}
      <section className="relative overflow-hidden py-20">
        <DecoratorsF />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[24px] border border-card-border bg-card-bg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue/[0.04] to-transparent" />
              <div className="pointer-events-none absolute inset-0 opacity-25"
                style={{ backgroundImage: "radial-gradient(circle, rgba(1,48,162,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue via-blue-light to-transparent" />

              <div className="flex flex-wrap items-center gap-3 border-b border-border/60 px-8 py-4 md:px-12">
                <span className="rounded-full border border-blue/20 bg-blue/8 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wider text-blue dark:text-blue-light">
                  Featured Case Study
                </span>
                <span className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-[0.72rem] font-medium text-text-muted">
                  E-Commerce · Web Design
                </span>
                <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[0.72rem] font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Verified Result
                </span>
              </div>

              <div className="relative grid items-center gap-10 p-8 md:p-12 lg:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="mb-3 font-[family-name:var(--font-jakarta)] text-[1.625rem] font-extrabold leading-tight text-text-primary md:text-3xl">
                    How Azytion Helped GlobalRetail Achieve{" "}
                    <span className="text-gradient">340% Revenue Growth</span>
                  </h2>
                  <p className="mb-8 max-w-xl text-[1rem] leading-relaxed text-text-secondary">
                    We rebuilt their platform from the ground up — a custom Next.js storefront, integrated ERP, and data-driven UX — all within 8 weeks.
                  </p>
                  <div className="mb-8 grid max-w-md grid-cols-3 gap-4">
                    {[{ value: "340%", label: "Revenue Q1" }, { value: "8 wks", label: "Delivery" }, { value: "2.1s", label: "Load time" }].map((item) => (
                      <div key={item.label} className="rounded-xl border border-card-border bg-bg-subtle p-4 text-center">
                        <strong className="block font-[family-name:var(--font-jakarta)] text-[1.75rem] font-extrabold leading-none text-blue dark:text-blue-light">{item.value}</strong>
                        <span className="text-[0.75rem] text-text-muted">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="/portfolio" variant="outline" size="sm">
                    View Full Case Study <ArrowRight size={14} />
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-blue/15 bg-gradient-to-br from-blue/8 to-blue-light/4 px-10 py-8 text-center dark:from-blue/[0.12] dark:to-blue-light/[0.06]">
                  <TrendingUp size={26} className="mb-3 text-blue dark:text-blue-light" />
                  <div className="font-[family-name:var(--font-jakarta)] text-7xl font-black leading-none text-blue dark:text-blue-light md:text-8xl">
                    340<span className="text-4xl">%</span>
                  </div>
                  <p className="mt-2.5 max-w-[130px] text-[0.8rem] font-medium leading-tight text-text-muted">Revenue increase in first quarter</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Process — uses DecoratorsE (wave + dots) ─────────────── */}
      <section className="relative overflow-hidden bg-bg-subtle py-24">
        <DecoratorsE />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="How We Work"
            title={<>Our Proven <span className="text-gradient">Process</span></>}
            description="A streamlined four-step approach that ensures quality delivery, every time."
          />
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden h-px lg:block"
              style={{ background: "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)" }} />
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="group flex flex-col items-center rounded-2xl border border-card-border bg-card-bg p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/20 hover:shadow-[0_12px_40px_rgba(1,48,162,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-blue-light font-[family-name:var(--font-jakarta)] text-[0.9375rem] font-extrabold text-white shadow-[0_6px_20px_rgba(1,48,162,0.4)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-[1rem] font-bold text-text-primary">{step.title}</h3>
                  <p className="text-[0.875rem] leading-relaxed text-text-secondary">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* StatsBar uses its own decorators (concentric rings + cross + diamond) */}
      <StatsBar />

      {/* Testimonials uses DecoratorsC (triangle + hexagon) */}
      <Testimonials />

      <CTABanner
        title="Ready to Transform Your Business?"
        description="Let's discuss your project and find the perfect digital solution. Get a free consultation today."
        secondaryLabel="View Our Work"
        secondaryHref="/portfolio"
      />

      {/* ── ProductsGrid section uses DecoratorsD (concentric + square) */}
    </>
  );
}
