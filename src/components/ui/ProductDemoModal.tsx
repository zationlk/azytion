"use client";

import { useState } from "react";
import { ArrowRight, BarChart3, CheckCircle2, Shield, Sparkles, X, Zap } from "lucide-react";
import { toast } from "@/components/ui/Toast";
import { brand } from "@/lib/data";

export interface DemoProduct {
  id: string;
  title: string;
  description: string;
  tags?: readonly string[];
  badge?: string;
}

export function ProductDemoModal({
  product,
  onClose,
}: {
  product: DemoProduct | null;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "specs">("overview");
  const [screenTab, setScreenTab] = useState<"dashboard" | "analytics" | "mobile">("dashboard");

  if (!product) return null;

  const handleRequestDemo = () => {
    toast(`Demo request sent for ${product.title}!`, "Our team will contact you within 15 minutes.", "success");
    const waUrl = `https://wa.me/94723344070?text=${encodeURIComponent(`Hi Azytion, I would like to get a live demo of the ${product.title}.`)}`;
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

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-card-border bg-card-bg shadow-2xl transition-all dark:border-white/10">
        {/* Header gradient banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-dark via-blue to-blue-light px-7 py-6 text-white">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">
              Interactive Product Demo
            </span>
            {product.badge && (
              <span className="rounded-full bg-amber-400/20 px-3 py-1 text-[0.7rem] font-bold text-amber-300">
                {product.badge}
              </span>
            )}
          </div>
          <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">
            {product.title}
          </h2>
          <p className="mt-1 text-[0.875rem] text-white/80 max-w-lg">
            {product.description}
          </p>
        </div>

        {/* Interactive Content Body */}
        <div className="p-6">
          {/* Visual Screen Switcher */}
          <div className="mb-6 rounded-2xl border border-card-border bg-bg-subtle p-4 dark:border-white/5">
            <div className="flex items-center justify-between mb-3 border-b border-border pb-3 dark:border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                <Sparkles size={13} className="text-blue dark:text-blue-light" />
                Simulated Product Interface
              </span>
              <div className="flex gap-1.5">
                {(["dashboard", "analytics", "mobile"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setScreenTab(tab)}
                    className={`rounded-lg px-2.5 py-1 text-[0.72rem] font-bold capitalize transition ${
                      screenTab === tab
                        ? "bg-blue text-white shadow-sm"
                        : "text-text-muted hover:text-text-primary hover:bg-card-bg"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Screen UI Mockup Box */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-blue/15 bg-gradient-to-br from-blue-dark/90 via-[#07153a] to-blue-dark p-4 text-white shadow-inner flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span className="font-mono text-[0.7rem]">Azytion Systems v3.4 &bull; {product.title}</span>
                <span className="flex items-center gap-1 text-[0.68rem] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live Service Connected
                </span>
              </div>

              <div className="my-auto py-3">
                {screenTab === "dashboard" && (
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-white/10 p-3">
                      <span className="text-[0.65rem] text-white/60 block">Daily Transactions</span>
                      <strong className="text-lg font-bold text-white">$14,890.00</strong>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <span className="text-[0.65rem] text-white/60 block">Active Users</span>
                      <strong className="text-lg font-bold text-white">1,420 Active</strong>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <span className="text-[0.65rem] text-white/60 block">System Uptime</span>
                      <strong className="text-lg font-bold text-emerald-400">99.98%</strong>
                    </div>
                  </div>
                )}
                {screenTab === "analytics" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Monthly Growth Trajectory</span>
                      <span className="text-emerald-400 font-bold">+34.2%</span>
                    </div>
                    <div className="h-10 w-full rounded-lg bg-white/10 p-2 flex items-end gap-1">
                      {[40, 65, 55, 80, 70, 95, 85, 100].map((val, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-gradient-to-t from-blue to-blue-light rounded-t"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {screenTab === "mobile" && (
                  <div className="mx-auto max-w-[200px] rounded-xl border border-white/20 bg-black/40 p-3 text-center">
                    <span className="text-[0.7rem] font-bold block text-white">Mobile Sync Enabled</span>
                    <span className="text-[0.65rem] text-white/70 block mt-1">Real-time alerts push to iOS &amp; Android app</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-[0.7rem] text-white/60 border-t border-white/10 pt-2">
                <span>Multi-branch Ready</span>
                <span>Auto Cloud Backup</span>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              "Instant 24-Hour Deployment",
              "Custom Branding & Logo",
              "Multi-Store / Multi-User",
              "Comprehensive Export Reports",
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between border-t border-border pt-4 dark:border-white/10">
            <span className="text-xs text-text-muted">
              Includes 14-day risk-free trial
            </span>
            <button
              type="button"
              onClick={handleRequestDemo}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-light active:scale-95"
            >
              Request Live Demo
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
