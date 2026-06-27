import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Video,
  Target,
  Layers,
} from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";
import { COURSES, MODES, SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses - Best Maths Teacher for JEE, NEET & Foundation",
  description:
    "Explore IIT-JEE Maths batches by the best maths teacher, Dr. Tanwar Sir. Live + Offline classes in Kota.",
};

/* Icon name → component map for MODES */
const modeIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Video,
  GraduationCap,
  Layers,
};

export default function CoursesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-20 md:py-28">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Our Programs
          </span>
          <h1 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl mx-auto">
            Choose Your{" "}
            <span className="text-accent">Learning Path</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Comprehensive batches for every stage - from foundation
            to advanced JEE preparation, all powered by Dr. Tanwar Sir&apos;s
            3-Layer Logic Framework&trade;.
          </p>
        </div>
      </section>

      {/* ─── COURSE SECTIONS ─── */}
      {COURSES.filter((c) => c.id !== "one-to-one").map((course, idx) => (
        <section
          key={course.id}
          id={course.id}
          className={`section-padding ${
            idx % 2 === 0 ? "bg-white" : "bg-background-alt"
          }`}
        >
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      {course.badge}
                    </span>
                    <h2 className="font-heading font-bold text-primary text-xl md:text-2xl">
                      {course.name}
                    </h2>
                    <p className="text-foreground-muted text-sm">
                      {course.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {course.targetClass}
                  </span>
                  <span className="bg-accent/10 text-accent-dark text-xs font-semibold px-3 py-1.5 rounded-full">
                    {course.examTarget}
                  </span>
                  <span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    Max {course.batchSize} Students
                  </span>
                </div>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {course.description}
                </p>
                <ul className="space-y-3">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-success shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Pricing Cards */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">
                  Pricing &amp; Schedule
                </h3>
                {/* Online */}
                <div className="card card-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-heading font-semibold text-primary text-sm">
                        Online Live
                      </p>
                      <p className="text-foreground-muted text-xs">
                        {course.schedule.online}
                      </p>
                    </div>
                  </div>
                  <a
                    href={course.whatsappLinks.online}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    Enroll Online <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                {/* Offline */}
                <div className="card card-sm border-accent ring-1 ring-accent/20 relative">
                  {course.popular && (
                    <span className="absolute -top-2.5 right-4 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      POPULAR
                    </span>
                  )}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-heading font-semibold text-primary text-sm">
                        Offline Classroom
                      </p>
                      <p className="text-foreground-muted text-xs">
                        {course.schedule.offline}
                      </p>
                    </div>
                  </div>
                  <a
                    href={course.whatsappLinks.offline}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    Enroll Offline <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── 1-ON-1 MENTORSHIP ─── */}
      {(() => {
        const mentorship = COURSES.find((c) => c.id === "one-to-one");
        if (!mentorship) return null;
        return (
          <section id="one-to-one" className="section-padding bg-primary text-white">
            <div className="container">
              <div className="text-center mb-12">
                <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  {mentorship.badge}
                </span>
                <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
                  {mentorship.name}
                </h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto">
                  {mentorship.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {mentorship.features.map((f) => (
                  <div
                    key={f}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                <a
                  href={mentorship.whatsappLinks.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  Book 1-on-1 Session <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ─── MODES COMPARISON ─── */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Flexible Learning</span>
            <h2 className="section-title">Choose Your Mode</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {MODES.map((mode) => {
              const Icon = modeIconMap[mode.icon] ?? GraduationCap;
              return (
                <div
                  key={mode.title}
                  className={`card text-center relative ${
                    mode.popular ? "border-accent ring-2 ring-accent/20" : ""
                  }`}
                >
                  {mode.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  )}
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-primary text-lg mb-2">
                    {mode.title}
                  </h3>

                  <ul className="space-y-2 mb-6 text-left">
                    {mode.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-success shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary w-full btn-sm">
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Batch is Right for You?"
        subtitle="Book a free demo class and let Dr. Tanwar Sir guide you to the perfect learning path for your goals."
        primaryLabel="Book Free Demo"
        primaryHref="/contact"
        secondaryLabel="Call Us"
        secondaryHref={`tel:+91${SITE_CONFIG.phoneRaw}`}
      />
    </>
  );
}
