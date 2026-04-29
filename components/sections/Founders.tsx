"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Users,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/ui/Container";

/* ============================================================
   OWNERS DATA
   To use real photos: drop them in /public/team/ and set the
   `photo` field to the path. Leave it blank to fall back to
   the monogram placeholder.
   ============================================================ */

type Owner = {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  email: string;
  bio: string;
  linkedin: string;
  photo?: string;
  accentBg: string;
};

const owners: Owner[] = [
  {
    name: "Deep Sharma",
    firstName: "Deep",
    lastName: "Sharma",
    initials: "DS",
    role: "Founder",
    email: "Connect With Deep",
    linkedin: "https://www.linkedin.com/in/deep-chand-1a279143/",
    bio: "Deep leads the strategy and growth side of MedClap. With over a decade in performance marketing across healthcare and wellness, he's built campaigns that scaled brands from launch to category leaders. He believes the best marketing feels less like marketing — and more like solving real problems for real people.",
    photo: "/images/deep.jpeg", 
    accentBg: "bg-navy",
  },
  {
    name: "Gaurav Sharma",
    firstName: "Gaurav",
    lastName: "Sharma",
    initials: "GS",
    role: "Co-founder",
    email: "Connect With Gaurav",
    linkedin: "https://www.linkedin.com/in/gourav-sharma-vision/",
    bio: "Gaurav runs the creative and design practice. He approaches every brand as a system, not a logo — building visual identities, websites, and campaigns that don't just look good, but earn their keep. His work has shipped for 100+ brands across healthcare, B2B SaaS, and consumer wellness.",
    photo: "/images/gaurav.jpg", // ← drop gaurav.jpg into /public/team/
    accentBg: "bg-cream-warm",
  },
];

const ROTATION_MS = 4000;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Founders() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = owners[activeIndex];

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setProgress(0);
    const tickMs = 50;
    const step = 100 / (ROTATION_MS / tickMs);

    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActiveIndex((i) => (i + 1) % owners.length);
          return 0;
        }
        return p + step;
      });
    }, tickMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, activeIndex]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const next = () => goTo((activeIndex + 1) % owners.length);
  const prev = () => goTo((activeIndex - 1 + owners.length) % owners.length);

  return (
    <section
      id="founders"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* HEADER */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6"
            >
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                <Users className="w-2.5 h-2.5 text-navy" strokeWidth={2.75} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Founders
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-navy tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Meet the{" "}
              <span className="font-serif italic font-normal text-gold-deep">
                Founders.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-[17px] text-ink-soft leading-relaxed max-w-md md:text-right"
          >
            Two founders. One studio. A shared belief that great marketing
            comes from understanding the work — not just decorating it.
          </motion.p>
        </motion.div>

        {/* CAROUSEL */}
        <motion.div
          className="relative bg-cream-warm rounded-3xl border border-divider-soft overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]"
            >
              {/* LEFT TEXT */}
              <div className="lg:col-span-7 p-7 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft"
                >
                  <span className="text-gold-deep font-display text-base">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="w-6 h-px bg-divider" />
                  <span>
                    {String(owners.length).padStart(2, "0")} · Co-Founder
                  </span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="font-display font-extrabold text-navy tracking-tight leading-[0.95] mb-3"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
                >
                  {active.firstName}{" "}
                  <span className="font-serif italic font-normal text-gold-deep">
                    {active.lastName}
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.5 }}
                  className="text-base md:text-lg text-ink-soft mb-7 md:mb-8"
                >
                  {active.role}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-[14.5px] md:text-[15px] text-ink leading-relaxed max-w-xl mb-8"
                >
                  {active.bio}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <a
                    href={`mailto:${active.email}`}
                    className="group inline-flex items-center justify-between gap-3 bg-navy text-cream rounded-full pl-5 pr-1.5 py-1.5 hover:bg-ink transition-colors"
                  >
                    <span className="font-semibold text-[14px] py-1">
                      {active.email}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg]">
                      <Mail
                        className="w-3.5 h-3.5 text-navy"
                        strokeWidth={2.5}
                      />
                    </span>
                  </a>
                  <a
                    href={active.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border-2 border-navy text-navy rounded-full pl-4 pr-1.5 py-1.5 hover:bg-navy hover:text-cream transition-colors"
                  >
                    <span className="font-semibold text-[14px] py-1">
                      LinkedIn
                    </span>
                    <span className="w-8 h-8 rounded-full bg-navy group-hover:bg-gold flex items-center justify-center transition-all duration-300">
                      <Linkedin
                        className="w-3.5 h-3.5 text-gold group-hover:text-navy transition-colors"
                        strokeWidth={2.25}
                      />
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* RIGHT PORTRAIT */}
              <div className="lg:col-span-5 relative order-1 lg:order-2 min-h-[320px] lg:min-h-[520px] overflow-hidden">
                <div
                  className={`absolute inset-0 ${active.accentBg} transition-colors duration-500`}
                >
                  {active.accentBg === "bg-navy" ? (
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.3) 1px, transparent 0)",
                        backgroundSize: "22px 22px",
                      }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgba(26,42,94,0.15) 1px, transparent 0)",
                        backgroundSize: "22px 22px",
                      }}
                    />
                  )}

                  <div
                    className={`absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl ${
                      active.accentBg === "bg-navy"
                        ? "bg-gold/15"
                        : "bg-navy/10"
                    }`}
                  />

                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                    {active.photo ? (
                      <PhotoPortrait owner={active} />
                    ) : (
                      <MonogramPortrait owner={active} />
                    )}
                  </div>

                  <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-cream/15 backdrop-blur-sm rounded-full px-2.5 py-1 border border-cream/15 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest ${
                        active.accentBg === "bg-navy"
                          ? "text-cream"
                          : "text-navy"
                      }`}
                    >
                      Co-Founder
                    </span>
                  </div>

                  <div
                    className={`absolute -bottom-8 -right-4 font-serif italic font-normal leading-none select-none pointer-events-none ${
                      active.accentBg === "bg-navy"
                        ? "text-gold/15"
                        : "text-navy/10"
                    }`}
                    style={{ fontSize: "clamp(14rem, 22vw, 22rem)" }}
                  >
                    {active.firstName.charAt(0).toLowerCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="relative border-t border-divider px-7 md:px-10 lg:px-12 py-5 md:py-6 flex items-center justify-between gap-4 bg-cream">
            <div className="flex items-center gap-2 md:gap-3">
              {owners.map((owner, i) => (
                <button
                  key={owner.name}
                  onClick={() => goTo(i)}
                  aria-label={`View ${owner.name}`}
                  className={`group flex items-center gap-2.5 rounded-full border-2 transition-all duration-300 pl-1 pr-3 md:pr-4 py-1 ${
                    i === activeIndex
                      ? "border-navy bg-navy text-cream"
                      : "border-divider hover:border-navy/50 hover:bg-cream-warm/50"
                  }`}
                >
                  <span
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-display font-extrabold text-[12px] md:text-[13px] flex-shrink-0 transition-colors duration-300 overflow-hidden ${
                      i === activeIndex
                        ? "bg-gold text-navy"
                        : "bg-navy text-gold"
                    }`}
                  >
                    {owner.photo ? (
                      <Image
                        src={owner.photo}
                        alt={owner.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      owner.initials
                    )}
                  </span>
                  <div className="hidden sm:block text-left">
                    <div
                      className={`font-display font-bold text-[12.5px] leading-tight tracking-tight ${
                        i === activeIndex ? "text-cream" : "text-navy"
                      }`}
                    >
                      {owner.firstName}
                    </div>
                    <div
                      className={`text-[10px] leading-tight mt-0.5 ${
                        i === activeIndex ? "text-cream/60" : "text-ink-soft"
                      }`}
                    >
                      {owner.role.split("&")[1]?.trim() || "Co-Founder"}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative w-9 h-9 hidden sm:block">
                <svg
                  className="w-9 h-9 -rotate-90"
                  viewBox="0 0 36 36"
                  aria-hidden
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#E8E2D4"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#F4B62E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="87.96"
                    strokeDashoffset={87.96 - (87.96 * progress) / 100}
                    style={{ transition: "stroke-dashoffset 0.05s linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-navy">
                  {String(activeIndex + 1)}/{owners.length}
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={prev}
                  aria-label="Previous founder"
                  className="w-9 h-9 rounded-full border border-divider hover:border-navy hover:bg-navy hover:text-cream text-navy flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2.25} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next founder"
                  className="w-9 h-9 rounded-full border border-divider hover:border-navy hover:bg-navy hover:text-cream text-navy flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-10 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[12.5px] font-bold text-ink-soft hover:text-navy uppercase tracking-[0.15em] transition-colors"
          >
            <span className="text-gold">✦</span>
            Want to work with us?
            <span className="border-b border-ink-soft group-hover:border-navy transition-colors normal-case tracking-normal font-medium text-[13px] text-navy ml-1">
              Get in touch
            </span>
            <ArrowUpRight
              className="w-3.5 h-3.5 text-navy transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

/* ============================================================
   PHOTO PORTRAIT — used when owner.photo is set
   ============================================================ */

function PhotoPortrait({ owner }: { owner: Owner }) {
  const isOnNavy = owner.accentBg === "bg-navy";
  return (
    <div className="relative w-full max-w-[320px] aspect-[3/4]">
      {/* Decorative outer frame */}
      <div
        className={`absolute inset-0 rounded-3xl border-2 ${
          isOnNavy ? "border-cream/15" : "border-navy/10"
        }`}
      />

      {/* Photo container */}
      <div className="absolute inset-3 rounded-2xl overflow-hidden">
        <Image
          src={owner.photo!}
          alt={owner.name}
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 320px"
          className="object-cover"
          priority
        />

        {/* Gradient name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pt-12 pb-3 bg-gradient-to-t from-black/75 via-black/40 to-transparent">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/75">
            {owner.role.split("&")[0].trim()}
          </div>
          <div className="font-display font-extrabold text-[15px] mt-0.5 text-cream">
            {owner.name}
          </div>
        </div>
      </div>

      {/* Corner gold star */}
      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold flex items-center justify-center text-navy font-display font-extrabold text-[11px] shadow-lg z-10">
        ✦
      </span>
    </div>
  );
}

/* ============================================================
   MONOGRAM PORTRAIT — fallback when no photo is set
   ============================================================ */

function MonogramPortrait({ owner }: { owner: Owner }) {
  const isOnNavy = owner.accentBg === "bg-navy";
  return (
    <div className="relative w-full max-w-[320px] aspect-[3/4]">
      <div
        className={`absolute inset-0 rounded-3xl border-2 ${
          isOnNavy ? "border-cream/15" : "border-navy/10"
        }`}
      />

      <div
        className={`absolute inset-3 rounded-2xl flex items-center justify-center overflow-hidden ${
          isOnNavy ? "bg-navy-deep/60" : "bg-cream"
        }`}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: isOnNavy
              ? "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.15) 1px, transparent 0)"
              : "radial-gradient(circle at 1px 1px, rgba(26,42,94,0.1) 1px, transparent 0)",
            backgroundSize: "14px 14px",
          }}
        />

        <span
          className="relative font-display font-extrabold leading-none tracking-tighter text-gold"
          style={{ fontSize: "clamp(7rem, 16vw, 12rem)" }}
        >
          {owner.initials}
        </span>

        <div
          className={`absolute bottom-0 left-0 right-0 px-4 py-3 ${
            isOnNavy ? "bg-cream/5" : "bg-navy/5"
          } backdrop-blur-sm border-t ${
            isOnNavy ? "border-cream/10" : "border-navy/10"
          }`}
        >
          <div
            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
              isOnNavy ? "text-cream/60" : "text-ink-soft"
            }`}
          >
            Portrait Pending
          </div>
          <div
            className={`font-display font-extrabold text-[15px] mt-0.5 ${
              isOnNavy ? "text-cream" : "text-navy"
            }`}
          >
            {owner.name}
          </div>
        </div>
      </div>

      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold flex items-center justify-center text-navy font-display font-extrabold text-[11px] shadow-lg">
        ✦
      </span>
    </div>
  );
}