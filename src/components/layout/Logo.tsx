"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  const { theme, mounted } = useTheme();

  // Static text fallback shown before JS hydrates (avoids flash / layout shift)
  if (!mounted) {
    return (
      <Link href="/" aria-label="Azytion — Home" className={cn("flex items-center transition-opacity hover:opacity-80", className)}>
        <span className="font-[family-name:var(--font-jakarta)] text-[1.5rem] font-extrabold tracking-tight text-text-primary">
          Azy<span className="text-blue">tion</span>
        </span>
      </Link>
    );
  }

  const isDark = theme === "dark";

  /*
    The user provided two logo images:
      logo-dark.svg  → white wordmark (for dark backgrounds)
      logo-light.svg → dark/black wordmark (for light backgrounds)

    In light mode  → use logo-light.svg (dark text)
    In dark mode   → use logo-dark.svg  (white text)

    If the user replaces these files with their actual PNG/SVG logo images,
    just drop the files into /public as logo-light.png and logo-dark.png
    and update the src props below.
  */
  return (
    <Link
      href="/"
      aria-label="Azytion — Home"
      className={cn("flex items-center transition-opacity hover:opacity-80", className)}
    >
      <Image
        src={isDark ? "/logo-dark.png" : "/logo-light.png"}
        alt="Azytion"
        width={160}
        height={40}
        className="h-9 w-auto object-contain"
        priority
      />
    </Link>
  );
}
