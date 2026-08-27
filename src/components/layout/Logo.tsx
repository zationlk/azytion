"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  const { theme, mounted } = useTheme();

  // Static text fallback shown before JS hydrates (avoids flash / layout shift)
  if (!mounted) {
    return (
      <Link
        href="/"
        aria-label="Azytion - Home"
        className={cn("flex items-center transition-opacity hover:opacity-80", className)}
      >
        <span className="font-[family-name:var(--font-jakarta)] text-[1.375rem] font-extrabold tracking-tight text-text-primary">
          Azy<span className="text-blue">tion</span>
        </span>
      </Link>
    );
  }

  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      aria-label="Azytion - Home"
      className={cn("flex items-center transition-opacity hover:opacity-80", className)}
    >
      <Image
        src={isDark ? "/logo-dark.png" : "/logo-light.png"}
        alt="Azytion"
        width={140}
        height={35}
        className={cn("h-7.5 md:h-[30px] w-auto object-contain", imgClassName)}
        priority
      />
    </Link>
  );
}
