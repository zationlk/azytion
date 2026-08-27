import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner, PageHero } from "@/components/sections/CTA";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecoratorsD, DecoratorsF } from "@/components/ui/SectionDecorators";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Azytion's portfolio - web design, software development, branding, and digital marketing projects.",
};

const impactStats = [
  { value: "340%", label: "Increase in online sales for GlobalRetail after e-commerce launch", color: "text-blue dark:text-blue-light" },
  { value: "60%", label: "Reduction in operational costs for MediCare+ with ERP deployment", color: "text-emerald-500" },
  { value: "5x", label: "ROI achieved by EduStream through our digital marketing campaign", color: "text-violet-500 dark:text-violet-400" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        breadcrumb="Portfolio"
        badge="150+ Projects Delivered"
        title={<>Our <span className="text-gradient">Portfolio</span></>}
        description="A showcase of our best work across software, design, marketing, and SaaS deployments."
        stats={[
          { value: "9+", label: "Case Studies" },
          { value: "340%", label: "Best ROI Achieved" },
          { value: "20+", label: "Countries Served" },
        ]}
      />

      {/* Portfolio grid */}
      <section className="relative overflow-hidden py-24">
        {/* Variant D: concentric rings + rotated square */}
        <DecoratorsD />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="All Projects"
            title={<>Browse Our <span className="text-gradient">Work</span></>}
            description="Filter by category to find projects relevant to your industry or needs."
          />
          <PortfolioGrid />
        </div>
      </section>

      {/* Impact stats */}
      <section className="relative overflow-hidden bg-bg-subtle py-24">
        {/* Variant F: plus signs + rounded square */}
        <DecoratorsF />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="Real Results"
            title={<>Impact That <span className="text-gradient">Speaks</span></>}
            description="Real outcomes from real projects - measurable results that drive business growth."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {impactStats.map((stat, index) => (
              <FadeIn key={stat.value} delay={index * 0.1}>
                <article className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_12px_40px_rgba(1,48,162,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <strong className={`block font-[family-name:var(--font-jakarta)] text-5xl font-extrabold ${stat.color}`}>
                    {stat.value}
                  </strong>
                  <p className="mt-4 leading-relaxed text-text-secondary">{stat.label}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Testimonials limit={3} />

      <CTABanner
        title="Want Results Like These?"
        description="Let's create something amazing together. Share your project vision with us."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
