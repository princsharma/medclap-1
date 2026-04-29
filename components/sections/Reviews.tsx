"use client";

import { motion, type Variants } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

/* ============================================================
   DATA
   ============================================================ */

type Avatar = { bg: string; color: string; initials: string };

type Testimonial = {
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: Avatar;
};

const testimonials: Testimonial[] = [
  {
    rating: 4.9,
    quote:
      "MedClap rebuilt our funnel from the ground up — better landing pages, tighter ad copy, and SEO that actually ranks. Our qualified leads jumped within the first quarter and cost-per-acquisition kept dropping. They get the ESA space.",
    name: "Tracy Deslaurier",
    role: "CO-FOUNDER · Fast ESA Letter",
    avatar: { bg: "#F4B62E", color: "#1A2A5E", initials: "TD" },
  },
  {
    rating: 5.0,
    quote:
"Operating across 17 states means 17 different SEO battles. MedClap mapped out state-level strategies that stuck — organic traffic is up double digits YoY and our top states are converting better than ever. Reporting is sharp and the team just executes.",
    name: "Dr. Marcus Riley",
    role: "Chief Medical Officer · My MMJ Doctor",
    avatar: { bg: "#1A2A5E", color: "#F4B62E", initials: "MR" },
  },
  {
    rating: 4.9,
    quote:
"We're a B2B equipment business — not exactly glamorous SEO territory. MedClap dug into our product catalog, fixed years of technical debt on the site, and built a content engine that actually pulls in buyers. Inbound inquiries have never been this consistent.",
    name: "Shaun",
    role: "FOUNDER · SRB EQUIPMENT",
    avatar: { bg: "#D89A14", color: "#FAF6EE", initials: "SH" },
  },
  {
    rating: 4.9,
    quote:
"Booking inquiries used to be seasonal and unpredictable. MedClap turned our paid search and local SEO into a steady pipeline — we're now ranking for the routes that matter and our quote requests have more than doubled. They treated our business like their own.",
    name: "Navpreet Singh",
    role: "FOUNDER · GO COACH CHARTERS",
    avatar: { bg: "#2B3D7A", color: "#F4B62E", initials: "NS" },
  },
];

const stackAvatars: Avatar[] = [
  { bg: "#F4B62E", color: "#1A2A5E", initials: "SC" },
  { bg: "#1A2A5E", color: "#F4B62E", initials: "MC" },
  { bg: "#D89A14", color: "#FAF6EE", initials: "JL" },
  { bg: "#2B3D7A", color: "#F4B62E", initials: "BD" },
];

/* ============================================================
   ANIMATION VARIANTS
   Defined once, reused across the section.
   ============================================================ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerCards: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      <Container>
        {/* ════════ HEADER ════════ */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <div className="md:col-span-8">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6"
            >
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                <Star
                  className="w-2.5 h-2.5 text-navy fill-navy"
                  strokeWidth={2.75}
                />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Reviews
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-navy tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Success{" "}
              <span className="font-serif italic font-normal text-gold-deep">
                stories.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="md:col-span-4 text-sm md:text-[15px] text-ink-soft leading-relaxed md:text-right"
          >
            Discover how our growth-focused approach helps ambitious brands
            scale smarter and faster than the competition.
          </motion.p>
        </motion.div>

        {/* ════════ MAIN GRID ════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {/* ─── LEFT: STATS CARD ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeRight}
            className="lg:col-span-4 bg-navy rounded-3xl p-7 md:p-8 text-cream relative overflow-hidden flex flex-col justify-between min-h-[460px] lg:min-h-0"
          >
            {/* Dot pattern bg */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Top: rating + description */}
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="font-display text-5xl md:text-[58px] font-extrabold text-cream leading-none tracking-tight">
                  4.9<span className="text-gold-deep">/5</span>
                </div>
                <p className="text-[11px] text-cream/60 leading-relaxed text-right max-w-[170px]">
                  We&apos;ve delivered{" "}
                  <span className="text-gold font-bold">140+ projects</span>{" "}
                  that drive real revenue.
                </p>
              </div>

              {/* 5 stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
            </div>

            {/* Bottom: trust block + button */}
            <div className="relative mt-8">
              {/* Avatar stack — spreads slightly on hover via CSS */}
              <motion.div
                className="flex -space-x-3 mb-4"
                whileHover="spread"
              >
                {stackAvatars.map((a, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      spread: { x: i * 4 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center text-[12px] font-display font-extrabold"
                    style={{
                      background: a.bg,
                      color: a.color,
                    }}
                  >
                    {a.initials}
                  </motion.div>
                ))}
                <motion.div
                  variants={{ spread: { x: 16 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-10 h-10 rounded-full border-2 border-navy bg-cream/10 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-gold"
                >
                  +136
                </motion.div>
              </motion.div>

              {/* Trust copy */}
              <div className="font-display text-lg font-extrabold text-cream tracking-tight leading-tight mb-1.5">
                Trusted by 140+ brands.
              </div>
              <div className="text-[11px] font-bold text-gold uppercase tracking-[0.18em] mb-6">
                ✦ They hit their targets — you&apos;re next.
              </div>

              {/* Leave a review button */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-between gap-3 w-full bg-cream text-navy rounded-full pl-5 pr-3 py-3 hover:bg-gold transition-colors duration-300"
              >
                <span className="font-bold text-[14px]">Get a FREE Audit</span>
                <span className="w-8 h-8 rounded-full bg-navy flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg]">
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-gold"
                    strokeWidth={2.5}
                  />
                </span>
              </a>
            </div>
          </motion.div>

          {/* ─── RIGHT: TESTIMONIAL GRID 2×2 ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerCards}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-cream-warm border border-divider-soft rounded-3xl p-6 md:p-7 flex flex-col hover:border-divider hover:shadow-md relative transition-[border-color,box-shadow] duration-500"
              >
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="font-display text-sm font-extrabold text-navy">
                    {t.rating.toFixed(1)}
                  </span>
                  <Star
                    className="w-3.5 h-3.5 fill-gold text-gold"
                    strokeWidth={1.5}
                  />
                  <span className="text-[10.5px] font-bold text-ink-soft uppercase tracking-widest">
                    Rating
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-[15px] md:text-[15.5px] text-ink leading-relaxed">
                    <span className="font-serif italic text-gold-deep text-xl leading-none mr-0.5">
                      &ldquo;
                    </span>
                    {t.quote}
                    <span className="font-serif italic text-gold-deep text-xl leading-none ml-0.5">
                      &rdquo;
                    </span>
                  </p>
                </blockquote>

                {/* Author */}
                <div className="mt-6 pt-5 border-t border-divider-soft flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-[13px] flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
                    style={{
                      background: t.avatar.bg,
                      color: t.avatar.color,
                    }}
                  >
                    {t.avatar.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-[15px] font-extrabold text-navy leading-tight tracking-tight truncate">
                      {t.name}
                    </div>
                    <div className="text-[11px] font-medium text-ink-soft mt-0.5 truncate uppercase tracking-wider">
                      {t.role}
                    </div>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-gold transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}