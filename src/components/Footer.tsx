import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Globe,
  MessageCircle,
  Video,
  Share2,
} from "lucide-react";
import Logo from "@/components/Logo";
import {
  FOOTER_COURSE_LINKS,
  FOOTER_QUICK_LINKS,
  SITE_CONFIG,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Ph.D. in Mathematics with 12+ years of IIT-JEE teaching
              experience in Kota. 500+ students mentored, consistent Top 100
              rankers.
            </p>
            <div className="flex gap-3">
              {[
                { href: SITE_CONFIG.social.facebook, Icon: Globe, label: "Facebook" },
                { href: SITE_CONFIG.social.instagram, Icon: MessageCircle, label: "Instagram" },
                { href: SITE_CONFIG.social.youtube, Icon: Video, label: "YouTube" },
                { href: SITE_CONFIG.social.telegram, Icon: Share2, label: "Telegram" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href || "#"}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Courses */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Courses
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_COURSE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+91${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +91 81188 53033
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-accent transition-colors"
                >
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  {SITE_CONFIG.address}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-white/70">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  {SITE_CONFIG.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/50 flex items-center flex-wrap">
            <span>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</span>
            <a 
              href="https://portfolio-ivory-three-53.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-5 hover:opacity-100 hover:text-accent transition-all duration-500 ml-1 sm:ml-2"
            >
              Created by Lakshya Agarwal
            </a>
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
