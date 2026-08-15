import type { Config } from "tailwindcss";

// Design tokens — "Technical Blueprint" direction.
// A deliberate departure from the two most common AI-portfolio defaults
// (cream+terracotta, or near-black+acid-green): an ink-navy base with a
// brass/amber interactive accent and a cyan "drafting line" accent used
// only for the structural grid — referencing engineering blueprints,
// not generic "dark mode agency site" styling.
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Every color below resolves through the CSS custom properties in
      // globals.css, which flip when `[data-theme]` changes. That makes
      // e.g. `bg-ink` or `text-brass` automatically theme-aware — a
      // single utility class works in both dark and light mode instead
      // of needing dark:-prefixed variants sprinkled everywhere.
      colors: {
        ink: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          surface: "rgb(var(--surface) / <alpha-value>)",
          line: "rgb(var(--line) / <alpha-value>)",
        },
        ink_text: {
          DEFAULT: "rgb(var(--text) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
        },
        brass: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
        },
        draft: {
          DEFAULT: "rgb(var(--draft) / <alpha-value>)", // structural/annotation accent, used sparingly
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.75rem, 9vw, 8rem)",
        "fluid-h2": "clamp(2rem, 5vw, 4rem)",
        "fluid-h3": "clamp(1.25rem, 2.5vw, 2rem)",
      },
      transitionTimingFunction: {
        blueprint: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
