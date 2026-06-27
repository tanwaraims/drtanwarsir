"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, BookOpen, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Logo variant="dark" size="md" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
              >
                <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-background-alt hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:+91${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>81188 53033</span>
          </a>
          <Link href="/contact" className="btn-accent btn-sm">
            <BookOpen className="w-4 h-4" />
            Book Free Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.children && setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-background-alt rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground-muted hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 px-4 flex flex-col gap-2">
              <a href={`tel:+91${SITE_CONFIG.phoneRaw}`} className="btn-secondary !text-sm justify-center">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link href="/contact" className="btn-accent !text-sm justify-center">
                <BookOpen className="w-4 h-4" /> Book Free Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
