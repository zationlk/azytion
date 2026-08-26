import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products } from "@/lib/data";

// Unique gradient + dot color per product
const cardThemes = [
  { grad: "from-blue/18 via-blue-light/10 to-bg-muted",          dot: "rgba(1,48,162,0.07)",      icon: "text-blue/55 dark:text-blue-light/45"                 },
  { grad: "from-violet-600/15 via-purple-500/8 to-bg-muted",     dot: "rgba(124,58,237,0.07)",    icon: "text-violet-500/55 dark:text-violet-400/45"           },
  { grad: "from-emerald-500/15 via-teal-500/8 to-bg-muted",      dot: "rgba(16,185,129,0.07)",    icon: "text-emerald-500/55 dark:text-emerald-400/45"         },
  { grad: "from-amber-500/15 via-orange-400/8 to-bg-muted",      dot: "rgba(245,158,11,0.07)",    icon: "text-amber-500/55 dark:text-amber-400/45"             },
  { grad: "from-rose-500/15 via-pink-500/8 to-bg-muted",         dot: "rgba(244,63,94,0.07)",     icon: "text-rose-500/55 dark:text-rose-400/45"               },
  { grad: "from-sky-500/15 via-blue-400/8 to-bg-muted",          dot: "rgba(14,165,233,0.07)",    icon: "text-sky-500/55 dark:text-sky-400/45"                 },
  { grad: "from-lime-500/15 via-green-400/8 to-bg-muted",        dot: "rgba(132,204,22,0.07)",    icon: "text-lime-500/55 dark:text-lime-400/45"               },
  { grad: "from-fuchsia-500/15 via-purple-400/8 to-bg-muted",    dot: "rgba(217,70,239,0.07)",    icon: "text-fuchsia-500/55 dark:text-fuchsia-400/45"         },
  { grad: "from-orange-500/15 via-amber-400/8 to-bg-muted",      dot: "rgba(249,115,22,0.07)",    icon: "text-orange-500/55 dark:text-orange-400/45"           },
];

const deployIn24h = new Set(["pos", "crm", "lms", "booking", "accounting"]);

export function ProductsGrid({
  limit,
  showHeader = true,
  showViewAll = false,
}: {
  limit?: number;
  showHeader?: boolean;
  showViewAll?: boolean;
}) {
  const items = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {showHeader && (
          <SectionHeader
            centered
            label="SaaS Products"
            title={<>Ready-to-Use <span className="text-gradient">Business Systems</span></>}
            description="Deploy powerful software instantly. No development wait — just plug in and scale."
          />
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((product, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <FadeIn key={product.id} delay={index * 0.06}>
                <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.09)] dark:hover:border-blue/15 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

                  {/* Shine sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl">
                    <div className="absolute -inset-full top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[400%] group-hover:opacity-100" />
                  </div>

                  {/* Badges */}
                  {"badge" in product && product.badge && (
                    <span className="absolute right-4 top-4 z-20 rounded-full bg-blue px-2.5 py-1 text-[0.7rem] font-bold text-white shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  {"id" in product && deployIn24h.has(product.id) && (
                    <span className="absolute left-4 top-4 z-20 flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[0.68rem] font-bold text-emerald-600 dark:text-emerald-400">
                      <Clock size={9} /> 24h deploy
                    </span>
                  )}

                  {/* Image area */}
                  <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${theme.grad}`}>
                    <div className="pointer-events-none absolute inset-0 opacity-60"
                      style={{ backgroundImage: `radial-gradient(circle, ${theme.dot} 1px, transparent 1px)`, backgroundSize: "18px 18px" }} />
                    <div className="absolute h-24 w-24 rounded-full bg-white/20 blur-2xl" />
                    <DynamicIcon
                      name={product.icon}
                      className={`relative z-10 transition-all duration-500 group-hover:scale-110 ${theme.icon}`}
                      size={52}
                    />
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-[1.0625rem] font-bold text-text-primary">
                      {product.title}
                    </h3>
                    <p className="mb-4 flex-1 text-[0.9rem] leading-relaxed text-text-secondary">
                      {product.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 text-[0.72rem] font-medium text-text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {"isCustom" in product && product.isCustom ? (
                      <Link href="/contact" className="group/btn flex items-center gap-1.5 text-sm font-semibold text-blue transition-all hover:gap-2.5 dark:text-blue-light">
                        Contact Us <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <Button href="/contact" size="sm" className="w-full">
                        Request Demo
                      </Button>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {showViewAll && (
          <FadeIn className="mt-10 text-center">
            <Button href="/products" variant="outline">
              View All Products
              <ArrowRight size={15} />
            </Button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
