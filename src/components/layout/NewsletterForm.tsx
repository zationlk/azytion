"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/8 px-4 py-2.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
        <CheckCircle2 size={16} />
        You&apos;re subscribed - thanks!
      </div>
    );
  }

  return (
    <form className="flex w-full max-w-sm gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        aria-label="Email for newsletter"
        className="min-w-0 flex-1 rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-all focus:border-blue/50 focus:ring-2 focus:ring-blue/12 dark:focus:border-blue-light/40"
      />
      <button
        type="submit"
        disabled={loading}
        aria-label="Subscribe"
        className="flex items-center gap-1.5 rounded-xl bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-light disabled:opacity-60 active:scale-95"
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        ) : (
          <>Subscribe <ArrowRight size={13} /></>
        )}
      </button>
    </form>
  );
}
