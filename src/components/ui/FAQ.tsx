"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

type FAQItem = { question: string; answer: string };

export function FAQ({ items }: { items: readonly FAQItem[] }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, index) => (
        <FadeIn key={item.question} delay={index * 0.05}>
          <div className={cn(
            "border-b border-border transition-colors",
            active === index && "border-blue/20 dark:border-blue/15",
          )}>
            <button
              type="button"
              onClick={() => setActive(active === index ? null : index)}
              className={cn(
                "flex w-full items-center justify-between gap-6 py-5 text-left transition-colors",
                active === index ? "text-text-primary" : "hover:text-blue dark:hover:text-blue-light",
              )}
            >
              <span className={cn(
                "font-[family-name:var(--font-jakarta)] text-[1rem] font-semibold transition-colors",
                active === index ? "text-text-primary" : "text-text-primary/80",
              )}>
                {item.question}
              </span>
              <span className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                active === index
                  ? "rotate-45 border-blue/25 bg-blue/8 text-blue dark:border-blue-light/25 dark:bg-blue/10 dark:text-blue-light"
                  : "border-border bg-bg-subtle text-text-muted",
              )}>
                <Plus size={15} />
              </span>
            </button>
            <div className={cn(
              "grid transition-all duration-300 ease-in-out",
              active === index ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
            )}>
              <div className="overflow-hidden">
                <div className="rounded-xl bg-bg-subtle p-4">
                  <p className="text-[0.9375rem] leading-relaxed text-text-secondary">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
