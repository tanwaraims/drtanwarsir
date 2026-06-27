import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
}

export default function CTABanner({
  title,
  subtitle,
  primaryLabel = "Book Free Demo",
  primaryHref = "/contact",
  secondaryLabel = "View Courses",
  secondaryHref = "/courses",
  variant = "dark",
}: CTABannerProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-padding ${
        isDark ? "bg-primary text-white" : "bg-background-alt"
      }`}
    >
      <div className="container text-center">
        <h2
          className={`font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-8 max-w-xl mx-auto ${
            isDark ? "text-white/70" : "text-foreground-muted"
          }`}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={`btn-accent ${
              isDark ? "" : ""
            }`}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={secondaryHref}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-sm transition-all ${
              isDark
                ? "border-2 border-white/30 text-white hover:bg-white/10"
                : "btn-secondary"
            }`}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
