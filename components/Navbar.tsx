"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement;

    const menuEl = menuRef.current;
    if (menuEl) {
      const firstFocusable = menuEl.querySelector<HTMLElement>("a, button");
      firstFocusable?.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusables = menuRef.current.querySelectorAll<HTMLElement>("a, button");
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Restore focus when menu closes
  useEffect(() => {
    if (!mobileOpen && previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [mobileOpen]);

  const navLinks = [
    { href: "#about", label: "Our Story" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#chef", label: "The Chef" },
    { href: "#testimonials", label: "Reviews" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
    >
      <div className="bg-bg/80 nav-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group" aria-label="Golden Dragon Home">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/30 transition-shadow duration-500">
                <span className="text-white font-serif text-xl font-bold">龍</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-xl font-semibold tracking-tight text-text">
                  Golden Dragon
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-text-muted hover:text-text transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservations"
                data-magnetic="0.15"
                className="ml-2 px-7 py-2.5 bg-accent text-white text-[13px] font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 tracking-wide"
              >
                Reserve a Table
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div ref={menuRef} className="md:hidden bg-bg/95 nav-blur border-t border-border">
          <div className="px-6 py-8 space-y-5">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-lg text-text-muted hover:text-text transition-colors"
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservations"
              className="block w-full px-6 py-3 bg-accent text-white text-center font-semibold rounded-full hover:bg-accent-hover transition-colors mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
