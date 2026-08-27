import type { Metadata } from "next";
import { ArrowRight, Globe2, Layers, Rocket, Shield } from "lucide-react";
import { AboutImage } from "@/components/ui/AboutImage";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner, PageHero } from "@/components/sections/CTA";
import { StatsBar } from "@/components/sections/StatsBar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecoratorsD, DecoratorsF } from "@/components/ui/SectionDecorators";
import { team, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Azytion - our mission, values, and the team behind The Best Option in digital solutions.",
};

function getRoleBadgeStyle(role: string): string {
  if (role.toLowerCase().includes("ceo") || role.toLowerCase().includes("founder"))
    return "bg-blue/10 text-blue border-blue/20 dark:bg-blue/12 dark:text-blue-light dark:border-blue-light/20";
  if (role.toLowerCase().includes("developer") || role.toLowerCase().includes("dev"))
    return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400";
  if (role.toLowerCase().includes("design") || role.toLowerCase().includes("creative"))
    return "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-400";
  if (role.toLowerCase().includes("marketing"))
    return "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400";
  return "bg-bg-muted text-text-secondary border-border";
}

const milestones = [
  { year: "2019", title: "Founded", desc: "Azytion launched with a vision to make premium digital solutions accessible to all." },
  { year: "2020", title: "First 10 Clients", desc: "Rapidly grew to serve 10 clients across 4 countries in our first year." },
  { year: "2022", title: "SaaS Launch", desc: "Launched our first SaaS products - POS, CRM and ERP systems deployed to 20+ businesses." },
  { year: "2024", title: "150+ Projects", desc: "Crossed 150 delivered projects with a 99% client retention rate." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        badge="5+ Years of Excellence"
        title={<>About <span className="text-gradient">Azytion</span></>}
        description="We are a digital solutions company on a mission to empower businesses with technology that makes a difference."
        stats={[
          { value: "50+", label: "Happy Clients" },
          { value: "150+", label: "Projects Delivered" },
          { value: "99%", label: "Client Retention" },
        ]}
      />

      {/* Story section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <div className="relative">
                <AboutImage />
                <div className="absolute -bottom-5 -right-4 rounded-2xl border border-card-border bg-card-bg px-6 py-5 text-center shadow-xl dark:shadow-black/40 z-10">
                  <strong className="block font-[family-name:var(--font-jakarta)] text-4xl font-extrabold text-blue dark:text-blue-light">5+</strong>
                  <span className="text-sm text-text-muted">Years of Excellence</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <SectionHeader
                label="Our Story"
                title={<>Building the Future, <span className="text-gradient">One Solution at a Time</span></>}
              />
              <p className="mb-4 text-[1.0625rem] leading-relaxed text-text-secondary">
                Founded with a vision to make premium digital solutions accessible to businesses of all sizes, Azytion has grown into a trusted partner for companies worldwide.
              </p>
              <p className="mb-4 text-text-secondary">
                Our name reflects our promise - we are{" "}
                <strong className="font-semibold text-text-primary">The Best Option</strong>{" "}
                when it comes to software development, creative design, and ready-to-use SaaS products.
              </p>
              <p className="mb-8 text-text-secondary">
                From startups launching their first website to enterprises deploying full-scale ERP systems, we&apos;ve helped over 50 clients achieve their digital goals.
              </p>
              <Button href="/contact">
                Work With Us
                <ArrowRight size={15} />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="bg-bg-subtle py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="Our Journey"
            title={<>Key <span className="text-gradient">Milestones</span></>}
            description="From a small startup to a global digital solutions company - here's how we grew."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, index) => (
              <FadeIn key={m.year} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/20 hover:shadow-[0_12px_40px_rgba(1,48,162,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue to-blue-light opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-3 inline-block rounded-xl border border-blue/20 bg-blue/8 px-3 py-1.5 font-[family-name:var(--font-jakarta)] text-lg font-extrabold text-blue dark:text-blue-light">
                    {m.year}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-[1rem] font-bold text-text-primary">{m.title}</h3>
                  <p className="text-[0.875rem] leading-relaxed text-text-secondary">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden py-24">
        <DecoratorsD />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="Our Values"
            title={<>What Drives <span className="text-gradient">Everything We Do</span></>}
            description="Our core values shape every project, every interaction, and every line of code we write."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.08}>
                <article className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_12px_40px_rgba(1,48,162,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue to-blue-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute right-5 top-4 font-[family-name:var(--font-jakarta)] text-[1.5rem] font-extrabold leading-none text-blue/35 dark:text-blue-light/40 select-none transition-colors group-hover:text-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue/15 bg-blue/8 text-blue transition-all group-hover:border-blue/30 group-hover:bg-blue/12 dark:border-blue-light/15 dark:bg-blue/10 dark:text-blue-light">
                    <DynamicIcon name={value.icon} size={26} />
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-xl font-bold text-text-primary">{value.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-text-secondary">{value.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* What makes us different */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <SectionHeader
                label="Our Approach"
                title={<>What Makes <span className="text-gradient">Us Different</span></>}
              />
              <p className="mb-8 text-[1rem] leading-relaxed text-text-secondary">
                We don&apos;t just build software - we build partnerships. Our collaborative process ensures that every solution we deliver is perfectly aligned with your business goals and designed to grow with you.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Rocket, title: "Speed Without Compromise", desc: "Rapid delivery using proven frameworks and agile workflows, without cutting corners on quality." },
                  { icon: Layers, title: "Full-Stack Expertise", desc: "From UI/UX design to backend architecture and cloud deployment - we handle it all in-house." },
                  { icon: Shield, title: "Transparent & Honest", desc: "Fixed quotes, clear timelines, and proactive communication at every step of the project." },
                  { icon: Globe2, title: "Built to Scale", desc: "Every solution is architected for growth - ready for enterprise scale from day one." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 rounded-xl border border-card-border bg-card-bg p-4 transition-colors hover:border-blue/20">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/8 dark:bg-blue/12">
                      <Icon size={18} className="text-blue dark:text-blue-light" />
                    </div>
                    <div>
                      <p className="mb-0.5 font-semibold text-text-primary">{title}</p>
                      <p className="text-[0.875rem] leading-relaxed text-text-muted">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "150+", label: "Projects Delivered", color: "text-blue dark:text-blue-light" },
                  { value: "99%", label: "Client Retention", color: "text-emerald-500" },
                  { value: "20+", label: "Countries Served", color: "text-violet-500 dark:text-violet-400" },
                  { value: "8+", label: "SaaS Products", color: "text-amber-500" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center rounded-2xl border border-card-border bg-card-bg p-8 text-center">
                    <strong className={`font-[family-name:var(--font-jakarta)] text-4xl font-extrabold ${stat.color}`}>{stat.value}</strong>
                    <span className="mt-1.5 text-[0.85rem] text-text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden bg-bg-subtle py-24">
        <DecoratorsF />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="Our Team"
            title={<>The People Behind <span className="text-gradient">Azytion</span></>}
            description="A talented team of developers, designers, and strategists dedicated to your success."
          />
          <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <article className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_12px_40px_rgba(1,48,162,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue to-blue-light opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-light font-[family-name:var(--font-jakarta)] text-xl font-extrabold text-white shadow-[0_8px_24px_rgba(1,48,162,0.3)]">
                    {member.initials}
                  </div>
                  <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-text-primary">{member.name}</h3>
                  <div className="mt-2 mb-3 flex justify-center">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-bold ${getRoleBadgeStyle(member.role)}`}>
                      {member.role}
                    </span>
                  </div>
                  <p className="text-[0.875rem] leading-relaxed text-text-secondary">{member.bio}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Join Our Team?"
        description="We're always looking for talented individuals who share our passion for digital excellence."
        primaryLabel="Get In Touch"
      />
    </>
  );
}
