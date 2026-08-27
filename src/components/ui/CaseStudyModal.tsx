"use client";

import { ArrowRight, BarChart3, CheckCircle2, ExternalLink, Globe2, Layers, Sparkles, TrendingUp, X } from "lucide-react";
import { toast } from "@/components/ui/Toast";

export interface PortfolioCaseStudy {
  title: string;
  category: string;
  label: string;
  metrics?: { label: string; value: string }[];
  description?: string;
}

export function CaseStudyModal({
  item,
  onClose,
}: {
  item: PortfolioCaseStudy | null;
  onClose: () => void;
}) {
  if (!item) return null;

  const metrics = item.metrics || [
    { label: "Revenue Impact", value: "+340%" },
    { label: "Delivery Time", value: "6 Weeks" },
    { label: "User Retention", value: "99.4%" },
  ];

  const handleContactProject = () => {
    toast(`Inquiry sent for ${item.title}!`, "Opening WhatsApp contact for project consultation.", "success");
    const waUrl = `https://wa.me/94723344070?text=${encodeURIComponent(`Hi Azytion, I saw your portfolio case study for "${item.title}" and would like a similar solution for my business.`)}`;
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Case Study Modal Box */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-card-border bg-card-bg shadow-2xl transition-all dark:border-white/10 max-h-[90vh] overflow-y-auto">
        {/* Top visual band */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-dark via-[#0a2580] to-blue p-8 text-white">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">
              Case Study &bull; {item.category.toUpperCase()}
            </span>
            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-[0.7rem] font-bold text-emerald-300">
              Verified Result
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold sm:text-3xl">
            {item.title}
          </h2>
          <p className="mt-2 text-sm text-white/80">
            {item.label}
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-3 border-b border-border bg-bg-subtle p-4 dark:border-white/10">
          {metrics.map((m) => (
            <div key={m.label} className="text-center border-r border-border last:border-r-0 dark:border-white/10">
              <strong className="block font-[family-name:var(--font-jakarta)] text-xl font-extrabold text-blue dark:text-blue-light">
                {m.value}
              </strong>
              <span className="text-[0.72rem] text-text-muted">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-[family-name:var(--font-jakarta)] text-base font-bold text-text-primary mb-2">
              Project Challenge &amp; Solution
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Azytion architected a comprehensive digital solution for {item.title}. By deploying modern microservices, high-performance UI components, and automated cloud workflows, we enabled seamless scaling and doubled operational efficiency.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
              Technologies &amp; Architecture Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS Cloud"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-[0.75rem] font-semibold text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
              Key Deliverables
            </h4>
            {[
              "High-converting custom digital user interface",
              "Automated real-time inventory & analytics synchronization",
              "Sub-second page load optimization across mobile devices",
            ].map((deliv) => (
              <div key={deliv} className="flex items-center gap-2 text-xs text-text-secondary">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between border-t border-border pt-5 dark:border-white/10">
            <span className="text-xs text-text-muted">
              Looking for a similar growth outcome?
            </span>
            <button
              type="button"
              onClick={handleContactProject}
              className="inline-flex items-center gap-2 rounded-xl bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-light active:scale-95"
            >
              Get a Similar Solution
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
