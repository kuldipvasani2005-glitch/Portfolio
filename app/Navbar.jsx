
"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

const tabs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="w-full max-w-6xl flex items-center justify-between px-6 py-2 rounded-t-2xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tight flex items-center gap-2 select-none">
          <span className="text-[var(--primary)]">&lt;Code</span>
          <span className="text-zinc-900 dark:text-white">Crafted</span>
          <span className="text-[var(--primary)]">/&gt;</span>
        </div>
        <ul className="flex gap-8 items-center">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <a
                href={tab.href}
                className={`text-base font-semibold px-2 py-1 rounded transition-colors duration-200
                  ${pathname === tab.href
                    ? "text-[var(--primary)]"
                    : "text-zinc-900 dark:text-white hover:text-[var(--primary)] hover:bg-zinc-100 dark:hover:bg-zinc-800"}
                `}
              >
                {tab.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              className="ml-4 px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-lg hover:from-[var(--button-hover)] hover:to-[var(--secondary)] transition-all duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
