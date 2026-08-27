"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastMessage {
  id: string;
  type: "success" | "info";
  title: string;
  description?: string;
}

// Global helper function to trigger toasts from anywhere
export function toast(title: string, description?: string, type: "success" | "info" = "success") {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("app-toast", {
      detail: { id: Math.random().toString(), title, description, type },
    });
    window.dispatchEvent(event);
  }
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<ToastMessage>;
      const newToast = customEvent.detail;
      setToasts((prev) => [...prev, newToast]);

      // Auto dismiss after 4 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 4000);
    };

    window.addEventListener("app-toast", handleToast);
    return () => window.removeEventListener("app-toast", handleToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-20 z-[60] flex flex-col gap-2.5 max-w-sm w-full px-4 pointer-events-none sm:right-6 sm:w-auto">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "pointer-events-auto flex items-start gap-3 rounded-2xl border p-4 shadow-xl backdrop-blur-xl transition-all duration-300 animate-slide-up",
            t.type === "success"
              ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-950 dark:bg-emerald-950/90 dark:text-emerald-100 dark:border-emerald-500/30"
              : "border-blue/25 bg-blue/10 text-blue-950 dark:bg-blue-950/90 dark:text-blue-100 dark:border-blue/30"
          )}
        >
          <div className="mt-0.5 shrink-0">
            {t.type === "success" ? (
              <CheckCircle2 size={18} className="text-emerald-500 dark:text-emerald-400" />
            ) : (
              <Info size={18} className="text-blue dark:text-blue-light" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold font-[family-name:var(--font-jakarta)] leading-tight">
              {t.title}
            </p>
            {t.description && (
              <p className="mt-1 text-[0.75rem] opacity-80 leading-normal">
                {t.description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setToasts((prev) => prev.filter((item) => item.id !== t.id))}
            className="shrink-0 text-text-muted hover:opacity-100 transition-opacity"
            aria-label="Dismiss toast"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
