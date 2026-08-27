import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/CTA";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${brand.name} - the rules and guidelines governing use of our services.`,
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing or using the services provided by ${brand.name} ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.\n\nThese Terms apply to all visitors, users, and others who access or use our website, products, or services.`,
  },
  {
    id: "services",
    title: "Services",
    content: `${brand.name} provides digital services including, but not limited to, custom software development, website design and development, graphic design, video editing, digital marketing, and ready-to-deploy SaaS products.\n\nWe reserve the right to modify, suspend, or discontinue any service at any time with or without notice.`,
  },
  {
    id: "obligations",
    title: "Client Obligations",
    content: `As a client or user of our services, you agree to:\n\n• Provide accurate, current, and complete information as required for service delivery\n• Maintain the security of any account credentials provided to you\n• Promptly notify us of any unauthorized use of your account\n• Not use our services for any unlawful purpose or in violation of any regulations\n• Not attempt to gain unauthorized access to any part of our systems or services\n• Respect all intellectual property rights associated with our services`,
  },
  {
    id: "payment",
    title: "Payment Terms",
    content: `Payment terms are outlined in individual project agreements or subscription plans. Unless otherwise stated:\n\n• Invoices are due within 30 days of issue\n• Late payments may incur interest at a rate of 1.5% per month\n• We reserve the right to suspend services for accounts with outstanding balances\n• Refunds are handled on a case-by-case basis as outlined in project agreements\n• SaaS subscription fees are billed monthly or annually as selected at time of purchase`,
  },
  {
    id: "ip",
    title: "Intellectual Property",
    content: `Upon full payment, clients receive ownership of custom deliverables created specifically for them under a project agreement, unless otherwise specified.\n\n${brand.name} retains ownership of all underlying frameworks, tools, libraries, and pre-existing intellectual property. Our SaaS products are licensed, not sold - clients receive a limited, non-exclusive license to use the software during their subscription period.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, ${brand.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.\n\nOur total liability for any claim arising from these Terms or our services shall not exceed the amount paid by you to us in the three (3) months preceding the claim.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `Either party may terminate a service agreement with 30 days written notice. We may terminate immediately if you breach these Terms or engage in fraudulent or illegal activity.\n\nUpon termination, your right to access our services ceases.`,
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: `We reserve the right to update these Terms at any time. We will provide notice of significant changes via email or a prominent notice on our website. Your continued use of our services after such notice constitutes acceptance of the updated Terms.`,
  },
  {
    id: "contact",
    title: "Contact",
    content: `For questions about these Terms of Service, please contact us:\n\n${brand.name}\n${brand.address}\nEmail: ${brand.email}\nPhone: ${brand.phone}`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Terms of Service"
        title="Terms of Service"
        description={`Last updated: January 1, ${new Date().getFullYear()}. Please read these terms carefully before using our services.`}
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

            {/* Sticky sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-widest text-text-muted">
                  On This Page
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block rounded-lg px-3 py-2 text-[0.875rem] text-text-muted transition-all hover:bg-bg-subtle hover:text-text-primary"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0 space-y-12">
              {/* Intro box */}
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/6 p-6">
                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                  <strong className="font-semibold text-text-primary">Important:</strong> Please read these terms carefully before using any services from{" "}
                  <strong className="font-semibold text-text-primary">{brand.name}</strong>. By using our services, you agree to be bound by these terms.
                </p>
              </div>

              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="mb-4 font-[family-name:var(--font-jakarta)] text-2xl font-bold text-text-primary">
                    {section.title}
                  </h2>
                  <p className="whitespace-pre-line leading-relaxed text-text-secondary">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Contact CTA */}
              <div className="rounded-2xl border border-card-border bg-card-bg p-6">
                <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-lg font-bold text-text-primary">
                  Questions about these terms?
                </h3>
                <p className="mb-4 text-[0.9375rem] text-text-secondary">
                  Our team is happy to clarify anything before you begin working with us.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-blue transition hover:underline dark:text-blue-light"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
