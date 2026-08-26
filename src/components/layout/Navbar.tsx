"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? Math.min((y / docH) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    setOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <div className="hidden bg-blue px-6 py-1.5 text-center text-[0.75rem] font-medium text-white/90 md:block">
        🇱🇰&nbsp; Based in Sri Lanka — Serving clients worldwide. &nbsp;
        <Link href="/contact" className="font-semibold underline underline-offset-2 hover:text-white">
          Get a free consultation →
        </Link>
      </div>

      <nav
        className={cn(
          "relative h-[66px] transition-all duration-300",
          scrolled
            ? "border-b border-border/70 bg-bg/[0.92] shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-2xl dark:border-white/[0.05] dark:bg-bg/[0.88] dark:shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
            : "bg-transparent",
        )}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-blue via-blue-light to-blue transition-transform duration-75 dark:from-blue-light dark:to-blue"
          style={{ transform: `scaleX(${scrollPct / 100})` }}
        />

        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden items-center md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-150",
                    isActive
                      ? "text-blue dark:text-blue-light"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-blue dark:bg-blue-light" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2.5 md:flex">
            <ThemeToggle />
            <Button href="/contact" size="sm" className="min-w-[110px]">
              Get Started
              <ArrowRight size={14} />
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={toggleMenu}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-text-secondary transition hover:border-blue/40 hover:text-blue dark:border-white/10"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[calc(66px+30px)] z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => { setOpen(false); document.body.style.overflow = ""; }}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "relative z-50 border-b border-border bg-bg/[0.98] backdrop-blur-2xl transition-all duration-300 ease-in-out dark:border-white/[0.06] dark:bg-bg/[0.97] md:hidden",
          open ? "max-h-[30rem] opacity-100" : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        <div className="mx-auto max-w-6xl space-y-0.5 px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center rounded-xl px-4 py-3 text-[0.9375rem] font-medium transition-colors",
                pathname === link.href
                  ? "bg-blue/8 text-blue dark:bg-blue/12 dark:text-blue-light"
                  : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Button href="/contact" className="w-full">
              Get Started
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
