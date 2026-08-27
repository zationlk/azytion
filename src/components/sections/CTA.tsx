import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

type CTABannerProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTABanner({
  title,
  description,
  primaryLabel = "Get Free Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[32px] border border-blue/30 shadow-[0_24px_64px_rgba(1,48,162,0.25)] dark:border-white/15 dark:shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
            {/* Deep Space Layered Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-[#081a54] to-[#030919]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue/30 via-transparent to-blue-light/25 animate-gradient-x" />

            {/* Mesh Texture Overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.075]"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

            {/* Decorative Central Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-light/25 blur-[90px] pointer-events-none" />

            {/* Spinning Star Accent */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 animate-spin-slow opacity-20">
              <svg viewBox="0 0 200 200" fill="none">
                <path d="M100 0L110 90L200 100L110 110L100 200L90 110L0 100L90 90Z" fill="url(#cta-star)" />
                <defs>
                  <linearGradient id="cta-star" x1="0" y1="0" x2="200" y2="200">
                    <stop stopColor="rgba(255,255,255,1)" />
                    <stop offset="1" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-start justify-between gap-10 p-10 md:flex-row md:items-center md:p-14">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.75rem] font-bold text-white shadow-sm backdrop-blur-md">
                  <Sparkles size={13} className="text-blue-light" />
                  Let's Work Together
                </div>
                <h2 className="mb-4 font-[family-name:var(--font-jakarta)] text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                  {title}
                </h2>
                <p className="max-w-lg text-[1.0625rem] leading-relaxed text-white/80">{description}</p>
              </div>
              <div className="flex w-full shrink-0 flex-col gap-3.5 sm:w-auto sm:flex-row">
                <Button href={primaryHref} variant="white" size="default">{primaryLabel}</Button>
                {secondaryLabel && secondaryHref && (
                  <Button href={secondaryHref} variant="ghost" size="default">{secondaryLabel}</Button>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── PageHero - rich animated hero for inner pages ────────────────────────────
export function PageHero({
  title,
  description,
  breadcrumb,
  badge,
  stats,
}: {
  title: React.ReactNode;
  description: string;
  breadcrumb: string;
  badge?: string;
  stats?: Array<{ value: string; label: string }>;
}) {
  return (
    <section className="relative overflow-hidden bg-bg pb-24 pt-36">

      {/* Mesh Background */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(1,48,162,0.065) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      {/* Layered Ambient Orbs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] animate-glow-pulse rounded-full bg-blue/[0.1] blur-[120px] dark:bg-blue/[0.18]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[460px] rounded-full bg-blue-light/[0.08] blur-[90px] dark:bg-blue-light/[0.12]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">

        <FadeIn>
          <nav className="mb-7 flex items-center gap-2 text-[0.8125rem] font-bold text-text-muted">
            <Link href="/" className="transition hover:text-blue dark:hover:text-blue-light">Home</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-blue">
              <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-text-primary">{breadcrumb}</span>
          </nav>
        </FadeIn>

        {badge && (
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/8 px-4 py-2 text-[0.8125rem] font-extrabold text-blue shadow-sm dark:border-blue-light/25 dark:bg-blue/12 dark:text-blue-light">
              <Sparkles size={13} />
              {badge}
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.06}>
          <h1 className="mb-5 max-w-3xl font-[family-name:var(--font-jakarta)] text-[2.75rem] font-black leading-[1.08] tracking-tight text-text-primary md:text-[3.5rem]">
            {title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-text-secondary">{description}</p>
        </FadeIn>

        {stats && stats.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border/80 pt-8 sm:gap-10 dark:border-white/10">
              {stats.map((s, i) => (
                <div key={s.label} className={i > 0 ? "border-l border-border/80 pl-6 sm:pl-10 dark:border-white/10" : ""}>
                  <p className="font-[family-name:var(--font-jakarta)] text-3xl font-black text-blue dark:text-blue-light">
                    {s.value}
                  </p>
                  <p className="text-[0.8rem] font-medium text-text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export function CardLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-bold text-blue transition-all duration-200 hover:gap-2.5 dark:text-blue-light">
      {children}
      <ArrowRight size={14} />
    </Link>
  );
}
