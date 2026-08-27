import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";
import { DecoratorsC } from "@/components/ui/SectionDecorators";

const accentColors = [
  { border: "border-l-blue dark:border-l-blue-light",            text: "text-blue dark:text-blue-light",          bg: "bg-blue/8 dark:bg-blue/12"          },
  { border: "border-l-violet-500 dark:border-l-violet-400",      text: "text-violet-600 dark:text-violet-400",    bg: "bg-violet-500/8"                    },
  { border: "border-l-emerald-500 dark:border-l-emerald-400",    text: "text-emerald-600 dark:text-emerald-400",  bg: "bg-emerald-500/8"                   },
  { border: "border-l-amber-500 dark:border-l-amber-400",        text: "text-amber-600 dark:text-amber-400",      bg: "bg-amber-500/8"                     },
  { border: "border-l-rose-500 dark:border-l-rose-400",          text: "text-rose-600 dark:text-rose-400",        bg: "bg-rose-500/8"                      },
];

export function Testimonials({ limit = 3 }: { limit?: number }) {
  const items = testimonials.slice(0, limit);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Variant C decorators: triangle + hexagon */}
      <DecoratorsC />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          centered
          label="Testimonials"
          title={<>What Our <span className="text-gradient">Clients Say</span></>}
          description="Don't take our word for it - hear from the businesses we've helped transform."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const accent = accentColors[index % accentColors.length];
            const parts = item.role.split(", ");
            const company = parts[1] ?? "";

            return (
              <FadeIn key={`${item.name}-${index}`} delay={index * 0.1}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-l-4 border-card-border bg-card-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)] ${accent.border} ${index % 2 !== 0 ? "bg-bg-subtle/40 dark:bg-bg-subtle/20" : ""}`}
                >
                  {/* Top shine on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Decorative quote */}
                  <div className={`absolute right-5 top-2 font-serif text-[5rem] font-black leading-none select-none ${accent.text} opacity-[0.12]`} aria-hidden="true">
                    &ldquo;
                  </div>

                  {/* Stars */}
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" width="15" height="15" fill="currentColor" className="text-amber-400">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="relative mb-6 flex-1 text-[0.9375rem] leading-[1.75] text-text-secondary">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3.5 border-t border-border pt-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-light text-[0.75rem] font-extrabold text-white shadow-[0_4px_12px_rgba(1,48,162,0.35)]">
                      {item.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <strong className="block text-[0.9rem] font-semibold leading-tight text-text-primary">
                        {item.name}
                      </strong>
                      <span className="text-[0.78rem] text-text-muted">{parts[0]}</span>
                    </div>
                    {company && (
                      <div className={`shrink-0 rounded-r-lg border-l-[3px] py-1 pl-2.5 pr-3 ${accent.border} ${accent.bg}`}>
                        <span className={`text-[0.72rem] font-bold ${accent.text}`}>{company}</span>
                      </div>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
