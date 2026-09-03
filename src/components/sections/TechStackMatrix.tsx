"use client";

import { useState } from "react";
import { Boxes, Code2, Cpu, Database, Globe2, Layers, Megaphone, Palette, Server, ShieldCheck, Sparkles, Video } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface TechItem {
  name: string;
  category: "web" | "design" | "video" | "marketing" | "saas";
  icon: any;
  badge: string;
  serviceName: string;
  projectsCount: number;
}

const techStackData: TechItem[] = [
  // Web & Software
  { name: "React & Next.js 16", category: "web", icon: Code2, badge: "Frontend Framework", serviceName: "Software & Web", projectsCount: 145 },
  { name: "TypeScript & Node.js", category: "web", icon: Server, badge: "Full-Stack Backend", serviceName: "Software & Web", projectsCount: 130 },
  { name: "Python & PostgreSQL", category: "web", icon: Database, badge: "AI & Relational DB", serviceName: "Software & Web", projectsCount: 95 },
  { name: "Tailwind CSS", category: "web", icon: Palette, badge: "Modern UI Styling", serviceName: "Software & Web", projectsCount: 160 },

  // Graphic Design
  { name: "Adobe Photoshop", category: "design", icon: Palette, badge: "Photo & Raster Editing", serviceName: "Graphic Design", projectsCount: 160 },
  { name: "Adobe Illustrator", category: "design", icon: Palette, badge: "Vector Logos & Art", serviceName: "Graphic Design", projectsCount: 180 },
  { name: "Figma UI/UX", category: "design", icon: Palette, badge: "Interactive Prototyping", serviceName: "Graphic Design", projectsCount: 135 },
  { name: "Brand Identity Kits", category: "design", icon: Palette, badge: "Brand & Collateral", serviceName: "Graphic Design", projectsCount: 110 },

  // Video Editing
  { name: "Adobe Premiere Pro", category: "video", icon: Video, badge: "4K Video Editing", serviceName: "Video Editing", projectsCount: 85 },
  { name: "After Effects", category: "video", icon: Video, badge: "2D/3D Motion Graphics", serviceName: "Video Editing", projectsCount: 70 },
  { name: "DaVinci Resolve", category: "video", icon: Video, badge: "Professional Color Grade", serviceName: "Video Editing", projectsCount: 50 },
  { name: "Social Reels & Shorts", category: "video", icon: Video, badge: "Short-Form Content", serviceName: "Video Editing", projectsCount: 120 },

  // Digital Marketing & SaaS
  { name: "Google Analytics 4", category: "marketing", icon: Megaphone, badge: "Tracking & Funnels", serviceName: "Digital Marketing", projectsCount: 115 },
  { name: "Google & Meta Ads", category: "marketing", icon: Megaphone, badge: "PPC Campaigns & ROI", serviceName: "Digital Marketing", projectsCount: 100 },
  { name: "SEO & Ahrefs Audit", category: "marketing", icon: Megaphone, badge: "Organic Search Rank", serviceName: "Digital Marketing", projectsCount: 140 },
  { name: "POS & ERP Systems", category: "saas", icon: Boxes, badge: "SaaS Business Software", serviceName: "SaaS Products", projectsCount: 75 },
];

export function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("web");

  const filtered = activeCategory === "all"
    ? techStackData
    : techStackData.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 bg-bg-subtle relative overflow-hidden">
      {/* Ambient glow - desktop optimized */}
      <div className="pointer-events-none absolute -right-32 top-1/4 hidden h-96 w-96 rounded-full bg-blue/10 blur-3xl sm:block dark:bg-blue-light/10" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8 relative z-10">
        <SectionHeader
          centered
          label="Tools & Technologies"
          title={<>Cutting-Edge <span className="text-gradient">Tech Stack</span></>}
          description="Software, tools, and creative suites we use across all 6 of our core digital services."
        />

        {/* Category Filter Tabs — "All Technologies" removed */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {[
            { id: "web", label: "Web & Software" },
            { id: "design", label: "Graphic Design" },
            { id: "video", label: "Video Editing" },
            { id: "marketing", label: "Digital Marketing" },
            { id: "saas", label: "SaaS Products" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-5 py-2 text-xs font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "border-blue bg-blue text-white shadow-[0_4px_20px_rgba(1,48,162,0.35)] dark:border-blue-light dark:bg-blue"
                  : "border-card-border bg-card-bg text-text-secondary hover:border-blue/30 hover:text-blue dark:hover:border-blue-light/30 dark:hover:text-blue-light"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards carousel — all in one scrolling line */}
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-subtle to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-subtle to-transparent" />

          {/* Scrolling track — duplicated for seamless loop */}
          <div
            className="flex animate-marquee gap-4 whitespace-nowrap"
            style={{ animationDuration: "40s" }}
          >
            {[...filtered, ...filtered].map((tech, index) => {
              const IconComp = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="group relative inline-flex w-64 shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-card-border bg-card-bg p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                >
                  {/* Top glowing stripe on hover */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue via-blue-light to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue/15 bg-blue/8 text-blue transition-transform duration-300 group-hover:scale-110 dark:border-blue-light/20 dark:bg-blue/12 dark:text-blue-light">
                        <IconComp size={20} />
                      </div>
                      <span className="max-w-[130px] truncate rounded-full bg-blue/8 px-2.5 py-0.5 text-[0.68rem] font-bold text-blue dark:bg-blue/15 dark:text-blue-light">
                        {tech.serviceName}
                      </span>
                    </div>

                    <h4 className="whitespace-normal font-[family-name:var(--font-jakarta)] text-[0.9375rem] font-bold text-text-primary transition-colors group-hover:text-blue dark:group-hover:text-blue-light">
                      {tech.name}
                    </h4>
                    <p className="mt-0.5 whitespace-normal text-[0.78rem] text-text-muted">
                      {tech.badge}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[0.72rem] text-text-muted dark:border-white/5">
                    <span>Usage Experience</span>
                    <span className="font-semibold text-text-primary">
                      <strong className="text-blue dark:text-blue-light">{tech.projectsCount}+</strong> Projects
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
