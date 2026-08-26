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
      {/* Both centered and left-aligned now use the pill badge style */}
      <div className={cn("mb-5", centered ? "flex justify-center" : "flex")}>
        <span className="rounded-full border border-blue/20 bg-blue/6 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-blue dark:border-blue-light/20 dark:bg-blue/8 dark:text-blue-light">
          {label}
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold tracking-tight text-text-primary md:text-[2.625rem] md:leading-[1.13]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[1rem] leading-relaxed text-text-secondary">{description}</p>
      )}
    </div>
  );
}
