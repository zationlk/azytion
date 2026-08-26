import Link from "next/link";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { brand } from "@/lib/data";

/* ─── Social icons (SVG, brand-accurate) ──────────────────────────── */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/azytion",                                   label: "Instagram", icon: InstagramIcon },
  { href: "https://web.facebook.com/profile.php?id=61591803982187",              label: "Facebook",  icon: FacebookIcon  },
  { href: "https://www.tiktok.com/@azytion",                                     label: "TikTok",    icon: TikTokIcon    },
  { href: "https://wa.me/94723344070",                                           label: "WhatsApp",  icon: WhatsAppIcon  },
];

const footerLinks = {
  Company: [
    { href: "/about",     label: "About Us",  badge: null     },
    { href: "/portfolio", label: "Portfolio", badge: null     },
    { href: "/contact",   label: "Contact",   badge: null     },
    { href: "#",          label: "Careers",   badge: "hiring" },
  ],
  Services: [
    { href: "/services", label: "Software Dev",      badge: null },
    { href: "/services", label: "Website Design",    badge: null },
    { href: "/services", label: "Digital Marketing", badge: null },
    { href: "/services", label: "Graphic Design",    badge: null },
  ],
  Products: [
    { href: "/products", label: "POS System", badge: null },
    { href: "/products", label: "ERP System", badge: null },
    { href: "/products", label: "CRM System", badge: null },
    { href: "/products", label: "LMS System", badge: null },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-subtle">
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />

      {/* Newsletter strip */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue/20 bg-blue/6 text-blue dark:border-blue-light/20 dark:bg-blue/8 dark:text-blue-light">
              <Mail size={19} />
            </div>
            <div>
              <p className="font-[family-name:var(--font-jakarta)] text-[0.9375rem] font-bold text-text-primary">
                Stay in the Loop
              </p>
              <p className="text-[0.8125rem] text-text-muted">
                Product updates, tips &amp; industry insights — no spam.
              </p>
            </div>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-14 lg:px-8">
        <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <Logo className="mb-5" />
            <p className="mb-5 max-w-[260px] text-[0.9rem] leading-relaxed text-text-muted">
              {brand.tagline} for digital solutions. We build software, design experiences, and power modern businesses with SaaS.
            </p>

            {/* Contact info */}
            <div className="mb-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-[0.85rem] text-text-muted">
                <Mail size={13} className="shrink-0" />
                <a href={`mailto:${brand.email}`} className="transition hover:text-text-primary">{brand.email}</a>
              </div>
              <div className="flex items-center gap-2.5 text-[0.85rem] text-text-muted">
                <Phone size={13} className="shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="transition hover:text-text-primary">{brand.phone}</a>
                  <a href={`tel:${brand.phone2.replace(/\s/g, "")}`} className="transition hover:text-text-primary">{brand.phone2}</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-[0.85rem] text-text-muted">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span>{brand.address}</span>
                  <span>{brand.address2}</span>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-text-muted transition-all hover:border-blue/35 hover:bg-blue/6 hover:text-blue dark:hover:border-blue-light/25 dark:hover:bg-blue/8 dark:hover:text-blue-light"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-5 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-text-primary">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-[0.9rem] text-text-muted transition-colors hover:text-text-primary"
                    >
                      <span className="h-px w-3 shrink-0 rounded-full bg-border transition-all duration-200 group-hover:w-4 group-hover:bg-blue dark:group-hover:bg-blue-light" />
                      {link.label}
                      {link.badge === "hiring" && (
                        <span className="ml-1 inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-600 dark:text-emerald-400">
                          <Sparkles size={8} />
                          Hiring
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-[0.82rem] text-text-muted md:flex-row">
          <span>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition hover:text-text-primary">Privacy Policy</Link>
            <span className="h-3 w-px bg-border" />
            <Link href="/terms" className="transition hover:text-text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
