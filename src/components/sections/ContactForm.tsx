"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactServices } from "@/lib/data";
import { cn } from "@/lib/utils";

const inputCls = cn(
  "w-full rounded-xl border border-card-border bg-input-bg px-4 py-3 text-[0.9375rem]",
  "text-text-primary placeholder:text-text-muted outline-none",
  "transition-all duration-200",
  "focus:border-blue/50 focus:ring-4 focus:ring-blue/8",
  "dark:focus:border-blue-light/40 dark:focus:ring-blue/10",
);
const labelCls = "mb-1.5 block text-[0.875rem] font-semibold text-text-primary";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); form.reset(); }, 5000);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[540px] flex-col items-center justify-center gap-6 rounded-[24px] border border-card-border bg-card-bg p-10 text-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-emerald-500/10 animate-glow-pulse" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/12 border border-emerald-500/20">
            <CheckCircle2 size={40} className="text-emerald-500" />
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-2xl font-bold text-text-primary">
            Message Sent!
          </h3>
          <p className="max-w-xs text-text-secondary">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-[0.8125rem] font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Response expected within 24 hours
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[24px] border border-card-border bg-card-bg p-8 lg:p-10">
      {/* Header */}
      <div className="mb-8">
        <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-bold text-text-primary">
          Send Us a Message
        </h3>
        <p className="mt-1 text-[0.875rem] text-text-muted">
          Fill in the form and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="space-y-5">
        {/* Name row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelCls}>First Name</label>
            <input id="firstName" name="firstName" required placeholder="John" className={inputCls} />
          </div>
          <div>
            <label htmlFor="lastName" className={labelCls}>Last Name</label>
            <input id="lastName" name="lastName" required placeholder="Doe" className={inputCls} />
          </div>
        </div>

        {/* Contact row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelCls}>Email Address</label>
            <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputCls} />
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>Phone Number</label>
            <input id="phone" name="phone" type="tel" placeholder="+1 (234) 567-890" className={inputCls} />
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelCls}>I&apos;m Interested In</label>
          <select id="service" name="service" required defaultValue="" className={inputCls}>
            <option value="" disabled>Select a service or product</option>
            {contactServices.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelCls}>Your Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, goals, and timeline..."
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>

      <Button type="submit" className="mt-6 w-full" disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending...
          </span>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </Button>

      <p className="mt-4 text-center text-[0.78rem] text-text-muted">
        🔒 Your information is secure and will never be shared.
      </p>
    </form>
  );
}
