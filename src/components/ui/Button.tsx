import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "white" | "ghost";
type ButtonSize = "default" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary: [
    "bg-gradient-to-r from-blue via-blue-light to-blue text-white border-transparent shimmer-btn",
    "bg-[length:200%_auto] transition-all duration-300",
    "shadow-[0_4px_20px_rgba(1,48,162,0.35)] dark:shadow-[0_4px_20px_rgba(59,130,246,0.35)]",
    "hover:bg-[position:right_center] hover:-translate-y-0.5",
    "hover:shadow-[0_8px_30px_rgba(1,48,162,0.5)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.5)]",
    "active:translate-y-0 active:shadow-none",
  ].join(" "),
  outline: [
    "bg-card-bg/60 backdrop-blur-sm text-text-primary border-border",
    "hover:border-blue/50 hover:bg-blue/5 hover:text-blue hover:-translate-y-0.5",
    "dark:border-white/10 dark:hover:border-blue-light/40 dark:hover:bg-blue/10 dark:hover:text-blue-light",
    "shadow-sm active:translate-y-0",
  ].join(" "),
  white: [
    "bg-white text-blue border-white shimmer-btn",
    "shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
    "hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.22)]",
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
    "relative inline-flex items-center justify-center gap-2 rounded-xl border font-semibold",
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
