import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Zap,
  Brain,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";
import {
  MILESTONES,
  TEACHING_PILLARS,
  STATS,
  INSTRUCTOR,
} from "@/lib/data";

/* Icon name → component map for data.ts string-based icons */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb, Zap, Target, GraduationCap, Award, BookOpen, Users, Brain, Heart, CheckCircle,
};

export const metadata: Metadata = {
  title: "About Dr. Tanwar Sir - Best Maths Teacher in Kota",
  description:
    "Meet Dr. Tanwar Sir - the best maths teacher in Kota. Ph.D. in Mathematics, Master's in Psychology, 12+ years IIT-JEE coaching. Produced consistent Top 100 rankers.",
};

/* Data from @/lib/data */

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-20 md:py-28">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            About the Mentor
          </span>
          <h1 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl mx-auto">
            The Mind Behind the{" "}
            <span className="text-accent">3-Layer Logic Framework</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Ph.D. in Mathematics &middot; Master&apos;s in Psychology &middot;
            12+ Years IIT-JEE Coaching in Kota
          </p>
        </div>
      </section>

      {/* ─── BIO ─── */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-72 h-80 md:w-80 md:h-96 bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden relative">
                <Image
                  src={INSTRUCTOR.image}
                  alt="Dr. Tanwar Sir - Ph.D. Mathematics Educator in Kota"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading font-bold text-primary text-2xl md:text-3xl mb-4">
                Dr. Tanwar Sir
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-4">
                Dr. Tanwar Sir is one of Kota&apos;s most respected mathematics
                educators - holding a <strong>Ph.D. in Mathematics</strong>{" "}
                with over a decade of hands-on experience guiding thousands of
                IIT-JEE and NEET aspirants to their dream ranks.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-4">
                His journey began as a student of Kota itself, where he
                witnessed the power of conceptual teaching over rote learning.
                After completing his doctorate, he committed himself fully to
                transforming how Maths is taught - making it accessible
                and genuinely understandable for every student.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Today, Dr. Tanwar Sir runs both offline classes at his Kota
                centre and live online classes, ensuring students across India
                benefit from the same exceptional quality that has produced
                consistent top 100 rankers year after year.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Ph.D. Mathematics",
                  "Master's in Psychology",
                  "12+ Years Experience",
                  "Top 100 Rankers",
                  "500+ Students",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEACHING PHILOSOPHY ─── */}
      <section className="section-padding bg-background-alt">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Teaching Philosophy</span>
            <h2 className="section-title">Three Pillars of Learning</h2>
            <p className="section-subtitle">
              A rare combination of mathematical depth and psychological
              understanding that transforms how students learn.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEACHING_PILLARS.map((pillar) => {
              const Icon = iconMap[pillar.icon] ?? Lightbulb;
              return (
                <div key={pillar.title} className="card text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-primary text-lg mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── JOURNEY TIMELINE ─── */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">The Journey</span>
            <h2 className="section-title">Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-5 items-start">
                <div className="w-16 shrink-0 text-right">
                  <span className="font-heading font-bold text-accent text-lg">
                    {m.year}
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0 relative">
                  {i < MILESTONES.length - 1 && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-border" />
                  )}
                </div>
                <p className="text-foreground text-sm leading-relaxed pb-6">
                  {m.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-bold text-accent text-3xl md:text-4xl">
                  {s.value}
                </p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="section-padding bg-background-alt">
        <div className="container text-center max-w-3xl mx-auto">
          <Brain className="w-12 h-12 text-accent mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-heading font-semibold text-primary leading-relaxed mb-4">
            &ldquo;{INSTRUCTOR.quote}&rdquo;
          </blockquote>
          <p className="text-foreground-muted text-sm font-semibold">
            - Dr. Tanwar Sir
          </p>
        </div>
      </section>

      <CTABanner
        title="Experience the Dr. Tanwar Sir Difference"
        subtitle="Book a free demo class and see why 500+ students trust Dr. Tanwar Sir for their JEE Maths preparation."
        primaryLabel="Book Free Demo"
        primaryHref="/contact"
        secondaryLabel="View Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
