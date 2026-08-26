import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner, PageHero } from "@/components/sections/CTA";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/ui/FAQ";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecoratorsE } from "@/components/ui/SectionDecorators";
import { brand, faqItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Azytion — Get in touch for software development, web design, SaaS products, and digital marketing services.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    content: brand.email,
    href: `mailto:${brand.email}`,
    iconBg: "bg-blue/8 border-blue/15 text-blue dark:border-blue-light/15 dark:bg-blue/10 dark:text-blue-light",
    desc: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: `${brand.phone}\n${brand.phone2}`,
    href: `tel:${brand.phone.replace(/\s/g, "")}`,
    iconBg: "bg-emerald-500/8 border-emerald-500/15 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400/15",
    desc: "Mon–Fri, 9 AM – 6 PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: brand.phone,
    href: brand.whatsapp,
    iconBg: "bg-emerald-500/8 border-emerald-500/15 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400/15",
    desc: "Chat with us on WhatsApp",
  },
  {
    icon: MapPin,
    title: "Our Locations",
    content: `${brand.address}\n${brand.address2}`,
    href: undefined,
    iconBg: "bg-amber-500/8 border-amber-500/15 text-amber-600 dark:text-amber-400 dark:border-amber-400/15",
    desc: "Sri Lanka",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon – Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 2:00 PM",
    href: undefined,
    iconBg: "bg-violet-500/8 border-violet-500/15 text-violet-600 dark:text-violet-400 dark:border-violet-400/15",
    desc: "We're here when you need us",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        badge="Response Within 24 Hours"
        title={<>Get In <span className="text-gradient">Touch</span></>}
        description="Have a project in mind or need a demo? We'd love to hear from you. Let's make something great together."
        stats={[
          { value: "24h", label: "Response Time" },
          { value: "Free", label: "Initial Consultation" },
          { value: "Global", label: "Remote Collaboration" },
        ]}
      />

      <section className="relative overflow-hidden py-24">
        {/* Variant E: wave line + grid dots + cross */}
        <DecoratorsE />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">

            {/* Left: info */}
            <FadeIn>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-[0.8125rem] font-semibold text-emerald-600 dark:text-emerald-400">
                <Zap size={13} />
                We respond within 24 hours — guaranteed
              </div>

              <h2 className="mb-3 font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-text-primary">
                Let&apos;s Start a Conversation
              </h2>
              <p className="mb-8 text-[1rem] leading-relaxed text-text-secondary">
                Whether you need a custom software solution, a stunning website, or want to deploy one of our SaaS products — we&apos;re here to help.
              </p>

              {/* Contact method cards */}
              <div className="space-y-3">
                {contactMethods.map((method) => (
                  <div
                    key={method.title}
                    className="flex gap-4 rounded-2xl border border-card-border bg-card-bg p-4 transition-all duration-200 hover:border-blue/20 hover:shadow-sm"
                  >
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${method.iconBg}`}>
                      <method.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-0.5 text-[0.8125rem] font-bold text-text-primary">{method.title}</p>
                      <p className="mb-1 text-[0.72rem] text-text-muted">{method.desc}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block whitespace-pre-line text-[0.875rem] text-text-secondary transition hover:text-blue dark:hover:text-blue-light"
                        >
                          {method.content}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-[0.875rem] text-text-secondary">{method.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why reach out */}
              <div className="mt-6 rounded-2xl border border-card-border bg-bg-subtle p-5">
                <p className="mb-3 text-[0.8rem] font-bold uppercase tracking-wider text-text-muted">Why work with us?</p>
                <div className="space-y-2">
                  {[
                    "Free consultation — no strings attached",
                    "Fixed-price quotes with no hidden fees",
                    "Dedicated project manager from day one",
                    "Post-launch support included",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-[0.875rem] text-text-secondary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue dark:bg-blue-light" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.15}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-subtle py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            centered
            label="FAQ"
            title={<>Common <span className="text-gradient">Questions</span></>}
          />
          <FAQ items={faqItems.contact} />
        </div>
      </section>

      <CTABanner
        title="Prefer a Quick Chat?"
        description="Schedule a free 30-minute consultation call with our team to discuss your project."
        primaryLabel="Schedule a Call"
        primaryHref={brand.whatsapp}
      />
    </>
  );
}
