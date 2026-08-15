"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as
      | "dark"
      | "light"
      | null;
    if (current) setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      className="bp-label flex items-center gap-2 rounded-full border border-ink-line px-3 py-1.5 transition-colors hover:border-brass dark:border-ink-line"
      data-cursor-hover
    >
      <span
        className={`h-1.5 w-1.5 rounded-full transition-colors ${
          theme === "dark" ? "bg-draft" : "bg-brass"
        }`}
        aria-hidden="true"
      />
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
