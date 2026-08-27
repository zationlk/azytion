"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Boxes, Code2, HelpCircle, Layers, Monitor, Search, Sparkles, X } from "lucide-react";
import { faqItems, navLinks, products, services } from "@/lib/data";

interface SearchResultItem {
  id: string;
  title: string;
  category: "Page" | "Service" | "Product" | "FAQ";
  description: string;
  href: string;
  icon?: any;
}

export function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultItem[]>([]);

  // Build static searchable index
  const searchIndex: SearchResultItem[] = [
    ...navLinks.map((item) => ({
      id: `nav-${item.href}`,
      title: item.label,
      category: "Page" as const,
      description: `Navigate to the ${item.label} page of Azytion.`,
      href: item.href,
      icon: Sparkles,
    })),
    ...services.map((s) => ({
      id: `service-${s.id}`,
      title: s.title,
      category: "Service" as const,
      description: s.description,
      href: `/services#${s.id}`,
      icon: Code2,
    })),
    ...products.map((p) => ({
      id: `product-${p.id}`,
      title: p.title,
      category: "Product" as const,
      description: p.description,
      href: `/products#${p.id}`,
      icon: Boxes,
    })),
    ...faqItems.products.map((f, i) => ({
      id: `faq-p-${i}`,
      title: f.question,
      category: "FAQ" as const,
      description: f.answer,
      href: "/products#faq",
      icon: HelpCircle,
    })),
    ...faqItems.contact.map((f, i) => ({
      id: `faq-c-${i}`,
      title: f.question,
      category: "FAQ" as const,
      description: f.answer,
      href: "/contact#faq",
      icon: HelpCircle,
    })),
  ];

  useEffect(() => {
    if (!query.trim()) {
      setResults(searchIndex.slice(0, 6));
    } else {
      const q = query.toLowerCase();
      const filtered = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
      setResults(filtered);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-card-border bg-card-bg shadow-2xl transition-all dark:border-white/10">
        {/* Search input bar */}
        <div className="relative flex items-center border-b border-border px-5 py-4 dark:border-white/10">
          <Search size={20} className="shrink-0 text-text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, products, FAQs or pages... (Ctrl+K)"
            autoFocus
            className="w-full bg-transparent px-3 text-base text-text-primary placeholder:text-text-muted focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mr-2 text-xs text-text-muted hover:text-text-primary"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="flex h-7 w-7 items-center justify-center rounded-lg text-text-muted transition hover:bg-bg-subtle hover:text-text-primary"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {results.length > 0 ? (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-text-muted">
                {query ? "Search Results" : "Quick Links"}
              </p>
              {results.map((item) => {
                const IconComponent = item.icon || Sparkles;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.href)}
                    className="group flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left transition hover:bg-blue/8 dark:hover:bg-blue/12"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-subtle text-blue group-hover:border-blue/30 dark:border-white/10 dark:text-blue-light">
                        <IconComponent size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-[family-name:var(--font-jakarta)] text-sm font-bold text-text-primary group-hover:text-blue dark:group-hover:text-blue-light truncate">
                            {item.title}
                          </span>
                          <span className="rounded-full border border-border bg-bg-subtle px-2 py-0.5 text-[0.65rem] font-semibold text-text-muted">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-[0.78rem] text-text-muted truncate">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={15} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100 text-blue dark:text-blue-light" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-text-muted">
                No matching results found for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-xs text-text-muted/70">
                Try searching for POS, ERP, Software, or Web Design.
              </p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-border bg-bg-subtle px-5 py-3 text-[0.72rem] text-text-muted dark:border-white/10">
          <span>Navigate with click or tap</span>
          <span className="font-mono bg-card-bg px-2 py-0.5 rounded border border-border">ESC to close</span>
        </div>
      </div>
    </div>
  );
}
