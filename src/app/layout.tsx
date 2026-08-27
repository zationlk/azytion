import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { BackToTop } from "@/components/ui/BackToTop";
import { ToastContainer } from "@/components/ui/Toast";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { brand } from "@/lib/data";
import "./globals.css";

// ─── Self-hosted fonts (avoids Google Fonts network dependency) ───────────────

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jakarta = localFont({
  src: [
    // latin-ext
    {
      path: "../../public/fonts/jakarta-latin-ext.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/jakarta-latin-ext.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/jakarta-latin-ext.woff2",
      weight: "800",
      style: "normal",
    },
    // latin (primary subset)
    {
      path: "../../public/fonts/jakarta-latin.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/jakarta-latin.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/jakarta-latin.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} - ${brand.tagline} | Digital Solutions Company`,
    template: `%s - ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "Azytion",
    "digital solutions",
    "software development",
    "SaaS",
    "ERP",
    "CRM",
    "POS",
    "web design",
    "Sri Lanka",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brand.name,
    title: `${brand.name} - ${brand.tagline}`,
    description: brand.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} - ${brand.tagline}`,
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Blocking theme script (runs before paint, eliminates flash) ──────────────
const themeScript = `(function(){try{var s=localStorage.getItem('theme');if(s==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

// ─── Root layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased bg-bg text-text-primary">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppFloat />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
