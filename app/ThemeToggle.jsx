"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  return (
    <button
      aria-label="Toggle dark mode"
      className={`relative flex h-10 w-20 items-center justify-between rounded-full border px-2 transition-all duration-300 ${
        dark ? "border-slate-600 bg-slate-800" : "border-zinc-300 bg-white"
      }`}
      onClick={() => setDark((d) => !d)}
      type="button"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-lg transition-all duration-300 ${
          dark
            ? "scale-90 bg-slate-700 text-slate-200"
            : "scale-110 bg-yellow-200 text-amber-600 shadow-sm"
        }`}
      >
        {dark ? "☾" : "☀"}
      </span>

      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-lg transition-all duration-300 ${
          dark
            ? "scale-110 bg-slate-900 text-yellow-300 shadow-sm"
            : "scale-90 bg-zinc-100 text-zinc-500"
        }`}
      >
        {dark ? "☀" : "☾"}
      </span>
    </button>
  );
}
