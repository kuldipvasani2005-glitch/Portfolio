
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

const tabs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="navbar-inner w-full max-w-6xl px-6 py-2 rounded-t-2xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tight flex items-center gap-2 select-none">
          <span className="text-[var(--primary)]">&lt;Code</span>
          <span className="text-zinc-900 dark:text-white">Crafted</span>
          <span className="text-[var(--primary)]">/&gt;</span>
        </div>
        <button
          type="button"
          className="navbar-menu-button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul id="site-navigation" className={`navbar-menu${menuOpen ? " is-open" : ""}`}>
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link
                href={tab.href}
                onClick={closeMenu}
                className={`text-base font-semibold px-2 py-1 rounded transition-colors duration-200
                  ${pathname === tab.href
                    ? "text-[var(--primary)]"
                    : "text-zinc-900 dark:text-white hover:text-[var(--primary)] hover:bg-zinc-100 dark:hover:bg-zinc-800"}
                `}
              >
                {tab.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="ml-4 px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-lg hover:from-[var(--button-hover)] hover:to-[var(--secondary)] transition-all duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
