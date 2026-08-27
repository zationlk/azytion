/**
 * Diverse animated background decorators for sections.
 * Each variant uses different shapes/animations to avoid repetition.
 */

/** Variant A - spinning 8-point star + dashed circle (original) */
export function DecoratorsA({ color = "rgba(1,48,162," }: { color?: string }) {
  return (
    <>
      <div className="pointer-events-none absolute -right-8 -top-8 hidden h-32 w-32 animate-spin-slow opacity-[0.07] dark:opacity-[0.12] lg:block">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 0L110 90L200 100L110 110L100 200L90 110L0 100L90 90Z" fill={`${color}0.9)`}/>
        </svg>
      </div>
      <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 animate-spin-slow opacity-[0.06] dark:opacity-[0.1] lg:block"
        style={{ animationDirection: "reverse", animationDuration: "18s" }}>
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke={`${color}0.8)`} strokeWidth="2" strokeDasharray="8 5"/>
        </svg>
      </div>
    </>
  );
}

/** Variant B - floating diamonds + cross shape */
export function DecoratorsB() {
  return (
    <>
      {/* Large diamond top-right */}
      <div className="pointer-events-none absolute right-8 top-8 hidden h-20 w-20 animate-diagonal opacity-[0.06] dark:opacity-[0.1] lg:block">
        <svg viewBox="0 0 80 80" fill="none">
          <rect x="10" y="10" width="60" height="60" transform="rotate(45 40 40)" stroke="rgba(1,48,162,0.9)" strokeWidth="2"/>
        </svg>
      </div>
      {/* Small diamond left */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden h-10 w-10 animate-bob opacity-[0.07] dark:opacity-[0.11] xl:block">
        <svg viewBox="0 0 32 32" fill="rgba(1,48,162,0.8)">
          <path d="M16 0L19 13L32 16L19 19L16 32L13 19L0 16L13 13Z"/>
        </svg>
      </div>
      {/* Cross bottom-right */}
      <div className="pointer-events-none absolute bottom-8 right-12 hidden h-12 w-12 animate-spin-slow opacity-[0.05] dark:opacity-[0.09] xl:block"
        style={{ animationDuration: "25s" }}>
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M22 0h4v22h22v4H26v22h-4V26H0v-4h22V0z" fill="rgba(1,48,162,0.8)"/>
        </svg>
      </div>
    </>
  );
}

/** Variant C - hexagon grid dots + triangle */
export function DecoratorsC() {
  return (
    <>
      {/* Triangle top-right */}
      <div className="pointer-events-none absolute right-6 top-10 hidden h-16 w-16 animate-float-slow opacity-[0.06] dark:opacity-[0.1] lg:block">
        <svg viewBox="0 0 64 64" fill="none">
          <polygon points="32,4 60,56 4,56" stroke="rgba(1,48,162,0.9)" strokeWidth="2"/>
        </svg>
      </div>
      {/* Dots cluster bottom-left */}
      <div className="pointer-events-none absolute bottom-10 left-8 hidden animate-scale-pulse opacity-[0.07] dark:opacity-[0.12] xl:block">
        <svg viewBox="0 0 60 40" fill="rgba(1,48,162,0.8)" width="60" height="40">
          {[0,12,24,36,48].map(x => [0,16,32].map(y => (
            <circle key={`${x}-${y}`} cx={x+6} cy={y+6} r="3"/>
          )))}
        </svg>
      </div>
      {/* Small spinning hexagon right */}
      <div className="pointer-events-none absolute right-10 bottom-1/3 hidden h-14 w-14 animate-spin-medium opacity-[0.05] dark:opacity-[0.09] xl:block"
        style={{ animationDuration: "14s" }}>
        <svg viewBox="0 0 56 56" fill="none">
          <polygon points="28,2 52,15 52,41 28,54 4,41 4,15" stroke="rgba(1,48,162,0.8)" strokeWidth="2"/>
        </svg>
      </div>
    </>
  );
}

/** Variant D - concentric rings + floating square */
export function DecoratorsD() {
  return (
    <>
      {/* Concentric rings top-right */}
      <div className="pointer-events-none absolute -right-12 -top-12 hidden h-48 w-48 opacity-[0.05] dark:opacity-[0.09] lg:block">
        <svg viewBox="0 0 200 200" fill="none" className="animate-scale-pulse">
          <circle cx="100" cy="100" r="90" stroke="rgba(1,48,162,0.8)" strokeWidth="1.5" strokeDasharray="8 6"/>
          <circle cx="100" cy="100" r="65" stroke="rgba(1,48,162,0.6)" strokeWidth="1.5" strokeDasharray="6 5"/>
          <circle cx="100" cy="100" r="40" stroke="rgba(1,48,162,0.4)" strokeWidth="1.5" strokeDasharray="4 4"/>
        </svg>
      </div>
      {/* Rotated square bottom-left */}
      <div className="pointer-events-none absolute bottom-8 left-6 hidden h-12 w-12 animate-spin-slow opacity-[0.06] dark:opacity-[0.1] lg:block"
        style={{ animationDuration: "22s", animationDirection: "reverse" }}>
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="6" y="6" width="36" height="36" transform="rotate(15 24 24)" stroke="rgba(1,48,162,0.8)" strokeWidth="2"/>
        </svg>
      </div>
    </>
  );
}

/** Variant E - wave line + scattered dots */
export function DecoratorsE() {
  return (
    <>
      {/* Wave path right */}
      <div className="pointer-events-none absolute right-0 top-1/4 hidden w-24 opacity-[0.06] dark:opacity-[0.1] lg:block animate-float-x">
        <svg viewBox="0 0 40 120" fill="none" width="40" height="120">
          <path d="M20 0 Q35 20 20 40 Q5 60 20 80 Q35 100 20 120" stroke="rgba(1,48,162,0.8)" strokeWidth="2"/>
        </svg>
      </div>
      {/* Grid dots pattern bottom-left */}
      <div className="pointer-events-none absolute bottom-12 left-4 hidden animate-bob opacity-[0.06] dark:opacity-[0.1] xl:block">
        <svg viewBox="0 0 48 48" fill="rgba(1,48,162,0.7)" width="48" height="48">
          {[0,1,2,3].map(row => [0,1,2,3].map(col => (
            <circle key={`${row}-${col}`} cx={col*12+6} cy={row*12+6} r="2.5"/>
          )))}
        </svg>
      </div>
      {/* Small cross top-left */}
      <div className="pointer-events-none absolute left-8 top-16 hidden h-8 w-8 animate-spin-slow opacity-[0.05] dark:opacity-[0.09] xl:block"
        style={{ animationDuration: "30s" }}>
        <svg viewBox="0 0 32 32" fill="rgba(1,48,162,0.8)">
          <path d="M14 0h4v14h14v4H18v14h-4V18H0v-4h14V0z"/>
        </svg>
      </div>
    </>
  );
}

/** Variant F - plus signs + rounded square */
export function DecoratorsF() {
  return (
    <>
      {/* Scattered plus signs */}
      <div className="pointer-events-none absolute right-10 top-12 hidden animate-scale-pulse opacity-[0.07] dark:opacity-[0.12] lg:block">
        <svg viewBox="0 0 80 80" fill="rgba(1,48,162,0.8)" width="80" height="80">
          {[[10,10],[60,10],[10,60],[60,60],[35,35]].map(([x,y]) => (
            <g key={`${x}-${y}`}>
              <rect x={x-1} y={y-5} width="2" height="10"/>
              <rect x={x-5} y={y-1} width="10" height="2"/>
            </g>
          ))}
        </svg>
      </div>
      {/* Rounded square bottom-right */}
      <div className="pointer-events-none absolute bottom-10 right-8 hidden h-16 w-16 animate-spin-slow opacity-[0.05] dark:opacity-[0.09] lg:block"
        style={{ animationDuration: "16s", animationDirection: "reverse" }}>
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="6" y="6" width="52" height="52" rx="12" stroke="rgba(1,48,162,0.8)" strokeWidth="2"/>
        </svg>
      </div>
      {/* Diamond chain left */}
      <div className="pointer-events-none absolute left-4 top-1/3 hidden animate-float-slow opacity-[0.05] dark:opacity-[0.09] xl:block">
        <svg viewBox="0 0 20 80" fill="none" width="20" height="80">
          {[10,30,50,70].map(y => (
            <rect key={y} x="4" y={y-6} width="12" height="12" transform={`rotate(45 10 ${y})`} stroke="rgba(1,48,162,0.7)" strokeWidth="1.5"/>
          ))}
        </svg>
      </div>
    </>
  );
}
