import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 max-w-2xl", centered && "mx-auto text-center", className)}>
      <div className={cn("mb-5 flex items-center gap-2", centered && "justify-center")}>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue/20 bg-gradient-to-r from-blue/10 via-blue-light/10 to-blue/5 px-4 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-blue shadow-sm backdrop-blur-sm dark:border-blue-light/30 dark:from-blue/20 dark:via-blue-light/15 dark:to-blue/10 dark:text-blue-light">
          <Sparkles size={11} className="text-blue dark:text-blue-light" />
          {label}
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold tracking-tight text-text-primary md:text-[2.65rem] md:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[1rem] leading-relaxed text-text-secondary">{description}</p>
      )}
    </div>
  );
}
