"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, mounted, toggle } = useTheme();

  // Before mount: render a static placeholder with no theme-dependent classes
  // This matches the server render exactly, avoiding hydration mismatch.
  // The blocking script already set the correct .dark class on <html>,
  // so the visual is correct even before React hydrates.
  if (!mounted) {
    return (
      <div
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-xl border border-border text-text-muted",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200",
        "border-border bg-card-bg text-text-muted",
        "hover:border-blue/40 hover:bg-blue/6 hover:text-blue",
        "dark:border-white/10 dark:bg-white/4 dark:text-gray-400 dark:hover:border-blue-light/30 dark:hover:bg-blue/8 dark:hover:text-blue-light",
        className,
      )}
    >
      {/* Sun — shown in dark mode, click to go light */}
      <Sun
        size={15}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0",
        )}
      />
      {/* Moon — shown in light mode, click to go dark */}
      <Moon
        size={15}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
    </button>
  );
}
