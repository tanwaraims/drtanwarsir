import {
  Phone,
  Mail,
  MapPin,
  Clock,
  GraduationCap,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import DemoForm from "@/components/DemoForm";
import type { Metadata } from "next";
import { SITE_CONFIG, CONTACT_QUICK_ANSWERS, DEMO_EXPECTATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book Free Demo - Best Maths Teacher in Kota",
  description:
    "Book a free demo class with the best maths teacher, Dr. Tanwar Sir. Fill the form or call +91 81188 53033. We'll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-20 md:py-28">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Get in Touch
          </span>
          <h1 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl mx-auto">
            Book Your{" "}
            <span className="text-accent">Free Demo Class</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Fill in your details and our team will reach out within 24 hours.
            No payment required - just experience the difference.
          </p>
        </div>
      </section>

      {/* ─── CONTACT + FORM ─── */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-primary text-2xl mb-6">
                Contact Information
              </h2>
              <div className="space-y-5 mb-8">
                <a
                  href={`tel:+91${SITE_CONFIG.phoneRaw}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary text-sm">
                      Phone
                    </p>
                    <p className="text-foreground-muted text-sm">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary text-sm">
                      Email
                    </p>
                    <p className="text-foreground-muted text-sm">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </a>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary text-sm">
                      Location
                    </p>
                    <p className="text-foreground-muted text-sm">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary text-sm">
                      Hours
                    </p>
                    <p className="text-foreground-muted text-sm">
                      {SITE_CONFIG.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={SITE_CONFIG.whatsappDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-whatsapp text-white rounded-xl p-4 hover:opacity-90 transition-opacity mb-8"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/80 text-xs">
                    Quick response, usually within minutes
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </a>

              {/* Why Demo */}
              <div className="bg-background-alt rounded-xl p-6">
                <h3 className="font-heading font-bold text-primary text-base mb-4">
                  What to Expect in Your Free Demo
                </h3>
                <ul className="space-y-3">
                  {DEMO_EXPECTATIONS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-background-alt rounded-2xl p-6 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  <h2 className="font-heading font-bold text-primary text-xl">
                    Book Your Free Demo
                  </h2>
                </div>
                <p className="text-foreground-muted text-sm mb-8">
                  Fill in your details - we&apos;ll respond on WhatsApp
                  within 24 hours.
                </p>
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ QUICK ─── */}
      <section className="section-padding bg-background-alt">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-primary text-2xl text-center mb-8">
            Quick Answers
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {CONTACT_QUICK_ANSWERS.map((item) => (
              <div key={item.q} className="card card-sm">
                <p className="font-heading font-semibold text-primary text-sm mb-2">
                  {item.q}
                </p>
                <p className="text-foreground-muted text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
