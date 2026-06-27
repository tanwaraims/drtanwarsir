"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { FORM_COURSE_OPTIONS, FORM_MODE_OPTIONS, SITE_CONFIG } from "@/lib/data";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    mode: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name}. I'd like to book a free demo for ${formData.course} (${formData.mode}). Phone: ${formData.phone}, Email: ${formData.email}. ${formData.message}`;
    const whatsappUrl = `${SITE_CONFIG.whatsappBase}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <h3 className="font-heading font-bold text-primary text-xl mb-2">
          Demo Request Sent!
        </h3>
        <p className="text-foreground-muted">
          Our team will reach out to you on WhatsApp within 24 hours to schedule
          your free demo class.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Select Course *
          </label>
          <select
            name="course"
            required
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm bg-white"
          >
            <option value="">Choose a course</option>
            {FORM_COURSE_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Preferred Mode *
          </label>
          <select
            name="mode"
            required
            value={formData.mode}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm bg-white"
          >
            <option value="">Choose mode</option>
            {FORM_MODE_OPTIONS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Message (Optional)
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific topics or questions?"
          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full btn-accent text-base"
        style={{ paddingTop: "14px", paddingBottom: "14px" }}
      >
        <Send className="w-4 h-4" />
        Book Free Demo on WhatsApp
      </button>
      <p className="text-xs text-foreground-muted text-center">
        We&apos;ll respond on WhatsApp within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
