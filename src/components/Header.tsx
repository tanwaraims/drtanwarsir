"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, BookOpen, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-col">
      {/* Main Nav */}
      <div className="bg-primary border-b border-white/10 shadow-sm relative z-20">
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Logo variant="light" size="md" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors py-2">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-primary-dark rounded-lg shadow-xl border border-white/10 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-accent transition-colors"
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
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:+91${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
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
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Announcement Banner */}
      <div className="bg-primary-light/40 border-b border-white/10 relative overflow-hidden backdrop-blur-md">
        {/* Subtle grid background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
            backgroundSize: "20px 20px" 
          }} 
        />
        <div className="container relative z-10 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <span className="text-white/90 text-[13px] sm:text-sm font-medium">
            New IIT-JEE Maths Batches for 2026-27 are now open for enrollment!
          </span>
          <Link 
            href="/courses" 
            className="bg-accent hover:bg-accent-light text-white text-xs font-bold px-4 py-1.5 rounded transition-colors whitespace-nowrap"
          >
            Explore Now
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary-dark border-b border-white/10 absolute top-[72px] left-0 w-full shadow-xl">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.children && setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 border-l border-white/10 ml-4 mb-2 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-white/60 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4 flex flex-col gap-3">
              <a href={`tel:+91${SITE_CONFIG.phoneRaw}`} className="inline-flex items-center justify-center gap-2 border border-white/20 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link href="/contact" className="btn-accent justify-center w-full py-2.5">
                <BookOpen className="w-4 h-4" /> Book Free Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
