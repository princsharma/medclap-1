"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { fadeUp, stagger } from "./animations";

export default function ContactInfo() {
  return (
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
        Got a project in mind? Tell us about it and we&apos;ll get back to you
        within 24 hours — no auto-replies, no sales scripts.
      </motion.p>

      {/* Founder card */}
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
        <ContactLink
          href="mailto:deep@medclap.com"
          icon={<Mail className="w-5 h-5 text-gold" strokeWidth={2.25} />}
          label="Email"
          value="deep@medclap.com"
        />
        <ContactLink
          href="tel:+919996619432"
          icon={<Phone className="w-5 h-5 text-gold" strokeWidth={2.25} />}
          label="Call"
          value="+91 8295515447"
        />
        <ContactLink
          href="#"
          icon={<Calendar className="w-5 h-5 text-navy" strokeWidth={2.25} />}
          label="Book a free call"
          value="30-min strategy session"
          variant="dark"
        />
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
  );
}

type ContactLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  variant?: "light" | "dark";
};

function ContactLink({
  href,
  icon,
  label,
  value,
  variant = "light",
}: ContactLinkProps) {
  const isDark = variant === "dark";
  return (
    <a
      href={href}
      className={
        isDark
          ? "group flex items-center gap-4 bg-navy text-cream rounded-2xl p-4 hover:bg-ink transition-colors"
          : "group flex items-center gap-4 bg-cream-warm border border-divider-soft rounded-2xl p-4 hover:border-divider hover:bg-cream-warm/80 transition-colors"
      }
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg] ${
          isDark ? "bg-gold" : "bg-navy"
        }`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div
          className={`text-[10px] font-bold uppercase tracking-widest ${
            isDark ? "text-gold" : "text-ink-soft"
          }`}
        >
          {label}
        </div>
        <div
          className={`font-display text-[15px] font-extrabold mt-0.5 truncate ${
            isDark ? "text-cream" : "text-navy"
          }`}
        >
          {value}
        </div>
      </div>
      <ArrowUpRight
        className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-[-12deg] ${
          isDark ? "text-gold" : "text-navy"
        }`}
        strokeWidth={2.5}
      />
    </a>
  );
}
