import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/CTA";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${brand.name} — how we collect, use, and protect your information.`,
};

const sections = [
  {
    id: "collect",
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a demo, or subscribe to our newsletter. This may include your name, email address, phone number, company name, and the nature of your inquiry.\n\nWe also collect certain technical information automatically when you visit our website, including your IP address, browser type, referring URLs, and pages visited. This helps us understand how visitors use our site and improve our services.`,
  },
  {
    id: "use",
    title: "How We Use Your Information",
    content: `We use the information we collect to:\n\n• Respond to your inquiries and provide the services you request\n• Send you updates about our products, services, and company news (with your consent)\n• Improve our website and tailor content to your interests\n• Comply with legal obligations and protect against fraudulent or illegal activity\n• Communicate with you about your account or transactions with us`,
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:\n\n• With trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements\n• When required by law, regulation, or legal process\n• To protect the rights, property, or safety of ${brand.name}, our clients, or others\n• In connection with a merger, acquisition, or sale of all or a portion of our assets`,
  },
  {
    id: "retention",
    title: "Data Retention",
    content: `We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. When information is no longer needed, we will securely delete or anonymize it.`,
  },
  {
    id: "rights",
    title: "Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:\n\n• The right to access the personal information we hold about you\n• The right to request correction of inaccurate information\n• The right to request deletion of your personal information\n• The right to object to or restrict certain processing\n• The right to data portability\n\nTo exercise any of these rights, please contact us at ${brand.email}.`,
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. You can control the use of cookies through your browser settings. Note that disabling cookies may affect the functionality of certain parts of our website.`,
  },
  {
    id: "security",
    title: "Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:\n\n${brand.name}\n${brand.address}\nEmail: ${brand.email}\nPhone: ${brand.phone}`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        description={`Last updated: January 1, ${new Date().getFullYear()}. Learn how ${brand.name} collects, uses, and protects your information.`}
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
              <div className="rounded-2xl border border-blue/15 bg-blue/4 p-6 dark:bg-blue/6">
                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                  At <strong className="font-semibold text-text-primary">{brand.name}</strong>, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our services.
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
                  Questions about this policy?
                </h3>
                <p className="mb-4 text-[0.9375rem] text-text-secondary">
                  We&apos;re happy to help clarify anything. Reach out to our team.
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
