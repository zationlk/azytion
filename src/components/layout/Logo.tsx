import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Azytion — Home"
      className={cn("flex items-center transition-opacity hover:opacity-80", className)}
    >
      {/* Dark mode only — single logo image */}
      <Image
        src="/logo-dark.png"
        alt="Azytion"
        width={140}
        height={35}
        className={cn("h-7 md:h-[30px] w-auto object-contain", imgClassName)}
        priority
      />
    </Link>
  );
}
