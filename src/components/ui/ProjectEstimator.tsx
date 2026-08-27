"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Calculator, CheckCircle2, ChevronLeft, Clock, DollarSign, Sparkles, Zap } from "lucide-react";
import { toast } from "@/components/ui/Toast";

interface ServiceOption {
  id: string;
  label: string;
  desc: string;
  basePrice: number;
  features: { id: string; label: string; price: number }[];
}

const serviceCatalog: ServiceOption[] = [
  {
    id: "web",
    label: "Website Design",
    desc: "Custom business site, landing page, or e-commerce storefront",
    basePrice: 350,
    features: [
      { id: "ecom", label: "E-Commerce Storefront & Checkout", price: 150 },
      { id: "uiux", label: "Custom UI/UX Design & Prototyping", price: 120 },
      { id: "cms", label: "WordPress & CMS Integration", price: 100 },
      { id: "seo", label: "SEO Setup & Meta Optimization", price: 80 },
      { id: "lang", label: "Multi-Language Support", price: 80 },
      { id: "speed", label: "Page Speed & Performance Tuning", price: 60 },
    ],
  },
  {
    id: "software",
    label: "Software Development",
    desc: "Tailored web applications, APIs, or enterprise software",
    basePrice: 850,
    features: [
      { id: "api", label: "Custom REST / GraphQL API", price: 200 },
      { id: "auth", label: "User Authentication & Roles", price: 120 },
      { id: "admin", label: "Admin Control Dashboard", price: 180 },
      { id: "db", label: "Database Architecture & Optimization", price: 150 },
      { id: "mobile", label: "Mobile App Integration (iOS & Android)", price: 450 },
      { id: "devops", label: "Cloud Hosting & DevOps Setup", price: 120 },
    ],
  },
  {
    id: "saas",
    label: "SaaS Deployment",
    desc: "Ready-to-deploy POS, ERP, CRM, LMS, or Accounting systems",
    basePrice: 290,
    features: [
      { id: "pos", label: "Point-of-Sale (POS) Module", price: 120 },
      { id: "erp", label: "ERP & Inventory Management", price: 200 },
      { id: "crm", label: "CRM & Sales Pipeline Module", price: 150 },
      { id: "lms", label: "LMS Learning Portal", price: 150 },
      { id: "brand", label: "Custom Branding & Domain Setup", price: 80 },
      { id: "multi", label: "Multi-Branch & Store Synchronization", price: 100 },
    ],
  },
  {
    id: "graphic",
    label: "Graphic Design",
    desc: "Brand identity, logo design, packaging, and marketing collateral",
    basePrice: 200,
    features: [
      { id: "brandkit", label: "Full Brand Identity & Guidelines", price: 120 },
      { id: "logo", label: "Custom Logo Design Package", price: 100 },
      { id: "social", label: "Social Media Graphics Kit", price: 80 },
      { id: "flyer", label: "Marketing Collateral & Brochures", price: 70 },
      { id: "pack", label: "Product Packaging & Label Design", price: 110 },
      { id: "source", label: "Vector Source Files (.AI, .PSD, .SVG)", price: 50 },
    ],
  },
  {
    id: "video",
    label: "Video Editing",
    desc: "Promotional videos, motion graphics, audio mixing, and social reels",
    basePrice: 250,
    features: [
      { id: "edit4k", label: "4K High-Res Video Editing", price: 100 },
      { id: "motion", label: "Motion Graphics & Animation", price: 140 },
      { id: "color", label: "Professional Color Grading", price: 80 },
      { id: "sound", label: "Sound Design & Audio Mixing", price: 70 },
      { id: "voice", label: "Voiceover & Captions", price: 60 },
      { id: "reels", label: "Social Media Reels / Shorts Package", price: 90 },
    ],
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    desc: "SEO optimization, Google & Meta Ads, and growth marketing",
    basePrice: 400,
    features: [
      { id: "seo_m", label: "Full SEO Optimization & Keyword Strategy", price: 150 },
      { id: "gads", label: "Google Ads PPC Campaign Management", price: 140 },
      { id: "meta", label: "Meta Ads (Facebook & Instagram)", price: 140 },
      { id: "strat", label: "Content Strategy & Copywriting", price: 100 },
      { id: "email", label: "Email Marketing Automation", price: 90 },
      { id: "analytics", label: "Monthly Analytics Performance Report", price: 60 },
    ],
  },
];

const timelineOptions = [
  { id: "flexible", label: "Flexible (1-2 months)", multiplier: 1.0 },
  { id: "standard", label: "Standard (2-4 weeks)", multiplier: 1.15 },
  { id: "urgent", label: "Express Urgent (< 2 weeks)", multiplier: 1.35 },
];

export function ProjectEstimator() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("web");
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>(["uiux", "seo"]);
  const [selectedTimelineId, setSelectedTimelineId] = useState<string>("standard");

  const currentService = useMemo(() => {
    return serviceCatalog.find((s) => s.id === selectedServiceId) || serviceCatalog[0];
  }, [selectedServiceId]);

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    // Select first 2 features by default for the new service
    const targetService = serviceCatalog.find((s) => s.id === serviceId);
    if (targetService && targetService.features.length > 0) {
      setSelectedFeatureIds([targetService.features[0].id, targetService.features[1]?.id || ""]);
    } else {
      setSelectedFeatureIds([]);
    }
  };

  const toggleFeature = (featId: string) => {
    setSelectedFeatureIds((prev) =>
      prev.includes(featId) ? prev.filter((id) => id !== featId) : [...prev, featId]
    );
  };

  const estimate = useMemo(() => {
    const base = currentService.basePrice;
    const addonsTotal = selectedFeatureIds.reduce((acc, featId) => {
      const feat = currentService.features.find((f) => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    const timelineObj = timelineOptions.find((t) => t.id === selectedTimelineId) || timelineOptions[1];
    const subtotal = (base + addonsTotal) * timelineObj.multiplier;

    const minEstimate = Math.round(subtotal * 0.9);
    const maxEstimate = Math.round(subtotal * 1.15);

    return { minEstimate, maxEstimate, base, addonsTotal, timelineObj };
  }, [currentService, selectedFeatureIds, selectedTimelineId]);

  const handleSendQuote = () => {
    const message = `Hi Azytion, I calculated an estimate for ${currentService.label} ($${estimate.minEstimate} - $${estimate.maxEstimate}) on your website and would like to get an official proposal.`;
    toast("Estimate proposal prepared!", "Opening WhatsApp for instant quote submission.", "success");
    window.open(`https://wa.me/94723344070?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-card-border bg-card-bg shadow-[0_24px_64px_rgba(0,0,0,0.08)] dark:border-white/10 dark:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-dark via-blue to-blue-light px-8 py-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15">
              <Calculator size={18} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-white/80">
              Interactive Scope &amp; Budget Calculator
            </span>
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-xs font-bold text-white">
            Step {step} of 4
          </span>
        </div>

        <h3 className="mt-3 font-[family-name:var(--font-jakarta)] text-2xl font-extrabold sm:text-3xl">
          Estimate Your Project Investment
        </h3>
        <p className="mt-1 text-xs text-white/80 max-w-xl">
          Select your service &amp; tailored options below to calculate an instant cost range and timeline.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {/* Step Indicator */}
        <div className="mb-8 flex items-center justify-between border-b border-border pb-4 dark:border-white/10">
          {[
            { num: 1, label: "Select Service" },
            { num: 2, label: "Service Features" },
            { num: 3, label: "Timeline" },
            { num: 4, label: "Summary & Quote" },
          ].map((s) => (
            <div
              key={s.num}
              onClick={() => setStep(s.num as any)}
              className={`flex cursor-pointer items-center gap-2 text-xs font-bold transition ${
                step === s.num
                  ? "text-blue dark:text-blue-light"
                  : step > s.num
                  ? "text-emerald-500"
                  : "text-text-muted"
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] ${
                  step === s.num
                    ? "bg-blue text-white"
                    : step > s.num
                    ? "bg-emerald-500 text-white"
                    : "bg-bg-subtle text-text-muted"
                }`}
              >
                {s.num}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="font-[family-name:var(--font-jakarta)] text-base font-bold text-text-primary">
              1. Choose a service category:
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCatalog.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectService(item.id)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 ${
                    selectedServiceId === item.id
                      ? "border-blue bg-blue/8 shadow-md dark:border-blue-light dark:bg-blue/15 ring-2 ring-blue/20"
                      : "border-border bg-bg-subtle hover:border-blue/30 dark:border-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-[family-name:var(--font-jakarta)] text-sm font-bold text-text-primary">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-blue dark:text-blue-light">
                      From ${item.basePrice}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Service-Specific Features */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-[family-name:var(--font-jakarta)] text-base font-bold text-text-primary">
                2. Select features for <span className="text-blue dark:text-blue-light">{currentService.label}</span>:
              </h4>
              <span className="text-xs text-text-muted">
                Base price: <strong>${currentService.basePrice}</strong>
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {currentService.features.map((feat) => {
                const isChecked = selectedFeatureIds.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`cursor-pointer flex items-center justify-between rounded-2xl border p-4 transition-all ${
                      isChecked
                        ? "border-blue bg-blue/8 shadow-sm dark:border-blue-light dark:bg-blue/15"
                        : "border-border bg-bg-subtle hover:border-blue/30 dark:border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs transition ${
                          isChecked
                            ? "border-blue bg-blue text-white"
                            : "border-border bg-card-bg"
                        }`}
                      >
                        {isChecked && <CheckCircle2 size={13} />}
                      </div>
                      <span className="text-xs font-semibold text-text-primary">
                        {feat.label}
                      </span>
                    </div>
                    <span className="text-[0.72rem] font-bold text-blue dark:text-blue-light">
                      +${feat.price}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Timeline */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="font-[family-name:var(--font-jakarta)] text-base font-bold text-text-primary">
              3. Select your preferred turnaround timeline:
            </h4>
            <div className="grid gap-3 sm:grid-cols-3">
              {timelineOptions.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setSelectedTimelineId(t.id)}
                  className={`cursor-pointer rounded-2xl border p-5 text-center transition-all ${
                    selectedTimelineId === t.id
                      ? "border-blue bg-blue/8 shadow-md dark:border-blue-light dark:bg-blue/15 ring-2 ring-blue/20"
                      : "border-border bg-bg-subtle hover:border-blue/30 dark:border-white/5"
                  }`}
                >
                  <Clock size={22} className="mx-auto mb-2 text-blue dark:text-blue-light" />
                  <span className="block text-xs font-bold text-text-primary mb-1">
                    {t.label}
                  </span>
                  <span className="text-[0.7rem] text-text-muted">
                    {t.multiplier > 1 ? `+${Math.round((t.multiplier - 1) * 100)}% Speed Fee` : "Standard Rate"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Summary & Quote */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-blue/20 bg-gradient-to-br from-blue/10 to-blue-light/5 p-6 text-center dark:from-blue/20 dark:to-blue-light/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue dark:text-blue-light">
                Estimated Project Cost
              </span>
              <div className="mt-2 font-[family-name:var(--font-jakarta)] text-4xl font-black text-blue dark:text-blue-light sm:text-5xl">
                ${estimate.minEstimate} - ${estimate.maxEstimate}
              </div>
              <p className="mt-2 text-xs text-text-muted">
                Estimated delivery: <strong className="text-text-primary">{estimate.timelineObj.label}</strong>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-subtle p-5 space-y-2.5 text-xs text-text-secondary dark:border-white/5">
              <div className="flex justify-between border-b border-border/50 pb-2 dark:border-white/5">
                <span>Selected Service:</span>
                <strong className="text-text-primary font-bold">{currentService.label}</strong>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2 dark:border-white/5">
                <span>Base Service Package:</span>
                <strong className="text-text-primary">${currentService.basePrice}</strong>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2 dark:border-white/5">
                <span>Selected Feature Add-ons ({selectedFeatureIds.length}):</span>
                <strong className="text-text-primary">+${estimate.addonsTotal}</strong>
              </div>
              <div className="flex justify-between">
                <span>Included Support:</span>
                <strong className="text-emerald-500 font-bold">30 Days Free Maintenance</strong>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-5 dark:border-white/10">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => (prev - 1) as any)}
              className="inline-flex items-center gap-1 text-xs font-bold text-text-muted hover:text-text-primary"
            >
              <ChevronLeft size={16} /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => (prev + 1) as any)}
              className="inline-flex items-center gap-2 rounded-xl bg-blue px-6 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-blue-light"
            >
              Next Step <ArrowRight size={15} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSendQuote}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-emerald-500"
            >
              Submit &amp; Get Official Quote <ArrowRight size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
