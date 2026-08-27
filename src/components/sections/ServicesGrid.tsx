import { Check } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardLink } from "@/components/sections/CTA";
import { DecoratorsB } from "@/components/ui/SectionDecorators";
import { services } from "@/lib/data";

const themes = [
  { stripe: "from-blue via-blue-light to-transparent", accent: "group-hover:border-blue/40 hover:shadow-[0_20px_48px_rgba(1,48,162,0.14)] dark:hover:shadow-[0_20px_48px_rgba(59,130,246,0.18)]", icon: "from-blue/15 to-blue-light/10 border-blue/20 text-blue dark:text-blue-light dark:border-blue-light/30", check: "text-blue dark:text-blue-light" },
  { stripe: "from-violet-500 via-purple-400 to-transparent", accent: "group-hover:border-violet-500/40 hover:shadow-[0_20px_48px_rgba(139,92,246,0.14)] dark:hover:shadow-[0_20px_48px_rgba(139,92,246,0.18)]", icon: "from-violet-500/15 to-purple-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400 dark:border-violet-400/30", check: "text-violet-500 dark:text-violet-400" },
  { stripe: "from-emerald-500 via-teal-400 to-transparent", accent: "group-hover:border-emerald-500/40 hover:shadow-[0_20px_48px_rgba(16,185,129,0.14)] dark:hover:shadow-[0_20px_48px_rgba(16,185,129,0.18)]", icon: "from-emerald-500/15 to-teal-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400/30", check: "text-emerald-500 dark:text-emerald-400" },
  { stripe: "from-amber-500 via-orange-400 to-transparent", accent: "group-hover:border-amber-500/40 hover:shadow-[0_20px_48px_rgba(245,158,11,0.14)] dark:hover:shadow-[0_20px_48px_rgba(245,158,11,0.18)]", icon: "from-amber-500/15 to-orange-400/10 border-amber-500/20 text-amber-600 dark:text-amber-400 dark:border-amber-400/30", check: "text-amber-500 dark:text-amber-400" },
  { stripe: "from-rose-500 via-pink-400 to-transparent", accent: "group-hover:border-rose-500/40 hover:shadow-[0_20px_48px_rgba(244,63,94,0.14)] dark:hover:shadow-[0_20px_48px_rgba(244,63,94,0.18)]", icon: "from-rose-500/15 to-pink-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400 dark:border-rose-400/30", check: "text-rose-500 dark:text-rose-400" },
  { stripe: "from-cyan-500 via-sky-400 to-transparent", accent: "group-hover:border-cyan-500/40 hover:shadow-[0_20px_48px_rgba(6,182,212,0.14)] dark:hover:shadow-[0_20px_48px_rgba(6,182,212,0.18)]", icon: "from-cyan-500/15 to-sky-400/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400 dark:border-cyan-400/30", check: "text-cyan-500 dark:text-cyan-400" },
];

export function ServicesGrid({ limit, showHeader = true }: { limit?: number; showHeader?: boolean }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative overflow-hidden py-24 bg-bg">
      <DecoratorsB />
      <div className="mx-auto max-w-6xl px-5 lg:px-8 relative z-10">
        {showHeader && (
          <SectionHeader
            centered
            label="Our Services"
            title={<>Everything You Need to <span className="text-gradient">Succeed Online</span></>}
            description="A comprehensive suite of digital services tailored to transform your business and accelerate growth."
          />
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => {
            const theme = themes[index % themes.length];
            return (
              <FadeIn key={service.id} delay={index * 0.07}>
                <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg p-7 transition-all duration-300 hover:-translate-y-2 dark:border-white/10 ${theme.accent}`}>
                  {/* Glowing Top Stripe on Hover */}
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.stripe} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                  {/* Watermark Step Number */}
                  <span className="absolute right-5 top-5 font-[family-name:var(--font-jakarta)] text-3xl font-black leading-none text-blue/20 dark:text-blue-light/25 select-none transition-transform group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon Container */}
                  <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl border bg-gradient-to-br transition-all duration-300 group-hover:scale-105 ${theme.icon}`}>
                    <DynamicIcon name={service.icon} size={24} />
                  </div>

                  <h3 className="mb-2.5 font-[family-name:var(--font-jakarta)] text-lg font-extrabold text-text-primary group-hover:text-blue dark:group-hover:text-blue-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-[0.9rem] leading-relaxed text-text-secondary">{service.description}</p>
                  
                  <ul className="mb-4 flex-1 space-y-2 border-t border-border/60 pt-4 dark:border-white/5">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-[0.83rem] font-medium text-text-secondary">
                        <Check size={14} className={`shrink-0 ${theme.check}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <CardLink href={service.id === "saas" ? "/products" : "/services"}>
                    {service.id === "saas" ? "View products" : "Learn more"}
                  </CardLink>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
