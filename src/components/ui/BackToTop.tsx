"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0;
      setScrollProgress(progress);
      setVisible(y > 100);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollProgress();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Circle progress calculation (r=20, circumference = 2 * PI * 20 ≈ 125.66)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-[99]",
        "group flex h-12 w-12 items-center justify-center rounded-full",
        "bg-card-bg text-text-primary shadow-2xl border border-border dark:border-white/10",
        "transition-all duration-300 hover:scale-110 hover:border-blue/40",
        "active:scale-95",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      )}
    >
      {/* SVG Progress Ring */}
      <svg className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
        {/* Track circle */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-border/60 dark:stroke-white/10 fill-none"
          strokeWidth="3"
        />
        {/* Animated active progress ring */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-blue dark:stroke-blue-light fill-none transition-[stroke-dashoffset] duration-150"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Arrow Icon */}
      <ArrowUp size={18} className="relative z-10 text-blue dark:text-blue-light transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
