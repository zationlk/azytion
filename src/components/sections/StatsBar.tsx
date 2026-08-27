import { TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#060912] via-[#0b1638] to-[#060912]" />

      {/* Dot texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      {/* ── Diverse decorators - concentric rings + cross + diamond ── */}
      {/* Concentric rings - top right */}
      <div className="pointer-events-none absolute -right-16 -top-16 hidden h-56 w-56 animate-scale-pulse opacity-[0.12] lg:block">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1.5" strokeDasharray="8 6"/>
          <circle cx="100" cy="100" r="65" stroke="white" strokeWidth="1.5" strokeDasharray="6 5"/>
          <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" strokeDasharray="4 4"/>
        </svg>
      </div>
      {/* Cross - bottom left */}
      <div className="pointer-events-none absolute -bottom-6 left-12 hidden h-14 w-14 animate-spin-slow opacity-[0.12] lg:block"
        style={{ animationDuration: "22s" }}>
        <svg viewBox="0 0 56 56" fill="white">
          <path d="M25 0h6v25h25v6H31v25h-6V31H0v-6h25V0z"/>
        </svg>
      </div>
      {/* Diamond chain - right side */}
      <div className="pointer-events-none absolute bottom-4 right-24 hidden animate-bob opacity-[0.1] xl:block">
        <svg viewBox="0 0 24 80" fill="none" width="24" height="80">
          {[10,34,58].map(y => (
            <rect key={y} x="4" y={y-8} width="16" height="16" transform={`rotate(45 12 ${y})`} stroke="white" strokeWidth="1.5"/>
          ))}
        </svg>
      </div>

      {/* Glow accents */}
      <div className="absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue/25 blur-[90px]" />
      <div className="absolute right-1/4 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-light/18 blur-[70px]" />

      {/* Border lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="group relative flex flex-col items-center py-6 text-center">
                {index > 0 && (
                  <div className="absolute inset-y-4 left-0 hidden w-px bg-gradient-to-b from-transparent via-white/12 to-transparent lg:block" />
                )}
                <div className="mb-4 flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[0.7rem] font-bold text-emerald-400">
                  <TrendingUp size={10} /> Growing
                </div>
                <div className="font-[family-name:var(--font-jakarta)] text-5xl font-extrabold tracking-tight text-white transition-transform duration-300 group-hover:scale-105 md:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2.5 text-[0.9rem] font-medium text-white/55">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
