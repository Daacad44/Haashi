import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { navItems, site } from "@/lib/data";
import { NavIcon } from "./icons";
import { SiteImage } from "./SiteImage";

function NavLinks({
  isActive,
  onNavigate,
  className = "nav-pills",
}: {
  isActive: (href: string) => boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item.label}>
          <Link
            to={item.href}
            className={`nav-pill ${isActive(item.href) ? "active" : ""}`}
            onClick={onNavigate}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            <NavIcon type={item.icon} />
            <span className="label">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const mobileMenu =
    menuOpen &&
    createPortal(
      <div className="mobile-nav-root" role="presentation">
        <button type="button" className="mobile-nav-overlay" aria-label="Close menu" onClick={closeMenu} />
        <nav id="mobile-nav" className="mobile-nav-panel" aria-label="Main navigation">
          <div className="mobile-nav-head">
            <span className="mobile-nav-title">Navigation</span>
            <button type="button" className="nav-close" aria-label="Close menu" onClick={closeMenu}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="mobile-nav-body">
            <NavLinks isActive={isActive} onNavigate={closeMenu} className="nav-pills mobile-nav-pills" />
            <Link
              to={site.contactUrl}
              className="btn-el btn-shadow btn-header-talk mobile-nav-cta"
              onClick={closeMenu}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </nav>
      </div>,
      document.body,
    );

  return (
    <header className="site-header bento-wrap">
      <div className="header-section">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <SiteImage src="/images/logo-header.png" alt="Haashi" width={199} height={54} priority />
        </Link>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-active" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="header-nav-desktop" aria-label="Main navigation">
          <NavLinks isActive={isActive} />
        </nav>

        <Link to={site.contactUrl} className="btn-el btn-shadow btn-header-talk nav-cta-desktop">
          Let&apos;s Talk
        </Link>
      </div>
      {mobileMenu}
    </header>
  );
}
