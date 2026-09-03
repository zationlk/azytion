import Image from "next/image";
import { cn } from "@/lib/utils";

interface AboutImageProps {
  className?: string;
}

// Dark-only — always shows /about.png (renamed from about-dark.png)
// No theme hook needed since light mode is removed
export function AboutImage({ className }: AboutImageProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue/10 via-transparent to-blue-light/8 blur-2xl" />

      {/* Main container */}
      <div className="relative overflow-hidden rounded-[24px] border border-card-border bg-card-bg shadow-[0_24px_64px_rgba(1,48,162,0.18)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/about.png"
            alt="About Azytion — Our Story"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
