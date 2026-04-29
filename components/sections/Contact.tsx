"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Mail,
  Phone,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  Send,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";

/* ============================================================
   FORM TYPES
   ============================================================ */

type ProjectType = "retainer" | "one-off" | "exploring";

const projectTypes: { value: ProjectType; label: string }[] = [
  { value: "retainer", label: "Retainer" },
  { value: "one-off", label: "One-off Project" },
  { value: "exploring", label: "Just Exploring" },
];

const serviceOptions = [
  "Analytics",
  "Content Strategy",
  "Design",
  "SEO",
  "Email Marketing",
  "Social Media",
];

/* ============================================================
   ANIMATION VARIANTS
   ============================================================ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "retainer" as ProjectType,
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your API endpoint, e.g.:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "retainer",
      services: [],
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          {/* ════════ LEFT COLUMN ════════ */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6"
            >
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                <MessageCircle
                  className="w-2.5 h-2.5 text-navy"
                  strokeWidth={2.75}
                />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Contact
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-navy tracking-tight leading-[0.95] mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Let&apos;s{" "}
              <span className="font-serif italic font-normal text-gold-deep">
                talk.
              </span>
            </motion.h2>

            {/* Intro */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-[17px] text-ink-soft leading-relaxed mb-8 max-w-md"
            >
              Got a project in mind? Tell us about it and we&apos;ll get back
              to you within 24 hours — no auto-replies, no sales scripts.
            </motion.p>

            {/* "Replies in 24 hrs" card with founder signature */}
            <motion.div
              variants={fadeUp}
              className="bg-cream-warm border border-divider-soft rounded-2xl p-5 mb-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                  <CheckCircle2
                    className="w-3 h-3 text-gold-deep"
                    strokeWidth={2.5}
                  />
                </span>
                <span className="text-[11px] font-bold text-navy uppercase tracking-[0.15em]">
                  Replies within 24 hours
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-navy text-gold flex items-center justify-center font-display font-extrabold text-lg flex-shrink-0">
                  PS
                </div>
                <div className="min-w-0">
                  <div className="font-display text-[15px] font-extrabold text-navy leading-tight">
                    Prince Sharma
                  </div>
                  <div className="text-[12px] text-ink-soft mt-0.5">
                    Founder · Your message goes straight to me.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick contact methods */}
            <motion.div variants={fadeUp} className="space-y-3 mb-6">
              {/* Email */}
              <a
                href="mailto:hello@medclap.com"
                className="group flex items-center gap-4 bg-cream-warm border border-divider-soft rounded-2xl p-4 hover:border-divider hover:bg-cream-warm/80 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]">
                  <Mail className="w-5 h-5 text-gold" strokeWidth={2.25} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-ink-soft uppercase tracking-widest">
                    Email
                  </div>
                  <div className="font-display text-[15px] font-extrabold text-navy mt-0.5 truncate">
                    hello@medclap.com
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-navy transition-transform duration-300 group-hover:rotate-[-12deg]"
                  strokeWidth={2.5}
                />
              </a>

              {/* Phone */}
              <a
                href="tel:+919996619432"
                className="group flex items-center gap-4 bg-cream-warm border border-divider-soft rounded-2xl p-4 hover:border-divider hover:bg-cream-warm/80 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]">
                  <Phone className="w-5 h-5 text-gold" strokeWidth={2.25} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-ink-soft uppercase tracking-widest">
                    Call
                  </div>
                  <div className="font-display text-[15px] font-extrabold text-navy mt-0.5 truncate">
                    +91 8295515447
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-navy transition-transform duration-300 group-hover:rotate-[-12deg]"
                  strokeWidth={2.5}
                />
              </a>

              {/* Book a call */}
              <a
                href="#"
                className="group flex items-center gap-4 bg-navy text-cream rounded-2xl p-4 hover:bg-ink transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]">
                  <Calendar className="w-5 h-5 text-navy" strokeWidth={2.25} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-gold uppercase tracking-widest">
                    Book a free call
                  </div>
                  <div className="font-display text-[15px] font-extrabold text-cream mt-0.5">
                    30-min strategy session
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-gold transition-transform duration-300 group-hover:rotate-[-12deg]"
                  strokeWidth={2.5}
                />
              </a>
            </motion.div>

            {/* Trust footer */}
            <motion.div
              variants={fadeUp}
              className="text-[11px] font-bold text-ink-soft uppercase tracking-[0.18em] flex items-center gap-2"
            >
              <span className="text-gold">✦</span>
              Trusted by 140+ brands worldwide
            </motion.div>
          </motion.div>

          {/* ════════ RIGHT COLUMN — FORM ════════ */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeRight}
          >
            <div className="relative bg-navy rounded-3xl p-6 md:p-8 overflow-hidden">
              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Floating gold accent in corner */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/15 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gold/20 pointer-events-none" />

              {/* SUCCESS STATE */}
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative py-12 md:py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                        delay: 0.1,
                      }}
                      className="w-20 h-20 rounded-full bg-gold mx-auto flex items-center justify-center mb-6"
                    >
                      <CheckCircle2
                        className="w-10 h-10 text-navy"
                        strokeWidth={2.25}
                      />
                    </motion.div>
                    <h3
                      className="font-display font-extrabold text-cream tracking-tight mb-3"
                      style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                    >
                      Message{" "}
                      <span className="font-serif italic font-normal text-gold">
                        sent.
                      </span>
                    </h3>
                    <p className="text-cream/70 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8">
                      Thanks {formData.name.split(" ")[0] || "for reaching out"}!
                      Ankush will personally reply within 24 hours — usually
                      much sooner.
                    </p>
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:gap-3 transition-all"
                    >
                      Send another message
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                  </motion.div>
                ) : (
                  /* FORM */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative space-y-5"
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Your name"
                        required
                        type="text"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(v) =>
                          setFormData({ ...formData, name: v })
                        }
                      />
                      <Field
                        label="Email"
                        required
                        type="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(v) =>
                          setFormData({ ...formData, email: v })
                        }
                      />
                    </div>

                    {/* Company */}
                    <Field
                      label="Company / Website"
                      hint="optional"
                      type="text"
                      placeholder="company.com"
                      value={formData.company}
                      onChange={(v) =>
                        setFormData({ ...formData, company: v })
                      }
                    />

                    {/* Project type — pill toggle */}
                    <div>
                      <label className="block text-[11px] font-bold text-cream uppercase tracking-[0.15em] mb-2.5">
                        Project type{" "}
                        <span className="text-cream/40 font-medium normal-case tracking-normal">
                          · pick one
                        </span>
                      </label>
                      <div className="grid grid-cols-3 gap-1.5 bg-navy-deep/60 rounded-xl p-1 border border-cream/10">
                        {projectTypes.map((t) => (
                          <button
                            key={t.value}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                projectType: t.value,
                              })
                            }
                            className={`relative py-2.5 px-2 rounded-lg text-[12.5px] font-bold transition-colors duration-300 ${
                              formData.projectType === t.value
                                ? "text-navy"
                                : "text-cream/70 hover:text-cream"
                            }`}
                          >
                            {formData.projectType === t.value && (
                              <motion.span
                                layoutId="active-project-pill"
                                className="absolute inset-0 bg-gold rounded-lg"
                                transition={{
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 30,
                                }}
                              />
                            )}
                            <span className="relative z-10">{t.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Services — multi-select chips */}
                    <div>
                      <label className="block text-[11px] font-bold text-cream uppercase tracking-[0.15em] mb-2.5">
                        I need help with{" "}
                        <span className="text-cream/40 font-medium normal-case tracking-normal">
                          · select all that apply
                        </span>
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {serviceOptions.map((service) => {
                          const isActive =
                            formData.services.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-3.5 py-2 rounded-full text-[12px] font-bold transition-all duration-300 border ${
                                isActive
                                  ? "bg-gold border-gold text-navy"
                                  : "bg-cream/[0.04] border-cream/15 text-cream/70 hover:border-cream/30 hover:text-cream"
                              }`}
                            >
                              <span className="inline-flex items-center gap-1.5">
                                {isActive && (
                                  <span className="text-navy">✓</span>
                                )}
                                {service}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-cream uppercase tracking-[0.15em] mb-2">
                        Tell us about your project{" "}
                        <span className="text-gold">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="What are you trying to accomplish? Include any context, links, or timelines that would help us understand."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-navy-deep/60 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-[14px] leading-relaxed focus:outline-none focus:border-gold/60 focus:bg-navy-deep transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-soft text-navy font-bold text-[15px] rounded-full py-4 transition-colors"
                      >
                        Send message
                        <span className="w-7 h-7 rounded-full bg-navy flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:translate-x-0.5">
                          <Send
                            className="w-3 h-3 text-gold"
                            strokeWidth={2.5}
                          />
                        </span>
                      </button>
                      <p className="text-[11px] text-cream/40 text-center mt-3">
                        We respect your privacy — no spam, no shared data, no
                        endless drip campaigns.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   FORM FIELD — reusable input with label
   ============================================================ */

function Field({
  label,
  required,
  hint,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-cream uppercase tracking-[0.15em] mb-2">
        {label}{" "}
        {required && <span className="text-gold">*</span>}
        {hint && (
          <span className="text-cream/40 font-medium normal-case tracking-normal ml-1">
            · {hint}
          </span>
        )}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-navy-deep/60 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-[14px] focus:outline-none focus:border-gold/60 focus:bg-navy-deep transition-colors"
      />
    </div>
  );
}
