import {
  GraduationCap,
  Trophy,
  BookOpen,
  MessageCircle,
  BarChart3,
  Monitor,
  Brain,
  Users,
  Target,
  Layers,
  Lightbulb,
  Zap,
  ChevronDown,
  Star,
  ArrowRight,
  Phone,
  Mail,
  PlayCircle,
  Clock,
  MapPin,
  CheckCircle,
  Video,
  FileText,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import DemoForm from "@/components/DemoForm";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import {
  STATS,
  WHY_CHOOSE,
  FRAMEWORK_LAYERS,
  COURSES,
  TESTIMONIALS,
  FAQS,
  CONTACT_HIGHLIGHTS,
  INSTRUCTOR,
  SITE_CONFIG,
  TEACHING_PILLARS,
} from "@/lib/data";

/* Icon name → component map for data.ts string-based icons */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, Trophy, BookOpen, MessageCircle, BarChart2: BarChart3,
  Monitor, Brain, Users, Lightbulb, Zap, Target, Video, FileText, Award,
};

/* Framework layer icons (data.ts doesn't include icons) */
const frameworkIcons = [Lightbulb, Target, Zap];

export const metadata: Metadata = {
  title: "Dr. Tanwar Sir Maths - Best Maths Teacher & IIT-JEE Coach in Kota",
  description:
    "Learn IIT-JEE Maths from the best maths teacher, Dr. Tanwar Sir (Ph.D. Mathematics) - Kota's most trusted educator. Live + Offline classes, 500+ students, Top 100 rankers. Book a free demo!",
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IIT-JEE Mathematics by Dr. Tanwar Sir",
  description:
    "Complete JEE Maths preparation with Ph.D. qualified educator. Live + Offline classes in Kota.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Dr. Tanwar Sir Maths",
    url: "https://drtanwarsirmaths.com",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      name: "Online Live Batch",
    },
    {
      "@type": "CourseInstance",
      courseMode: "offline",
      name: "Offline Classroom",
      location: "Kota, Rajasthan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Dr. Tanwar Sir and what qualifications does he have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Tanwar Sir holds a Ph.D. in Mathematics and has over 12 years of teaching experience in Kota. He specializes in IIT-JEE Maths and has produced consistent top 100 rankers in both JEE Main and Advanced.",
      },
    },
    {
      "@type": "Question",
      name: "Are the online classes as effective as offline classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our online classes are fully live and interactive. Students can ask doubts in real time, and all classes are recorded. Hundreds of online students have cracked JEE with the same results as offline students.",
      },
    },
    {
      "@type": "Question",
      name: "What is the batch size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We keep batch sizes small - maximum 25 students for offline and 30 for online. This ensures every student gets personal attention from Dr. Tanwar Sir.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial or demo class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a completely free demo class. Fill in the form and our team will schedule a demo within 24 hours - no payment required.",
      },
    },
    {
      "@type": "Question",
      name: "Which exams does Dr. Tanwar Sir prepare students for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Tanwar Sir teaches Mathematics for IIT-JEE (Main & Advanced), NEET Mathematics, Foundation Maths for Class 6-10, and Maths Olympiad (RMO/INMO).",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "EducationalOrganization",
    name: "Dr. Tanwar Sir Maths",
  },
  ratingValue: "4.9",
  reviewCount: "127",
  bestRating: "5",
};

/* ──────────── DATA FROM data.ts ──────────── */
/* All content imported from @/lib/data - no hardcoded strings */

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 left-10 text-6xl md:text-8xl text-white/20 font-bold select-none pointer-events-none">
            &int;
          </div>
          <div className="absolute top-40 right-20 text-5xl md:text-7xl text-white/20 font-bold select-none pointer-events-none">
            &sum;
          </div>
          <div className="absolute bottom-20 left-1/4 text-4xl md:text-6xl text-white/15 select-none pointer-events-none">
            dy/dx
          </div>
          <div className="absolute bottom-40 right-1/3 text-5xl md:text-7xl text-white/15 select-none pointer-events-none">
            &infin;
          </div>
        </div>
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <GraduationCap className="w-3.5 h-3.5" />
                Ph.D. in Mathematics &middot; Kota
              </span>
              <h1 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1] mb-6">
                Learn from{" "}
                <span className="text-accent">Kota&apos;s Best</span> Maths
                Teacher
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                IIT-JEE Maths by Dr. Tanwar Sir (Ph.D. in Mathematics) -
                recognized as the best maths teacher for JEE Main &amp; Advanced.
                Offline &amp; Online classes with personalized attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-accent text-base">
                  Book Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
                >
                  View Courses
                </Link>
              </div>
              <div className="flex flex-wrap gap-6">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-heading font-bold text-accent text-xl md:text-2xl">
                      {s.value}
                    </p>
                    <p className="text-white/50 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent/30 to-accent/5 flex items-center justify-center overflow-hidden">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center border-4 border-accent/30 overflow-hidden">
                    <Image
                      src={INSTRUCTOR.image}
                      alt="Dr. Tanwar Sir - Ph.D. Mathematics, IIT-JEE Coach in Kota"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-4 bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold text-primary">
                    Top 100 Rankers
                  </span>
                </div>
                <div className="absolute -bottom-2 -left-4 bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold text-primary">
                    500+ Students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHT BANNER ─── */}
      <section className="bg-primary pb-8 md:pb-12 pt-4 relative z-20">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-dark to-primary border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl overflow-hidden relative flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-10">
            {/* Background grid */}
            <div 
              className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            {/* Wavy accent graphic on the right */}
            <div className="absolute right-0 bottom-0 w-48 h-full bg-accent/20 [clip-path:polygon(100%_0,100%_100%,0_100%,15%_60%,25%_40%,0_0)] rounded-r-2xl pointer-events-none hidden md:block" />
            <div className="absolute right-0 top-0 w-24 h-full bg-accent/30 [clip-path:polygon(100%_0,100%_100%,50%_100%,80%_50%,50%_0)] rounded-r-2xl pointer-events-none hidden md:block" />

            {/* Left Side: Icon & Text */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start xl:items-center gap-5 relative z-10 text-center sm:text-left w-full xl:w-auto">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-accent to-accent-dark flex flex-col items-center justify-center shrink-0 border border-accent-light shadow-inner shadow-white/20">
                <div className="w-full h-3 bg-white/20 rounded-t-xl mb-1 flex justify-evenly items-center px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                </div>
                <span className="text-xl font-heading font-extrabold text-white leading-none pb-1">26</span>
              </div>
              <p className="text-white font-medium text-lg md:text-xl xl:text-2xl leading-snug">
                Class 11th &amp; 12th <span className="bg-accent text-white px-2.5 py-0.5 rounded shadow-sm inline-block -rotate-1 ml-1 mr-1">Foundation Courses</span> for 2026-27 Are Now Live
              </p>
            </div>
            
            {/* Right Side: Button & Offer */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 relative z-10 shrink-0 w-full xl:w-auto">
              <Link href="/courses" className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-3.5 rounded-lg shadow-[0_4px_20px_rgba(46,179,148,0.4)] hover:shadow-[0_6px_25px_rgba(46,179,148,0.6)] transition-all w-full sm:w-auto text-center transform hover:-translate-y-0.5 whitespace-nowrap text-base">
                Enroll Now
              </Link>
              <div className="text-center sm:text-left hidden lg:block border-l border-white/20 pl-6 py-1">
                <p className="text-white/90 font-semibold text-sm leading-relaxed">
                  Join Now with a<br/>
                  <span className="text-accent text-base font-bold">20% early bird</span> discount
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-white border-b border-border py-6 md:py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading font-bold text-primary text-2xl md:text-3xl">
                  {s.value}
                </p>
                <p className="text-foreground-muted text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSES / BATCHES ─── */}
      <section id="courses" className="section-padding bg-background-alt">
        <div className="container text-center">
          <span className="section-label">Programs Offered</span>
          <h2 className="section-title">Choose Your JEE Batch</h2>
          <p className="section-subtitle">
            From foundation to advanced - every batch is designed around
            Dr. Tanwar Sir&apos;s 3-Layer Logic Framework for maximum JEE
            results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {COURSES.filter((c) => c.popular || c.bestValue).slice(0, 3).map((course) => (
              <div
                key={course.id}
                className={`card relative ${
                  course.popular || course.bestValue
                    ? "border-accent ring-2 ring-accent/20"
                    : ""
                }`}
              >
                {(course.popular || course.bestValue) && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.bestValue ? "Best Value" : "Most Popular"}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-foreground-muted uppercase tracking-wider">
                    {course.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-primary text-lg mb-1">
                  {course.name}
                </h3>
                <p className="text-sm text-foreground-muted mb-3">{course.subtitle}</p>
                <div className="flex items-center gap-2 text-sm text-foreground-muted mb-4">
                  <Clock className="w-4 h-4" />
                  {course.schedule.online}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {course.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-4 flex justify-end">
                  <Link
                    href={`/courses#${course.id}`}
                    className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors flex items-center gap-1"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/courses" className="text-accent hover:text-accent-dark font-semibold text-sm">
              View all {COURSES.length} batches &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ─── 3-LAYER FRAMEWORK ─── */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Exclusive Teaching Method</span>
            <h2 className="section-title">
              Dr. Tanwar&apos;s 3-Layer Logic Framework&trade;
            </h2>
            <p className="section-subtitle">
              Anyone can teach a formula. Only a researcher can teach the
              thought behind it. Every concept is taught in 3 structured layers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FRAMEWORK_LAYERS.map((layer, idx) => {
              const Icon = frameworkIcons[idx];
              return (
                <div
                  key={layer.number}
                  className="relative bg-background-alt rounded-xl p-8 border border-border hover:border-accent transition-all group"
                >
                  <span className="text-6xl font-heading font-extrabold text-primary/5 absolute top-4 right-4 group-hover:text-accent/10 transition-colors">
                    {layer.number}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">
                    {layer.label}
                  </span>
                  <h3 className="font-heading font-bold text-primary text-xl my-2">
                    {layer.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center bg-primary/5 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-foreground italic text-base md:text-lg">
              &ldquo;From research desk to your notebook - the smartest
              way to learn Maths.&rdquo;
            </p>
            <p className="text-sm text-foreground-muted mt-2 font-semibold">
              - Dr. Tanwar Sir
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section-padding bg-background-alt">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              Why Students Trust Dr. Tanwar Sir
            </h2>
            <p className="section-subtitle">
              A unique blend of Ph.D.-level academic depth, Kota&apos;s finest
              teaching experience, and genuinely personalized learning.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item) => {
              const Icon = iconMap[item.icon] ?? GraduationCap;
              return (
                <div key={item.title} className="card card-sm">
                  <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-primary text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ABOUT DR. TANWAR ─── */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden relative">
                  <Image
                    src={INSTRUCTOR.image}
                    alt="Dr. Tanwar Sir - Ph.D. Mathematics Educator"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 320px"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-xl px-4 py-2 font-bold text-sm">
                  Admissions Open 2025-26
                </div>
              </div>
            </div>
            <div>
              <span className="section-label">About the Mentor</span>
              <h2 className="font-heading font-bold text-primary text-2xl md:text-3xl mb-4">
                Where Mathematics Meets the Student Mind
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-4">
                With a rare combination of a <strong>Ph.D. in Mathematics</strong> and
                a <strong>Master&apos;s in Psychology</strong>, Dr. Tanwar Sir
                understands not just Maths - but the student mind behind
                it.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-6">
                For the last 12+ years, his teaching system has been built on
                three pillars that transform how students think about
                Mathematics.
              </p>
              <div className="space-y-4 mb-8">
                {TEACHING_PILLARS.map((pillar) => {
                  const Icon = iconMap[pillar.icon] ?? Lightbulb;
                  return (
                    <div key={pillar.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-primary text-sm">
                          {pillar.title}
                        </p>
                        <p className="text-foreground-muted text-sm">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Ph.D. Mathematics",
                  "Top 100 Rankers",
                  "Kota Expert",
                  "Online + Offline",
                  "Small Batches",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="btn-accent">
                Book a Free Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        id="testimonials"
        className="section-padding bg-background-alt"
      >
        <div className="container text-center">
          <span className="section-label">Student Reviews</span>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Real words from real students - unfiltered experiences of
            studying with Dr. Tanwar Sir.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card card-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-border pt-3">
                  <p className="font-heading font-semibold text-primary text-sm">
                    {t.name}
                  </p>
                  <p className="text-foreground-muted text-xs">
                    {t.location} &middot; {t.exam}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know before enrolling - answered
              clearly and honestly.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <CTABanner
        title="Start Your Journey to IIT-JEE Success Today"
        subtitle="Book a free demo class with Dr. Tanwar Sir and experience the clarity that has helped 500+ students achieve their dream ranks."
        primaryLabel="Book Free Demo"
        primaryHref="/contact"
        secondaryLabel="View Courses"
        secondaryHref="/courses"
      />

      {/* ─── CONTACT / DEMO FORM ─── */}
      <section id="contact" className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 className="font-heading font-bold text-primary text-2xl md:text-3xl mb-4">
                Book Your Free Demo Class
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-8">
                Fill in your details - we&apos;ll respond on WhatsApp
                within 24 hours. No commitment needed.
              </p>
              <div className="space-y-4 mb-8">
                {CONTACT_HIGHLIGHTS.map((item) => {
                  const Icon = iconMap[item.icon] ?? GraduationCap;
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-3">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  {SITE_CONFIG.email}
                </a>
                <a
                  href={`tel:+91${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
            <div className="bg-background-alt rounded-2xl p-6 md:p-8">
              <h3 className="font-heading font-bold text-primary text-lg mb-6">
                Book Your Free Demo
              </h3>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Schema markup */}
      <JsonLd data={courseSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={reviewSchema} />
    </>
  );
}

/* ─── FAQ Item (client component) ─── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-border rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-background-alt transition-colors">
        <span className="font-heading font-semibold text-primary text-sm md:text-base pr-4">
          {question}
        </span>
        <ChevronDown className="w-5 h-5 text-foreground-muted shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-5 text-foreground-muted text-sm leading-relaxed border-t border-border pt-4">
        {answer}
      </div>
    </details>
  );
}
