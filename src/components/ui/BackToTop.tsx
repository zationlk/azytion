"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        // Sits directly above WhatsApp button (WhatsApp at bottom-6 h-14 = 56px, gap 8px → bottom = 6+56/16+0.5rem ≈ bottom-[5.5rem])
        "fixed bottom-[5.5rem] right-6 z-50",
        "flex h-11 w-11 items-center justify-center rounded-xl",
        "border border-border bg-card-bg text-text-secondary",
        "shadow-[0_4px_16px_rgba(0,0,0,0.1)]",
        "transition-all duration-300",
        "hover:border-blue/40 hover:bg-blue hover:text-white hover:shadow-[0_6px_20px_rgba(1,48,162,0.4)]",
        "dark:border-white/10 dark:bg-bg-muted dark:hover:border-blue-light/40 dark:hover:bg-blue",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp size={16} />
    </button>
  );
}
