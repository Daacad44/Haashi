"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/data";
import { NavIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header bento-wrap">
      <div className="header-section">
        <Link href="/" className="header-logo" onClick={() => setMenuOpen(false)}>
          <Image src="/images/logo-header.png" alt="Haashi" width={199} height={54} priority />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header-nav ${menuOpen ? "is-open" : ""}`}>
          <ul className="nav-pills">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`nav-pill ${isActive(item.href) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <NavIcon type={item.icon} />
                  <span className="label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={site.contactUrl}
            className="btn-el btn-shadow btn-header-talk nav-cta-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </nav>

        <Link href={site.contactUrl} className="btn-el btn-shadow btn-header-talk nav-cta-desktop">
          Let&apos;s Talk
        </Link>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="nav-overlay"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
