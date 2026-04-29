"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  Plus,
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Container from "@/components/ui/Container";

/* ============================================================
   MENU ITEMS
   ============================================================ */

const menuItems = [
  { num: "01", label: "Services", href: "#services" },
  { num: "02", label: "Work", href: "#work" },
  { num: "03", label: "Reviews", href: "#reviews" },
  { num: "04", label: "FAQ", href: "#faq" },
  { num: "05", label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/medclap", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/@MedClap", label: "Youtube" },
  { Icon: Instagram, href: "https://www.instagram.com/lifeatmedclap", label: "Instagram" },
];

/* ============================================================
   HEADER COMPONENT
   ============================================================ */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  /* ─── Lock body scroll & stop Lenis when menu is open ─── */
  useEffect(() => {
    if (!lenis) return;
    if (isOpen) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  /* ─── Track scroll to toggle header background ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── Esc key closes menu ─── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ─── Smooth scroll via Lenis when nav clicked ─── */
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href) as HTMLElement | null;
      if (target && lenis) {
        lenis.scrollTo(target, { offset: -80 });
      } else if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 600); // wait for menu close animation
  };

  /* ─── Logo click scrolls to top ─── */
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <>
      {/* ════════ HEADER BAR ════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled && !isOpen
            ? "bg-cream/85 backdrop-blur-md border-b border-divider-soft"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-5 md:py-6">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className={`flex items-center gap-2.5 transition-colors duration-500 ${
                isOpen ? "text-cream" : "text-navy"
              }`}
              aria-label="MedClap home"
            >
            <img width={56}
    height={56}
     src="./images/main-logo.png" alt="" />
            </Link>

            {/* Menu / Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className={`group inline-flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5 transition-colors duration-300 ${
                isOpen
                  ? "bg-cream text-navy hover:bg-gold"
                  : "bg-navy text-cream hover:bg-ink"
              }`}
            >
              <span className="text-[13px] font-semibold">
                {isOpen ? "Close" : "Menu"}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isOpen
                    ? "bg-navy rotate-[135deg]"
                    : "bg-gold group-hover:rotate-90"
                }`}
              >
                <Plus
                  className={`w-3.5 h-3.5 transition-colors duration-300 ${
                    isOpen ? "text-cream" : "text-navy"
                  }`}
                  strokeWidth={3}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/* ════════ FULL-SCREEN MENU OVERLAY ════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 bg-navy text-cream overflow-y-auto"
          >
            {/* Background dot pattern */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.2) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Soft gold glow accents */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

            <Container>
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-24 md:pt-28 pb-16 min-h-screen">
                {/* ════════ LEFT — MENU ITEMS ════════ */}
                <nav className="lg:col-span-7 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-6 lg:mb-8 flex items-center gap-2"
                  >
                    <span className="w-6 h-px bg-gold" />
                    Navigate
                  </motion.div>

                  <ul className="flex flex-col">
                    {menuItems.map((item, i) => (
                      <motion.li
                        key={item.label}
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.4 + i * 0.08,
                          duration: 0.7,
                          ease: [0.2, 0.8, 0.2, 1],
                        }}
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="group relative w-full flex items-center gap-3 md:gap-6 border-b border-cream/15 hover:border-gold py-3 md:py-4 lg:py-5 text-left transition-colors duration-300"
                        >
                          {/* Number */}
                          <span className="font-sans text-[11px] md:text-xs font-bold text-gold uppercase tracking-widest leading-none flex-shrink-0">
                            {item.num}
                          </span>

                          {/* Text with vertical-swap hover */}
                          <span
                            className="flex-1 relative inline-block overflow-hidden"
                            style={{ lineHeight: 1 }}
                          >
                            {/* Visible layer */}
                            <span
                              className="block font-display font-extrabold uppercase tracking-tight transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full"
                              style={{
                                fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
                              }}
                            >
                              {item.label}
                            </span>
                            {/* Hover-reveal italic gold layer */}
                            <span
                              className="absolute inset-0 block font-serif italic font-normal text-gold translate-y-full transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
                              style={{
                                fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
                              }}
                            >
                              {item.label}
                            </span>
                          </span>

                          {/* Arrow */}
                          <span className="flex-shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-1">
                            <ArrowUpRight
                              className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-cream group-hover:text-gold transition-colors duration-300"
                              strokeWidth={2}
                            />
                          </span>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* ════════ RIGHT — INFO PANEL ════════ */}
                <aside className="lg:col-span-5 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="space-y-8"
                  >
                    {/* Status pill */}
                    <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/15 rounded-full pl-2 pr-3.5 py-1.5">
                      <span className="relative flex w-2 h-2 ml-0.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span className="text-[11px] font-bold text-cream uppercase tracking-[0.15em]">
                        Available for new projects
                      </span>
                    </div>

                    {/* Get In Touch */}
                    <div>
                      <h3 className="text-[10px] font-bold text-gold uppercase tracking-[0.22em] mb-4 flex items-center gap-2">
                        <span className="w-5 h-px bg-gold" />
                        Get in touch
                      </h3>
                      <div className="space-y-3">
                        <a
                          href="mailto:deep@medclap.com"
                          className="group flex items-center gap-3 hover:text-gold transition-colors"
                        >
                          <span className="w-9 h-9 rounded-lg bg-cream/10 group-hover:bg-gold/20 border border-cream/10 flex items-center justify-center transition-colors flex-shrink-0">
                            <Mail
                              className="w-4 h-4 text-gold"
                              strokeWidth={2.25}
                            />
                          </span>
                          <span className="font-display text-base md:text-lg font-extrabold tracking-tight">
                            deep@medclap.com
                          </span>
                        </a>
                        <a
                          href="tel:+919996619432"
                          className="group flex items-center gap-3 hover:text-gold transition-colors"
                        >
                          <span className="w-9 h-9 rounded-lg bg-cream/10 group-hover:bg-gold/20 border border-cream/10 flex items-center justify-center transition-colors flex-shrink-0">
                            <Phone
                              className="w-4 h-4 text-gold"
                              strokeWidth={2.25}
                            />
                          </span>
                          <span className="font-display text-base md:text-lg font-extrabold tracking-tight">
                           +1 (201) 632-5548
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Social */}
                    <div>
                      <h3 className="text-[10px] font-bold text-gold uppercase tracking-[0.22em] mb-4 flex items-center gap-2">
                        <span className="w-5 h-px bg-gold" />
                        Follow us
                      </h3>
                      <div className="flex gap-2">
                        {socials.map(({ Icon, href, label }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="group w-10 h-10 rounded-lg bg-cream/10 hover:bg-gold border border-cream/10 hover:border-gold flex items-center justify-center transition-colors"
                          >
                            <Icon
                              className="w-4 h-4 text-cream group-hover:text-navy transition-colors"
                              strokeWidth={2}
                            />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Footer line */}
                    <div className="pt-8 border-t border-cream/10">
                      <div className="text-[11px] text-cream/50 leading-relaxed">
                        © {new Date().getFullYear()} MedClap.
                      </div>
                      <div className="text-[11px] text-cream/40 italic mt-1">
                        Bringing your vision to life.
                      </div>
                    </div>
                  </motion.div>
                </aside>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}