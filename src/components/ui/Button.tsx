import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "white" | "ghost";
type ButtonSize = "default" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary: [
    "bg-blue text-white border-transparent",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_4px_rgba(1,48,162,0.2)]",
    "hover:bg-blue-light hover:-translate-y-0.5",
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_28px_rgba(1,48,162,0.4)]",
    "active:translate-y-0 active:shadow-none",
  ].join(" "),
  outline: [
    "bg-transparent text-text-primary border-border",
    "hover:border-blue/50 hover:text-blue hover:-translate-y-0.5",
    "dark:hover:border-blue-light/40 dark:hover:text-blue-light",
    "active:translate-y-0",
  ].join(" "),
  white: [
    "bg-white text-blue border-white",
    "shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
    "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
    "active:translate-y-0",
  ].join(" "),
  ghost: [
    "bg-transparent text-white border-white/20",
    "hover:bg-white/10 hover:border-white/40",
    "active:bg-white/5",
  ].join(" "),
};

const sizes: Record<ButtonSize, string> = {
  default: "h-11 px-6 text-[0.9375rem]",
  sm:      "h-9 px-4.5 text-[0.875rem]",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl border font-semibold",
    "transition-all duration-200 whitespace-nowrap select-none",
    "disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
