import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner, PageHero } from "@/components/sections/CTA";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { FAQ } from "@/components/ui/FAQ";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecoratorsB } from "@/components/ui/SectionDecorators";
import { faqItems, pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Azytion SaaS products - POS, ERP, CRM, LMS, Accounting, Booking systems and more ready-to-use business software.",
};

// Features comparison at the bottom of pricing cards
const planFeatureComparisons = {
  Starter: [
    { label: "Users", value: "Up to 5" },
    { label: "Products", value: "1 License" },
    { label: "Storage", value: "10 GB" },
    { label: "Support", value: "Email" },
  ],
  Professional: [
    { label: "Users", value: "Up to 25" },
    { label: "Products", value: "3 Licenses" },
    { label: "Storage", value: "100 GB" },
    { label: "Support", value: "Priority" },
  ],
  Enterprise: [
    { label: "Users", value: "Unlimited" },
    { label: "Products", value: "Unlimited" },
    { label: "Storage", value: "Unlimited" },
    { label: "Support", value: "24/7 Dedicated" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Products"
        badge="Deploy in 24-48 Hours"
        title={<>SaaS <span className="text-gradient">Products</span></>}
        description="Ready-to-deploy business systems. No development wait - launch instantly and scale as you grow."
        stats={[
          { value: "9+", label: "Products Available" },
          { value: "24h", label: "Avg. Deploy Time" },
          { value: "14-day", label: "Free Trial" },
        ]}
      />

      <ProductsGrid showHeader={false} />

      {/* Quick deploy features */}
      <section className="border-y border-border bg-bg-subtle py-12">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "⚡", title: "24h Deployment", desc: "Live within 24 hours of signup" },
              { icon: "☁️", title: "Cloud Hosted", desc: "Fully managed, zero setup required" },
              { icon: "🎨", title: "Custom Branding", desc: "Your logo and colors throughout" },
              { icon: "🔒", title: "Enterprise Security", desc: "SOC 2-compliant infrastructure" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl border border-card-border bg-card-bg p-5">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-semibold text-text-primary text-[0.9375rem]">{title}</p>
                  <p className="text-[0.8125rem] text-text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative overflow-hidden bg-bg-subtle py-24">
        {/* Variant B: diamonds + cross + chain */}
        <DecoratorsB />
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            centered
            label="Pricing"
            title={
              <>
                Flexible <span className="text-gradient">Plans</span> for Every Business
              </>
            }
            description="Choose the plan that fits your needs. All plans include free setup and dedicated support."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const comparisonData = planFeatureComparisons[plan.name as keyof typeof planFeatureComparisons] ?? [];
              const isFeatured = plan.featured;
              return (
                <FadeIn key={plan.name} delay={index * 0.1}>
                  {/* Wrapper: featured gets top padding to make room for the badge */}
                  <div className={cn("relative h-full", isFeatured && "pt-5 lg:pt-6")}>

                    {/* Badge positioned above the card */}
                    {"badge" in plan && plan.badge && (
                      <div className="absolute inset-x-0 top-0 flex justify-center">
                        <span className="z-10 rounded-full bg-blue px-5 py-1.5 text-[0.75rem] font-bold text-white shadow-[0_4px_16px_rgba(1,48,162,0.4)]">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <article
                      className={cn(
                        "relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300",
                        isFeatured
                          ? [
                              "border-blue bg-gradient-to-b from-blue/[0.08] to-transparent",
                              "shadow-[0_24px_64px_rgba(1,48,162,0.22)] dark:shadow-[0_24px_64px_rgba(1,48,162,0.35)]",
                              "ring-2 ring-blue/30 dark:ring-blue-light/20",
                            ].join(" ")
                          : "border-card-border bg-card-bg hover:border-blue/25 hover:shadow-md",
                      )}
                    >
                      {/* Top accent stripe */}
                      {isFeatured && (
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue to-blue-light" />
                      )}

                      <div className={cn("flex flex-1 flex-col p-8 lg:p-10", isFeatured && "pt-8")}>
                        <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-bold text-text-primary">
                          {plan.name}
                        </h3>
                        <div className="my-5 flex items-end gap-1">
                          <strong
                            className={cn(
                              "font-[family-name:var(--font-jakarta)] text-5xl font-extrabold",
                              isFeatured ? "text-blue dark:text-blue-light" : "text-text-primary",
                            )}
                          >
                            {plan.price}
                          </strong>
                          {plan.period && (
                            <span className="mb-2 text-text-muted">{plan.period}</span>
                          )}
                        </div>
                        <p className="mb-6 text-text-secondary">{plan.description}</p>

                        <ul className="mb-6 flex-1 space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-[0.9375rem] text-text-secondary">
                              <CheckCircle2 size={16} className="shrink-0 text-blue dark:text-blue-light" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button
                          href="/contact"
                          variant={isFeatured ? "primary" : "outline"}
                          className="w-full"
                        >
                          {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                        </Button>
                      </div>

                      {/* Plan details */}
                      <div className="border-t border-border/50 px-8 py-5 lg:px-10">
                        <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-wider text-text-muted">
                          Plan Details
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {comparisonData.map((item) => (
                            <div key={item.label} className="flex flex-col">
                              <span className="text-[0.7rem] text-text-muted">{item.label}</span>
                              <span className={cn("text-[0.82rem] font-semibold", isFeatured ? "text-blue dark:text-blue-light" : "text-text-primary")}>
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            centered
            label="FAQ"
            title={
              <>
                Frequently Asked <span className="text-gradient">Questions</span>
              </>
            }
          />
          <FAQ items={faqItems.products} />
        </div>
      </section>

      <CTABanner
        title="Ready to Deploy Your Business System?"
        description="Start your free 14-day trial today. No credit card required."
        primaryLabel="Start Free Trial"
      />
    </>
  );
}
