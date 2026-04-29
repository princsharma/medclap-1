"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus, HelpCircle, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

/* ============================================================
   FAQ DATA
   ============================================================ */

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "How long until I see results?",
    a: "Most paid channels show signal in 2–4 weeks. SEO and content compound — meaningful organic gains usually land at 3–6 months. We map realistic expectations to your channel mix in our first proposal so there are no surprises.",
  },
  {
    q: "What's your pricing model?",
    a: "Project-based for one-off builds (websites, brand work, campaigns) and monthly retainers for ongoing growth work. Every engagement starts with a free scoping call so the proposal reflects reality, not a template.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. We work in 90-day cycles with month-to-month renewals after that. If we're not earning our fee, you shouldn't be locked in — and we'd rather earn the renewal than enforce a contract.",
  },
  {
    q: "Do you work with small businesses or only enterprises?",
    a: "Both. Our smallest active clients are early-stage startups; our largest are 8-figure healthcare brands. What matters is fit — we want clients we can genuinely move the needle for.",
  },
  {
    q: "Can you handle compliance-heavy categories like healthcare?",
    a: "Yes — it's our specialty. We've run paid campaigns and content programs across HIPAA-sensitive telehealth, mental health, and cannabis-adjacent categories without flagged accounts or compliance issues.",
  },
  {
    q: "How involved do I need to be in the process?",
    a: "As much or as little as you want. We can run lean (one weekly check-in, async approvals) or embedded (Slack channel, daily standups). Most clients land somewhere in the middle after the first month.",
  },
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

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ============================================================
   ACCORDION ITEM
   ============================================================ */

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative rounded-2xl border transition-colors duration-300 overflow-hidden ${
        isOpen
          ? "bg-cream-warm border-divider"
          : "bg-cream-warm/60 border-divider-soft hover:bg-cream-warm hover:border-divider"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 md:px-7 py-5 md:py-6 flex items-center justify-between gap-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-[15.5px] md:text-base font-bold text-navy leading-tight tracking-tight">
          {faq.q}
        </span>

        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "#F4B62E" : "#FAF6EE",
          }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-9 h-9 rounded-full border border-divider flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: isOpen ? "#F4B62E" : "#FAF6EE" }}
        >
          <Plus className="w-4 h-4 text-navy" strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
              <div className="border-t border-divider pt-4 md:pt-5">
                <p className="text-[14.5px] md:text-[15px] text-ink-soft leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      <Container>
        {/* ════════ HEADER (centered) ════════ */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6"
          >
            <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
              <HelpCircle
                className="w-2.5 h-2.5 text-navy"
                strokeWidth={2.75}
              />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
              FAQs
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold text-navy tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Common{" "}
            <span className="font-serif italic font-normal text-gold-deep">
              questions.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm md:text-[15px] text-ink-soft leading-relaxed max-w-md mx-auto"
          >
            Things people ask before hiring us — answered honestly. If yours
            isn&apos;t here, just reach out.
          </motion.p>
        </motion.div>

        {/* ════════ FAQ ACCORDION ════════ */}
        <motion.div
          className="max-w-3xl mx-auto space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* ════════ STILL-HAVE-QUESTIONS CTA ════════ */}
        <motion.div
          className="max-w-3xl mx-auto mt-8 md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <a
            href="#contact"
            className="group flex items-center justify-between gap-4 rounded-2xl bg-navy text-cream px-6 md:px-7 py-5 md:py-6 hover:bg-ink transition-colors duration-300"
          >
            <div>
              <div className="font-display text-[15.5px] md:text-base font-bold tracking-tight">
                Still have questions?
              </div>
              <div className="text-[12.5px] text-cream/65 mt-0.5">
                Book a free 30-minute call — no pitch, just answers.
              </div>
            </div>
            <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-[-12deg]">
              <ArrowUpRight
                className="w-4 h-4 text-navy"
                strokeWidth={2.5}
              />
            </span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
