"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { CaseStudyModal, PortfolioCaseStudy } from "@/components/ui/CaseStudyModal";
import { FadeIn } from "@/components/ui/FadeIn";
import { portfolioFilters, portfolioItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const cardThemes = [
  { grad: "from-blue/20 via-blue-light/10 to-bg-muted",        dot: "rgba(1,48,162,0.08)"     },
  { grad: "from-violet-600/16 via-purple-500/8 to-bg-muted",   dot: "rgba(124,58,237,0.08)"   },
  { grad: "from-emerald-500/16 via-teal-500/8 to-bg-muted",    dot: "rgba(16,185,129,0.08)"   },
  { grad: "from-amber-500/16 via-orange-400/8 to-bg-muted",    dot: "rgba(245,158,11,0.08)"   },
  { grad: "from-rose-500/16 via-pink-500/8 to-bg-muted",       dot: "rgba(244,63,94,0.08)"    },
  { grad: "from-cyan-500/16 via-sky-400/8 to-bg-muted",        dot: "rgba(6,182,212,0.08)"    },
  { grad: "from-indigo-500/16 via-blue/8 to-bg-muted",         dot: "rgba(99,102,241,0.08)"   },
  { grad: "from-lime-500/16 via-green-400/8 to-bg-muted",      dot: "rgba(132,204,22,0.08)"   },
  { grad: "from-fuchsia-500/16 via-purple-400/8 to-bg-muted",  dot: "rgba(217,70,239,0.08)"   },
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState("all");
  const [selectedStudy, setSelectedStudy] = useState<PortfolioCaseStudy | null>(null);

  const filtered = filter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {portfolioFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
              filter === item.id
                ? "border-blue bg-blue text-white shadow-[0_4px_16px_rgba(1,48,162,0.35)] dark:border-blue-light dark:bg-blue"
                : "border-card-border bg-card-bg text-text-secondary hover:border-blue/30 hover:text-blue dark:hover:border-blue-light/30 dark:hover:text-blue-light",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Grid - project info always visible */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => {
          const theme = cardThemes[index % cardThemes.length];
          return (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article
                onClick={() => setSelectedStudy(item)}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              >

                {/* Image / gradient area */}
                <div className="relative h-44 overflow-hidden">
                  {/* Gradient bg - scales slightly on hover */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.06]",
                    theme.grad,
                  )} />

                  {/* Dot texture */}
                  <div className="absolute inset-0 opacity-50"
                    style={{ backgroundImage: `radial-gradient(circle, ${theme.dot} 1px, transparent 1px)`, backgroundSize: "18px 18px" }} />

                  {/* Center geometric placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-2xl border-2 border-current opacity-[0.07]" />
                  </div>

                  {/* Category chip - top-left */}
                  <div className="absolute left-3 top-3 z-10 rounded-full border border-card-border bg-card-bg/85 px-3 py-1 text-[0.72rem] font-semibold text-text-muted backdrop-blur-md">
                    {item.label.split("-")[0].trim()}
                  </div>

                  {/* View button - top-right */}
                  <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-xl bg-card-bg/85 text-text-secondary backdrop-blur-md transition-all group-hover:bg-blue group-hover:text-white">
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Project info */}
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <div className="min-w-0">
                    <h3 className="truncate font-[family-name:var(--font-jakarta)] text-[0.9375rem] font-bold text-text-primary group-hover:text-blue dark:group-hover:text-blue-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 truncate text-[0.8rem] text-text-muted">{item.label}</p>
                  </div>
                  {/* Arrow indicator */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border text-text-muted transition-all group-hover:border-blue/30 group-hover:bg-blue group-hover:text-white">
                    <ExternalLink size={13} />
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal item={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </>
  );
}
