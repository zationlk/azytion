import type { Metadata } from "next";
import { Check, Clock, DollarSign, Headphones, X, Zap } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner, PageHero, CardLink } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecoratorsC, DecoratorsE } from "@/components/ui/SectionDecorators";
import { processSteps, services, technologies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Azytion services — software development, website design, graphic design, video editing, and digital marketing.",
};

const comparisonRows = [
  { feature: "Custom-built solutions",                      azytion: true,  agency: true,  freelancer: false },
  { feature: "Fixed pricing & transparent quotes",          azytion: true,  agency: false, freelancer: true  },
  { feature: "Full-service (design + dev + marketing)",     azytion: true,  agency: true,  freelancer: false },
  { feature: "24/7 dedicated support",                      azytion: true,  agency: false, freelancer: false },
  { feature: "SaaS products ready to deploy",               azytion: true,  agency: false, freelancer: false },
  { feature: "Proven track record (150+ projects)",         azytion: true,  agency: true,  freelancer: false },
  { feature: "Fast turnaround (avg. 2–4 weeks)",            azytion: true,  agency: false, freelancer: true  },
  { feature: "Scalable enterprise solutions",               azytion: true,  agency: true,  freelancer: false },
  { feature: "Budget-friendly starter packages",            azytion: true,  agency: false, freelancer: true  },
];

const iconGradients = [
  "from-blue/15 to-blue-light/8 border-blue/15 text-blue dark:text-blue-light dark:border-blue-light/20",
  "from-violet-500/15 to-purple-500/8 border-violet-500/15 text-violet-600 dark:text-violet-400 dark:border-violet-400/20",
  "from-emerald-500/15 to-teal-500/8 border-emerald-500/15 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400/20",
  "from-amber-500/15 to-orange-400/8 border-amber-500/15 text-amber-600 dark:text-amber-400 dark:border-amber-400/20",
  "from-rose-500/15 to-pink-500/8 border-rose-500/15 text-rose-600 dark:text-rose-400 dark:border-rose-400/20",
];

export default function ServicesPage() {
  const coreServices = services.filter((s) => s.id !== "saas");
  const marketing = services.find((s) => s.id === "marketing")!;

  return (
    <>
      <PageHero
        breadcrumb="Services"
        badge="End-to-End Digital Solutions"
        title={<>Our <span className="text-gradient">Services</span></>}
        description="Comprehensive digital solutions designed to elevate your brand, streamline operations, and accelerate growth."
        stats={[
          { value: "6", label: "Core Services" },
          { value: "2–4wk", label: "Avg. Delivery" },
          { value: "150+", label: "Projects Done" },
        ]}
      />

      {/* ── Core services ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="What We Do"
            title={<>End-to-End <span className="text-gradient">Digital Services</span></>}
            description="From concept to launch, we handle every aspect of your digital transformation."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {coreServices.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.07}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_16px_48px_rgba(1,48,162,0.1)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl border bg-gradient-to-br transition-all duration-300 ${iconGradients[index % iconGradients.length]}`}>
                    <DynamicIcon name={service.icon} size={24} />
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-jakarta)] text-2xl font-bold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-text-secondary">{service.description}</p>
                  <ul className="mb-2 flex-1 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-text-secondary">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue dark:bg-blue-light" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <CardLink href="/contact">Request a quote</CardLink>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us quick-facts ─────────────────────────── */}
      <section className="bg-bg-subtle py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "2–12 week timelines depending on scope", color: "text-blue dark:text-blue-light", bg: "bg-blue/8 dark:bg-blue/12" },
              { icon: DollarSign, title: "Fixed Pricing", desc: "Transparent quotes — no surprises", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/8" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated post-launch support included", color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-500/8" },
              { icon: Clock, title: "On-Time Always", desc: "99% of projects delivered on schedule", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/8" },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-card-border bg-card-bg p-5">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <p className="mb-0.5 font-semibold text-text-primary">{title}</p>
                  <p className="text-[0.8125rem] text-text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured: Digital Marketing ───────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[24px] border border-card-border bg-card-bg">
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div className="border-b border-border p-10 lg:border-b-0 lg:border-r">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/6 px-3.5 py-1.5 text-[0.75rem] font-bold uppercase tracking-wider text-blue dark:text-blue-light">
                  Featured Service
                </div>
                <SectionHeader
                  label="Digital Marketing"
                  title={<>Data-Driven <span className="text-gradient">Marketing</span></>}
                  className="mb-8"
                />
                <p className="mb-6 text-[1.0625rem] leading-relaxed text-text-secondary">
                  {marketing.description}
                </p>
                <ul className="mb-8 space-y-2.5">
                  {marketing.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue dark:bg-blue-light" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <CardLink href="/contact">Start Marketing Campaign</CardLink>
              </div>

              {/* Right: stats */}
              <div className="bg-bg-subtle p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-blue/15 bg-gradient-to-br from-blue/12 to-blue-light/6 text-blue dark:border-blue-light/15 dark:text-blue-light">
                  <DynamicIcon name="TrendingUp" size={24} />
                </div>
                <h3 className="mb-6 font-[family-name:var(--font-jakarta)] text-2xl font-bold text-text-primary">
                  Why Choose Our Marketing?
                </h3>
                <div className="space-y-5">
                  {[
                    { value: "3x", label: "Average ROI increase for clients", color: "text-blue dark:text-blue-light" },
                    { value: "200%", label: "Average traffic growth in 6 months", color: "text-emerald-500" },
                    { value: "50+", label: "Successful campaigns launched", color: "text-violet-500 dark:text-violet-400" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-5 rounded-xl border border-border bg-card-bg p-4">
                      <strong className={`font-[family-name:var(--font-jakarta)] text-3xl font-extrabold ${item.color}`}>
                        {item.value}
                      </strong>
                      <p className="text-[0.9375rem] text-text-secondary">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-subtle py-24">
        {/* Variant C: triangle + hexagon */}
        <DecoratorsC />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="Why Azytion"
            title={<>Azytion vs. The <span className="text-gradient">Alternatives</span></>}
            description="See how we stack up against traditional agencies and freelancers."
          />
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-card-border bg-card-bg">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-border">
                <div className="px-6 py-5">
                  <span className="text-[0.78rem] font-bold uppercase tracking-wider text-text-muted">Feature</span>
                </div>
                <div className="relative bg-blue/6 px-4 py-5 text-center dark:bg-blue/8">
                  <div className="absolute inset-x-0 top-0 h-1 rounded-tl-none bg-gradient-to-r from-blue to-blue-light" />
                  <span className="block font-[family-name:var(--font-jakarta)] text-[0.9375rem] font-extrabold text-blue dark:text-blue-light">Azytion</span>
                  <span className="text-[0.7rem] text-text-muted">The Best Option</span>
                </div>
                <div className="px-4 py-5 text-center">
                  <span className="block font-semibold text-text-primary">Agency</span>
                  <span className="text-[0.7rem] text-text-muted">Traditional</span>
                </div>
                <div className="px-4 py-5 text-center">
                  <span className="block font-semibold text-text-primary">Freelancer</span>
                  <span className="text-[0.7rem] text-text-muted">Independent</span>
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-4 border-b border-border last:border-0 transition-colors hover:bg-bg-subtle/50 ${i % 2 !== 0 ? "bg-bg-subtle/30" : ""}`}>
                  <div className="flex items-center px-6 py-4">
                    <span className="text-[0.875rem] text-text-secondary">{row.feature}</span>
                  </div>
                  <div className="flex items-center justify-center bg-blue/[0.03] px-4 py-4 dark:bg-blue/[0.05]">
                    {row.azytion
                      ? <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue/10 dark:bg-blue/15"><Check size={14} className="text-blue dark:text-blue-light" strokeWidth={2.5} /></div>
                      : <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/8"><X size={14} className="text-red-500/60" strokeWidth={2.5} /></div>
                    }
                  </div>
                  <div className="flex items-center justify-center px-4 py-4">
                    {row.agency
                      ? <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/8"><Check size={14} className="text-emerald-500" strokeWidth={2.5} /></div>
                      : <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/8"><X size={14} className="text-red-500/60" strokeWidth={2.5} /></div>
                    }
                  </div>
                  <div className="flex items-center justify-center px-4 py-4">
                    {row.freelancer
                      ? <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/8"><Check size={14} className="text-emerald-500" strokeWidth={2.5} /></div>
                      : <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/8"><X size={14} className="text-red-500/60" strokeWidth={2.5} /></div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Technologies ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="Technologies"
            title={<>Tools & <span className="text-gradient">Technologies</span> We Use</>}
            description="We leverage industry-leading tools and frameworks to deliver best-in-class solutions."
          />
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-card-border bg-card-bg px-5 py-2.5 text-sm font-semibold text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/30 hover:text-blue hover:shadow-md dark:hover:border-blue-light/30 dark:hover:text-blue-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-subtle py-24">
        {/* Variant E: wave + dots */}
        <DecoratorsE />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="Process"
            title={<>How We <span className="text-gradient">Deliver</span></>}
            description="Our four-step process ensures every project is delivered on time, on budget, and beyond expectations."
          />
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden h-px lg:block"
              style={{ background: "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)" }}
            />
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="group flex flex-col items-center rounded-2xl border border-card-border bg-card-bg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue/20 hover:shadow-md">
                  <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-blue-light font-[family-name:var(--font-jakarta)] text-[0.9375rem] font-extrabold text-white shadow-[0_6px_20px_rgba(1,48,162,0.35)]">
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

      <CTABanner
        title="Need a Custom Solution?"
        description="Tell us about your project and we'll craft the perfect service package for your business."
        primaryLabel="Get Free Quote"
      />
    </>
  );
}
