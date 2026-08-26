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
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[28px]">
            {/* Layered gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-[#0a2580] to-blue-dark" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue/30 to-blue-light/20" />

            {/* Dot texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.055]"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

            {/* Spinning star — top right */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 animate-spin-slow opacity-[0.18]">
              <svg viewBox="0 0 200 200" fill="none">
                <path d="M100 0L110 90L200 100L110 110L100 200L90 110L0 100L90 90Z" fill="url(#cta-star)" />
                <defs>
                  <linearGradient id="cta-star" x1="0" y1="0" x2="200" y2="200">
                    <stop stopColor="rgba(255,255,255,0.9)" />
                    <stop offset="1" stopColor="rgba(255,255,255,0.2)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Dashed circle — bottom left */}
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 animate-spin-slow opacity-[0.12]"
              style={{ animationDirection: "reverse", animationDuration: "14s" }}>
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="1.5" strokeDasharray="8 5" />
              </svg>
            </div>

            {/* Small spinning diamond — center-right area */}
            <div className="pointer-events-none absolute right-1/3 top-4 h-8 w-8 animate-spin-slow opacity-[0.15]"
              style={{ animationDuration: "8s" }}>
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M16 0L19 13L32 16L19 19L16 32L13 19L0 16L13 13Z" fill="white" />
              </svg>
            </div>

            {/* Glow orbs */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-light/22 blur-[70px]" />
            <div className="absolute -bottom-16 left-1/3 h-52 w-52 rounded-full bg-white/6 blur-[60px]" />

            {/* Ring */}
            <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-10 p-10 md:flex-row md:items-center md:p-14">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-[0.75rem] font-semibold text-white/80">
                  <Sparkles size={11} />
                  Let's Work Together
                </div>
                <h2 className="mb-3 font-[family-name:var(--font-jakarta)] text-[1.875rem] font-extrabold leading-tight text-white md:text-4xl">
                  {title}
                </h2>
                <p className="max-w-lg text-[1rem] leading-relaxed text-white/65">{description}</p>
              </div>
              <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href={primaryHref} variant="white">{primaryLabel}</Button>
                {secondaryLabel && secondaryHref && (
                  <Button href={secondaryHref} variant="ghost">{secondaryLabel}</Button>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── PageHero — rich animated hero for inner pages ────────────────────────────
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

      {/* ── Animated background ─────────────────────────────── */}

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(1,48,162,0.055) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[560px] w-[560px] animate-glow-pulse rounded-full bg-blue/[0.07] blur-[110px] dark:bg-blue/[0.14]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[400px] rounded-full bg-blue-light/[0.05] blur-[80px] dark:bg-blue-light/[0.1]" />

      {/* Spinning star — top-right corner decoration */}
      <div className="pointer-events-none absolute right-10 top-28 hidden h-24 w-24 animate-spin-slow opacity-[0.06] dark:opacity-[0.1] lg:block">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 0L110 90L200 100L110 110L100 200L90 110L0 100L90 90Z" fill="currentColor" className="text-blue" />
        </svg>
      </div>

      {/* Dashed circle — left side */}
      <div className="pointer-events-none absolute left-8 top-36 hidden h-20 w-20 animate-spin-slow opacity-[0.07] dark:opacity-[0.12] lg:block"
        style={{ animationDirection: "reverse", animationDuration: "16s" }}>
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="currentColor" className="text-blue" strokeWidth="2" strokeDasharray="6 5" />
        </svg>
      </div>

      {/* Small diamond — floating */}
      <div className="pointer-events-none absolute right-1/4 top-24 hidden h-6 w-6 animate-float-slow opacity-[0.08] dark:opacity-[0.14] xl:block">
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M16 0L19 13L32 16L19 19L16 32L13 19L0 16L13 13Z" fill="currentColor" className="text-blue-light" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">

        <FadeIn>
          <nav className="mb-7 flex items-center gap-2 text-[0.8125rem] text-text-muted">
            <Link href="/" className="transition hover:text-blue dark:hover:text-blue-light">Home</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-text-muted/50">
              <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-text-secondary">{breadcrumb}</span>
          </nav>
        </FadeIn>

        {badge && (
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/6 px-4 py-2 text-[0.8125rem] font-semibold text-blue dark:border-blue-light/20 dark:bg-blue/8 dark:text-blue-light">
              <Sparkles size={13} />
              {badge}
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.06}>
          <h1 className="mb-5 max-w-3xl font-[family-name:var(--font-jakarta)] text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-text-primary md:text-[3.25rem]">
            {title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-text-secondary">{description}</p>
        </FadeIn>

        {stats && stats.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-8 sm:gap-10">
              {stats.map((s, i) => (
                <div key={s.label} className={i > 0 ? "border-l border-border pl-6 sm:pl-10" : ""}>
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-blue dark:text-blue-light">
                    {s.value}
                  </p>
                  <p className="text-[0.8rem] text-text-muted">{s.label}</p>
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
    <Link href={href} className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-blue transition-all duration-200 hover:gap-2.5 dark:text-blue-light">
      {children}
      <ArrowRight size={13} />
    </Link>
  );
}
