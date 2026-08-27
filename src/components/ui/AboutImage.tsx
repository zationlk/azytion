"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

interface AboutImageProps {
  className?: string;
}

export function AboutImage({ className }: AboutImageProps) {
  const { theme, mounted } = useTheme();
  const [hasError, setHasError] = useState(false);

  const isDark = mounted ? theme === "dark" : false;
  const imageSrc = isDark ? "/about-dark.png" : "/about-light.png";

  return (
    <div className={cn("relative w-full", className)}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue/10 via-transparent to-blue-light/8 blur-2xl" />

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-[24px] border border-card-border bg-card-bg shadow-[0_24px_64px_rgba(1,48,162,0.18)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
        {!hasError ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              key={imageSrc}
              src={imageSrc}
              alt="About Azytion - Our Story"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              className="object-cover transition-opacity duration-300"
              onError={() => setHasError(true)}
              priority
            />
          </div>
        ) : (
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[23px] bg-gradient-to-br from-blue-dark via-[#0a2580] to-blue">
            <span className="relative select-none font-[family-name:var(--font-jakarta)] text-6xl font-black tracking-tight text-white/20">
              AZYTION
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
