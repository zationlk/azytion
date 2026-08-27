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
      aria-label="Azytion - Home"
      className={cn("flex items-center transition-opacity hover:opacity-80", className)}
    >
      {/* Light mode logo image - Hidden in dark mode */}
      <Image
        src="/logo-light.png"
        alt="Azytion"
        width={140}
        height={35}
        className={cn("h-7.5 md:h-[30px] w-auto object-contain dark:hidden", imgClassName)}
        priority
      />
      {/* Dark mode logo image - Displayed in dark mode */}
      <Image
        src="/logo-dark.png"
        alt="Azytion"
        width={140}
        height={35}
        className={cn("h-7.5 md:h-[30px] w-auto object-contain hidden dark:block", imgClassName)}
        priority
      />
    </Link>
  );
}
