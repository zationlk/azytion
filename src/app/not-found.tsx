import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

const quickLinks = [
  { href: "/services", label: "Services", desc: "What we build" },
  { href: "/products", label: "Products", desc: "SaaS solutions" },
  { href: "/portfolio", label: "Portfolio", desc: "Our work" },
  { href: "/contact", label: "Contact", desc: "Get in touch" },
];

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.05] blur-[100px] dark:bg-blue/[0.1]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(1,48,162,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative w-full max-w-2xl text-center">
        {/* 404 graphic */}
        <div className="mb-2 select-none">
          <span className="font-[family-name:var(--font-jakarta)] text-[7rem] font-extrabold leading-none text-gradient opacity-20 md:text-[9rem]">
            404
          </span>
        </div>

        {/* Icon */}
        <div className="mx-auto -mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-card-border bg-card-bg shadow-lg">
          <Search size={28} className="text-blue dark:text-blue-light" />
        </div>

        <h1 className="mb-3 font-[family-name:var(--font-jakarta)] text-[1.875rem] font-extrabold text-text-primary md:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mb-8 max-w-md text-[1rem] leading-relaxed text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">
            <Home size={16} />
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            <ArrowLeft size={16} />
            Contact Support
          </Button>
        </div>

        {/* Quick links grid */}
        <div className="mt-12">
          <p className="mb-4 text-[0.8rem] font-semibold uppercase tracking-widest text-text-muted">
            Or explore these pages
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-card-border bg-card-bg p-4 text-left transition-all hover:border-blue/25 hover:shadow-sm"
              >
                <p className="text-[0.875rem] font-semibold text-text-primary group-hover:text-blue dark:group-hover:text-blue-light">
                  {link.label}
                </p>
                <p className="text-[0.78rem] text-text-muted">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
