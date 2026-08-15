"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="flex flex-col items-center gap-4 border-t border-ink-line px-6 py-10 md:flex-row md:justify-between md:px-12">
      <p className="bp-label">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="bp-label" suppressHydrationWarning>
        {time ? `${time} local` : ""}
      </p>
      <a href="#top" className="bp-label hover:text-brass" data-cursor-hover>
        Back to top ↑
      </a>
    </footer>
  );
}
