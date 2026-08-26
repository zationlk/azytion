import { Check } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardLink } from "@/components/sections/CTA";
import { DecoratorsB } from "@/components/ui/SectionDecorators";
import { services } from "@/lib/data";

const themes = [
  { accent: "group-hover:bg-blue/5 group-hover:border-blue/22",               icon: "from-blue/14 to-blue-light/8 border-blue/15 text-blue dark:text-blue-light dark:border-blue-light/20",                    check: "text-blue dark:text-blue-light"       },
  { accent: "group-hover:bg-violet-500/5 group-hover:border-violet-500/22",   icon: "from-violet-500/14 to-purple-500/8 border-violet-500/15 text-violet-600 dark:text-violet-400 dark:border-violet-400/20",    check: "text-violet-500 dark:text-violet-400" },
  { accent: "group-hover:bg-emerald-500/5 group-hover:border-emerald-500/22", icon: "from-emerald-500/14 to-teal-500/8 border-emerald-500/15 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400/20",  check: "text-emerald-500 dark:text-emerald-400" },
  { accent: "group-hover:bg-amber-500/5 group-hover:border-amber-500/22",     icon: "from-amber-500/14 to-orange-400/8 border-amber-500/15 text-amber-600 dark:text-amber-400 dark:border-amber-400/20",          check: "text-amber-500 dark:text-amber-400"   },
  { accent: "group-hover:bg-rose-500/5 group-hover:border-rose-500/22",       icon: "from-rose-500/14 to-pink-500/8 border-rose-500/15 text-rose-600 dark:text-rose-400 dark:border-rose-400/20",                  check: "text-rose-500 dark:text-rose-400"     },
  { accent: "group-hover:bg-cyan-500/5 group-hover:border-cyan-500/22",       icon: "from-cyan-500/14 to-sky-400/8 border-cyan-500/15 text-cyan-600 dark:text-cyan-400 dark:border-cyan-400/20",                    check: "text-cyan-500 dark:text-cyan-400"     },
];

export function ServicesGrid({ limit, showHeader = true }: { limit?: number; showHeader?: boolean }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative overflow-hidden py-24">
      <DecoratorsB />
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {showHeader && (
          <SectionHeader
            centered
            label="Our Services"
            title={<>Everything You Need to <span className="text-gradient">Succeed Online</span></>}
            description="A comprehensive suite of digital services tailored to transform your business and accelerate growth."
          />
        )}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => {
            const theme = themes[index % themes.length];
            return (
              <FadeIn key={service.id} delay={index * 0.07}>
                <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${theme.accent}`}>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute right-5 top-5 font-[family-name:var(--font-jakarta)] text-[1.75rem] font-black leading-none text-text-primary/[0.05] select-none transition-colors group-hover:text-text-primary/[0.08]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={`mb-5 flex items-center justify-center rounded-xl border bg-gradient-to-br transition-all duration-300 ${theme.icon}`}
                    style={{ height: "3.25rem", width: "3.25rem" }}>
                    <DynamicIcon name={service.icon} size={22} />
                  </div>
                  <h3 className="mb-2.5 font-[family-name:var(--font-jakarta)] text-[1.0625rem] font-bold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-[0.9rem] leading-relaxed text-text-secondary">{service.description}</p>
                  <ul className="mb-2 flex-1 space-y-1.5">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-[0.83rem] text-text-secondary">
                        <Check size={13} className={`shrink-0 ${theme.check}`} />
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
