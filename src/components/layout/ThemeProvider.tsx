"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  mounted: boolean;
  toggle: () => void;
}>({ theme: "light", mounted: false, toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start with "light" on both server and client to avoid hydration mismatch.
  // The blocking script in <head> already set .dark on <html> before paint,
  // so there is no visible flash even though React state starts as "light".
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // After mount, sync state with what the blocking script set
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, mounted, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
