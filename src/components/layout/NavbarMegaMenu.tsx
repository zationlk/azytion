"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Code2, Layers, Monitor, Palette, Sparkles, TrendingUp, Users, Video } from "lucide-react";
import { products, services } from "@/lib/data";

const serviceIcons: Record<string, any> = {
  software: Code2,
  web: Monitor,
  graphic: Palette,
  video: Video,
  marketing: TrendingUp,
  saas: Boxes,
};

export function ServicesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] rounded-3xl border border-card-border bg-card-bg p-6 shadow-[0_24px_64px_rgba(1,48,162,0.18)] dark:bg-[#090e1e] dark:border-white/15 dark:shadow-[0_24px_64px_rgba(0,0,0,0.85)] transition-all duration-200">
      <div className="flex items-center justify-between border-b border-border pb-4 dark:border-white/10">
        <div>
          <p className="font-[family-name:var(--font-jakarta)] text-sm font-bold text-text-primary">
            Our Services &amp; Capabilities
          </p>
          <p className="text-[0.78rem] text-text-muted">
            End-to-end digital solutions tailored to accelerate your growth
          </p>
        </div>
        <Link
          href="/services"
          onClick={onClose}
          className="flex items-center gap-1 text-[0.8125rem] font-semibold text-blue transition hover:underline dark:text-blue-light"
        >
          View All Services <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4">
        {services.map((item) => {
          const IconComp = serviceIcons[item.id] || Code2;
          return (
            <Link
              key={item.id}
              href={`/services#${item.id}`}
              onClick={onClose}
              className="group flex items-start gap-3.5 rounded-2xl border border-transparent p-3 transition hover:border-blue/20 hover:bg-blue/6 dark:hover:border-blue-light/20 dark:hover:bg-blue/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/8 text-blue transition-transform group-hover:scale-105 dark:bg-blue/12 dark:text-blue-light">
                <IconComp size={18} />
              </div>
              <div>
                <p className="font-[family-name:var(--font-jakarta)] text-[0.875rem] font-bold text-text-primary group-hover:text-blue dark:group-hover:text-blue-light">
                  {item.title}
                </p>
                <p className="text-[0.78rem] leading-snug text-text-muted line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function ProductsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] rounded-3xl border border-card-border bg-card-bg p-6 shadow-[0_24px_64px_rgba(1,48,162,0.18)] dark:bg-[#090e1e] dark:border-white/15 dark:shadow-[0_24px_64px_rgba(0,0,0,0.85)] transition-all duration-200">
      <div className="flex items-center justify-between border-b border-border pb-4 dark:border-white/10">
        <div>
          <p className="font-[family-name:var(--font-jakarta)] text-sm font-bold text-text-primary">
            Featured SaaS Systems
          </p>
          <p className="text-[0.78rem] text-text-muted">
            Ready-to-deploy business management systems with instant setup
          </p>
        </div>
        <Link
          href="/products"
          onClick={onClose}
          className="flex items-center gap-1 text-[0.8125rem] font-semibold text-blue transition hover:underline dark:text-blue-light"
        >
          Explore All Products <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4">
        {products.slice(0, 6).map((item) => (
          <Link
            key={item.id}
            href={`/products#${item.id}`}
            onClick={onClose}
            className="group flex items-start gap-3.5 rounded-2xl border border-transparent p-3 transition hover:border-blue/20 hover:bg-blue/6 dark:hover:border-blue-light/20 dark:hover:bg-blue/10"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/8 text-blue transition-transform group-hover:scale-105 dark:bg-blue/12 dark:text-blue-light">
              <Boxes size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-[family-name:var(--font-jakarta)] text-[0.875rem] font-bold text-text-primary group-hover:text-blue dark:group-hover:text-blue-light">
                  {item.title}
                </p>
                {"badge" in item && item.badge && (
                  <span className="rounded-full bg-blue/10 px-2 py-0.5 text-[0.65rem] font-bold text-blue dark:bg-blue/20 dark:text-blue-light">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-[0.78rem] leading-snug text-text-muted line-clamp-2">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
