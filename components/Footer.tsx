"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  CheckCircle2,
  Coffee,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";

/* ============================================================
   FOOTER LINK DATA
   ============================================================ */

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const resourceLinks = [
  { label: "Case Studies", href: "#work" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Twitter / X", href: "#", Icon: Twitter },
  { label: "Instagram", href: "#", Icon: Instagram },
];

/* ============================================================
   FOOTER COMPONENT
   ============================================================ */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to your newsletter provider
    console.log("Newsletter signup:", email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="relative bg-navy text-cream overflow-hidden">
      {/* ════════ DECORATIVE BACKGROUND ════════ */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.18) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Soft gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* ════════════════════════════════════════════════════════
            TOP CTA STRIP — final call to action
          ════════════════════════════════════════════════════════ */}
      <div className="relative border-b border-cream/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="py-14 md:py-20"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
              {/* Left: massive heading */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-5 md:mb-6">
                  <span className="w-6 h-px bg-gold" />
                  <span className="text-[11px] font-bold text-gold uppercase tracking-[0.22em]">
                    Last call
                  </span>
                </div>
                <h2
                  className="font-display font-extrabold tracking-tight leading-[0.95]"
                  style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)" }}
                >
                  Have a project worth
                  <br />
                  <span className="font-serif italic font-normal text-gold">
                    talking
                  </span>{" "}
                  about?
                </h2>
              </div>

              {/* Right: CTA button cluster */}
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-between gap-3 bg-gold hover:bg-gold-soft text-navy rounded-full pl-6 pr-1.5 py-1.5 transition-colors duration-300 w-fit"
                >
                  <span className="font-bold text-[15px] py-1">
                    Start a project
                  </span>
                  <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:translate-x-0.5">
                    <ArrowUpRight
                      className="w-4 h-4 text-gold"
                      strokeWidth={2.5}
                    />
                  </span>
                </Link>
                <a
                  href="mailto:hello@medclap.com"
                  className="group inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-[13.5px]"
                >
                  <Mail className="w-3.5 h-3.5" strokeWidth={2.25} />
                  <span className="border-b border-transparent group-hover:border-gold transition-colors">
                    or just say hi at hello@medclap.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* ════════════════════════════════════════════════════════
            MAIN GRID — newsletter + 3 link columns
          ════════════════════════════════════════════════════════ */}
      <div className="relative">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-14 md:py-20"
          >
            {/* ─── Newsletter column (5/12) ─── */}
            <div className="lg:col-span-5">
              <div className="relative bg-cream/[0.04] border border-cream/10 rounded-3xl p-6 md:p-7 backdrop-blur-sm overflow-hidden">
                {/* Corner decoration */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gold/15 blur-2xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">
                        The Inside List
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-[26px] font-extrabold tracking-tight leading-tight">
                      Marketing tactics{" "}
                      <span className="font-serif italic font-normal text-gold">
                        that work.
                      </span>
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-navy" strokeWidth={2.5} />
                  </div>
                </div>

                <p className="text-[13.5px] text-cream/60 leading-relaxed mb-5">
                  One short email a month. Real campaign breakdowns, conversion
                  patterns, and the unsexy stuff that actually moves the
                  needle. No fluff, ever.
                </p>

                {/* Form */}
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 bg-gold/15 border border-gold/30 rounded-full px-5 py-3.5"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-gold"
                      strokeWidth={2.5}
                    />
                    <span className="text-[13.5px] font-bold text-cream">
                      You&apos;re in. Watch your inbox.
                    </span>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex items-center gap-1.5 bg-navy-deep/60 border border-cream/10 rounded-full pl-5 pr-1.5 py-1.5 focus-within:border-gold/60 transition-colors"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-transparent text-cream placeholder:text-cream/35 text-[14px] focus:outline-none py-2"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="group flex-shrink-0 w-9 h-9 rounded-full bg-gold hover:bg-gold-soft flex items-center justify-center transition-all duration-300"
                    >
                      <Send
                        className="w-3.5 h-3.5 text-navy transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2.5}
                      />
                    </button>
                  </form>
                )}

                {/* Trust microcopy */}
                <p className="text-[10.5px] text-cream/40 mt-3 leading-relaxed">
                  Joined by 2,400+ founders & marketers. Unsubscribe in one
                  click — no judgement.
                </p>
              </div>
            </div>

            {/* ─── Link columns (7/12) ─── */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
              {/* Navigation */}
              <FooterColumn label="// Navigate //" links={navLinks} />

              {/* Resources */}
              <FooterColumn label="// Resources //" links={resourceLinks} />

              {/* Socials */}
              <div>
                <h3 className="text-[10px] font-bold text-cream/40 uppercase tracking-[0.2em] mb-5">
                  // Social //
                </h3>
                <ul className="space-y-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 text-cream hover:text-gold transition-colors text-[14.5px] font-bold"
                      >
                        <span className="w-7 h-7 rounded-md bg-cream/10 group-hover:bg-gold/20 border border-cream/10 group-hover:border-gold/30 flex items-center justify-center transition-colors flex-shrink-0">
                          <Icon
                            className="w-3.5 h-3.5 text-cream group-hover:text-gold transition-colors"
                            strokeWidth={2}
                          />
                        </span>
                        <span className="relative">
                          {label}
                          <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Mini availability widget */}
                <div className="mt-7 inline-flex items-center gap-2 bg-cream/5 border border-cream/10 rounded-full pl-2 pr-3.5 py-1.5">
                  <span className="relative flex w-1.5 h-1.5 ml-0.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-bold text-cream/70 uppercase tracking-[0.15em]">
                    Online &middot; IST
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* ════════════════════════════════════════════════════════
            MASSIVE WORDMARK
          ════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        {/* Hairline rule */}
        <div className="border-t border-cream/10" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative pt-10 md:pt-14 pb-2 md:pb-4 select-none px-4"
          aria-hidden="true"
        >
          <div className="text-center leading-[0.85]">
            <div
              className="font-display font-extrabold tracking-tighter text-cream"
              style={{
                fontSize: "clamp(5rem, 22vw, 22rem)",
              }}
            >
              MED
              <span className="font-serif italic font-normal text-gold">
                clap
              </span>
            </div>
          </div>

          {/* Subtle gradient overlay so the wordmark feels grounded */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════
            BOTTOM STRIP — copyright, location, version
          ════════════════════════════════════════════════════════ */}
      <div className="relative border-t border-cream/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-5 md:py-6 text-[11.5px]">
            {/* Left: copyright */}
            <div className="flex items-center gap-3 text-cream/50 flex-wrap">
              <span>
                © {new Date().getFullYear()} MedClap.
              </span>
              <span className="hidden md:inline text-cream/20">|</span>
              <span className="italic">Bringing your vision to life.</span>
            </div>

            {/* Right: meta */}
            <div className="flex items-center gap-4 text-cream/50 flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                Made with{" "}
                <Coffee
                  className="w-3 h-3 inline text-gold"
                  strokeWidth={2.5}
                />{" "}
                in India
              </span>
              <span className="text-cream/20">|</span>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-cream/40">
                v1.0.0
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER LINK COLUMN (reusable for Nav + Resources)
   ============================================================ */

function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[10px] font-bold text-cream/40 uppercase tracking-[0.2em] mb-5">
        {label}
      </h3>
      <ul className="space-y-3">
        {links.map(({ label, href }) => {
          const isHash = href.startsWith("#");
          const LinkComp = isHash ? "a" : Link;
          return (
            <li key={label}>
              <LinkComp
                href={href}
                className="group inline-flex items-center gap-1.5 text-cream hover:text-gold transition-colors text-[14.5px] font-bold"
              >
                <span className="relative">
                  {label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-cream/0 group-hover:text-gold -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                  strokeWidth={2.5}
                />
              </LinkComp>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
