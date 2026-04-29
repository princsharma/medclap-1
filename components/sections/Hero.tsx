"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  Sparkles,
  MousePointer2,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Star,
  Activity,
} from "lucide-react";
import Container from "@/components/ui/Container";

// Register GSAP plugin once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ─── INITIAL HEADLINE REVEAL ─── */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-eyebrow", {
        y: 16,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-word",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: 0.07,
          },
          "-=0.3"
        )
        .from(
          ".hero-icon",
          {
            scale: 0,
            opacity: 0,
            rotate: -90,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.8)",
          },
          "-=0.7"
        )
        .from(
          ".hero-sub",
          { y: 16, opacity: 0, duration: 0.6 },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        );

      /* ─── BENTO CARDS ON SCROLL ─── */
      gsap.from(".bento-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      /* ─── PARALLAX ON HEADLINE ICONS ─── */
      gsap.to(".hero-icon", {
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={heroRef}
  id="home"
  className="relative min-h-screen pt-20 md:pt-28 overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(244,182,46,0.2),transparent_65%),radial-gradient(circle_at_85%_40%,rgba(244,182,46,0.12),transparent_50%),linear-gradient(to_bottom,#FAF6EE,#FAF6EE)]"
>
      <Container>
        {/* ════════════════════════════════════════════
             HERO HEADLINE
             ════════════════════════════════════════════ */}
        <div className="text-center max-w-6xl mx-auto">
          {/* Eyebrow badge */}
          <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-warm border border-divider-soft text-xs font-semibold text-navy tracking-wider uppercase mb-7">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            Trusted by 140+ brands worldwide
          </div>

          {/* Massive headline */}
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-[0.92] text-navy">
            {/* Line 1: "WE BUILD [icons] BRANDS" */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-2 text-[clamp(2rem,8vw,6.5rem)]">
              <span className="overflow-hidden inline-block">
                <span className="hero-word inline-block">We Build</span>
              </span>

              {/* Inline icon cluster */}
              <span className="inline-flex items-center -space-x-3 md:-space-x-4 mx-1 md:mx-2">
                <span className="hero-icon w-[0.85em] h-[0.85em] rounded-full bg-cream-warm border border-divider flex items-center justify-center shadow-sm relative z-10">
                  <TrendingUp
                    className="w-[42%] h-[42%] text-gold-deep"
                    strokeWidth={2.5}
                  />
                </span>
                <span className="hero-icon w-[0.85em] h-[0.85em] rounded-full bg-navy flex items-center justify-center shadow-md relative z-20">
                  <Sparkles
                    className="w-[42%] h-[42%] text-gold"
                    strokeWidth={2.5}
                  />
                </span>
                <span className="hero-icon w-[0.85em] h-[0.85em] rounded-full bg-gold flex items-center justify-center shadow-sm relative z-10">
                  <MousePointer2
                    className="w-[42%] h-[42%] text-navy"
                    strokeWidth={2.5}
                  />
                </span>
              </span>

              <span className="overflow-hidden inline-block">
                <span className="hero-word inline-block">Brands</span>
              </span>
            </div>

            {/* Line 2: "THAT actually GROW." */}
            <div className="mt-1 md:mt-2 flex flex-wrap items-baseline justify-center gap-x-4 md:gap-x-6 text-[clamp(2rem,8vw,6.5rem)]">
              <span className="overflow-hidden inline-block">
                <span className="hero-word inline-block">That</span>
              </span>
              <span className="overflow-hidden inline-block">
                <span className="hero-word inline-block font-serif italic font-normal text-gold-deep lowercase tracking-normal">
                  actually
                </span>
              </span>
              <span className="overflow-hidden inline-block">
                <span className="hero-word inline-block">Grow.</span>
              </span>
            </div>
          </h1>

          {/* Subhead */}
          <p className="hero-sub mt-7 md:mt-9 text-base md:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
            Strategy, design, and campaigns engineered for measurable
            revenue — not vanity metrics. We&apos;ve helped 140+ brands turn
            ideas into impact.
          </p>

          {/* CTAs */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <motion.a
              href="#contact"
              className="hero-cta group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-navy text-cream font-semibold text-[15px] hover:bg-ink transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a free quote
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </motion.a>
            <motion.a
              href="#work"
              className="hero-cta group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-navy text-navy font-semibold text-[15px] hover:bg-navy hover:text-cream transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              See our work
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </motion.a>
          </div>
        </div>

        {/* ════════════════════════════════════════════
             BENTO GRID
             ════════════════════════════════════════════ */}
        <div className="bento-grid mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* ─── CARD 1: Strategy ─── */}
          <motion.div
            className="bento-card group md:col-span-4 md:row-span-2 bg-cream-warm rounded-3xl p-7 flex flex-col justify-between min-h-[300px] md:min-h-[480px] relative overflow-hidden border border-divider-soft"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative z-10">
              <span className="text-xs font-bold text-ink-soft uppercase tracking-widest">
                01 / Strategy
              </span>
              <h3 className="font-display text-3xl md:text-[34px] text-navy font-bold leading-[1.05] mt-3 tracking-tight">
                Smart strategy.
                <br />
                <span className="font-serif italic font-normal text-gold-deep">
                  Sharper
                </span>{" "}
                results.
              </h3>
            </div>

            {/* Rotating gold ring decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-24 md:-mr-20 pointer-events-none">
              <div className="w-72 h-72 rounded-full border-[18px] border-gold/25 animate-spin-slow" />
              <div
                className="absolute inset-6 rounded-full border-[10px] border-navy/10 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "20s" }}
              />
              <div className="absolute inset-16 rounded-full bg-gold/40 backdrop-blur" />
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-sm text-ink-soft leading-relaxed mb-5 max-w-[85%]">
                A 90-day roadmap built for your business — not a template.
                Audit, plan, build, optimize.
              </p>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-cream text-[13px] font-semibold hover:bg-ink transition-colors group/btn"
              >
                Learn more
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </motion.div>

          {/* ─── CARD 2: Showcase ─── */}
          <motion.div
            className="bento-card md:col-span-5 md:row-span-2 bg-navy rounded-3xl p-7 relative overflow-hidden min-h-[420px] md:min-h-[480px]"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Dot pattern background */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-transparent to-navy-deep/60" />

            {/* Big italic M decoration */}
            <div className="absolute -bottom-24 -right-10 font-serif text-[22rem] md:text-[28rem] leading-none italic text-gold/15 font-normal pointer-events-none select-none">
              M
            </div>

            {/* Floating: Live badge */}
            <motion.div
              className="absolute top-6 left-6 bg-cream rounded-full px-3 py-1.5 flex items-center gap-2 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold text-navy tracking-wide">
                Live · 23 active campaigns
              </span>
            </motion.div>

            {/* Floating: Growth chart */}
            {/* <motion.div
              className="absolute top-6 right-6 bg-cream z-[9999] rounded-2xl p-3.5 shadow-xl border border-divider-soft"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Activity
                  className="w-3 h-3 text-gold-deep"
                  strokeWidth={2.5}
                />
                <span className="text-[10px] font-bold text-ink-soft uppercase tracking-wider">
                  Avg ROI · Q1
                </span>
              </div>
              <div className="font-display text-2xl font-extrabold text-navy leading-none">
                +312<span className="text-gold-deep">%</span>
              </div>
              <div className="flex items-end gap-[3px] mt-2 h-6">
                {[28, 42, 35, 58, 75, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-gold-deep to-gold rounded-t-sm"
                    style={{ height: `${h * 0.22}rem` }}
                  />
                ))}
              </div>
            </motion.div> */}

            {/* Floating: Partner badge */}
            <motion.div
              className="absolute bottom-4 left-6 bg-cream rounded-2xl p-2.5 shadow-xl flex items-center gap-2.5 border border-divider-soft"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-navy font-display font-extrabold text-base">
                G
              </div>
              <div>
                <div className="text-[11px] font-bold text-navy">
                  Google Premier Partner
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 fill-gold text-gold"
                    />
                  ))}
                  <span className="text-[10px] text-ink-soft ml-1 font-medium">
                    4.9 · 318 reviews
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating: Leads counter */}
            <motion.div
              className="absolute bottom-6 right-6 bg-gold rounded-full px-3.5 py-2 shadow-xl flex items-center gap-2"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Heart
                className="w-3.5 h-3.5 fill-navy text-navy"
                strokeWidth={2}
              />
              <span className="text-[11px] font-bold text-navy">
                8.2M leads delivered
              </span>
            </motion.div>

            {/* Center statement */}
            <div className="relative h-full flex items-center justify-center min-h-[380px] md:min-h-[420px]">
              <div className="text-center px-4">
                <div className="text-gold/70 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                  ✦ The MedClap Method ✦
                </div>
                <div className="font-display text-cream font-extrabold leading-[0.95] text-[clamp(2.5rem,6vw,4.5rem)]">
                  Built for
                  <br />
                  <span className="font-serif italic font-normal text-gold">
                    measurable
                  </span>
                  <br />
                  impact.
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── CARD 3: Trust stat ─── */}
          <motion.div
            className="bento-card md:col-span-3 bg-cream-warm rounded-3xl p-6 border border-divider-soft min-h-[200px] md:min-h-[230px] flex flex-col justify-between relative overflow-hidden"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-ink-soft uppercase tracking-widest">
                Trusted by
              </span>
              <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
                <Heart
                  className="w-3.5 h-3.5 fill-gold-deep text-gold-deep"
                  strokeWidth={2}
                />
              </div>
            </div>

            <div>
              <div className="font-display text-5xl md:text-[56px] font-extrabold text-navy leading-none tracking-tight">
                140<span className="text-gold-deep">+</span>
              </div>
              <div className="text-[13px] text-ink-soft mt-2 leading-snug">
                Active brand partners
                <br />
                in 12 countries.
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {[
                  { bg: "#F4B62E", c: "#1A2A5E", l: "R" },
                  { bg: "#1A2A5E", c: "#F4B62E", l: "M" },
                  { bg: "#D89A14", c: "#FAF6EE", l: "S" },
                  { bg: "#2B3D7A", c: "#F4B62E", l: "L" },
                ].map((a, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-cream-warm flex items-center justify-center text-[11px] font-display font-bold"
                    style={{ background: a.bg, color: a.c }}
                  >
                    {a.l}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-cream-warm bg-navy flex items-center justify-center text-[10px] font-bold text-gold">
                  +136
                </div>
              </div>
              <ArrowUpRight
                className="w-5 h-5 text-navy"
                strokeWidth={2.5}
              />
            </div>
          </motion.div>

          {/* ─── CARD 4: Healthcare niche ─── */}
          <motion.div
            className="bento-card md:col-span-3 bg-navy rounded-3xl p-6 text-cream min-h-[200px] md:min-h-[230px] flex flex-col justify-between relative overflow-hidden"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Decorative gold rings */}
            <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-gold/10" />
            <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-gold/20" />
            <div className="absolute right-3 top-3 w-7 h-7 rounded-full bg-gold flex items-center justify-center">
              <Sparkles
                className="w-3.5 h-3.5 text-navy"
                strokeWidth={2.5}
              />
            </div>

            <div className="relative">
              <span className="text-[11px] font-bold text-gold uppercase tracking-widest">
                Specialty
              </span>
              <h3 className="font-display text-xl md:text-[22px] font-bold mt-2 leading-[1.1] tracking-tight">
                Built for B2B
                <br />
                <span className="font-serif italic font-normal text-gold">
                  healthcare
                </span>
                <span className="font-display"> & wellness.</span>
              </h3>
            </div>

            <div className="relative">
              <div className="bg-cream/[0.06] backdrop-blur-sm rounded-xl p-2.5 flex items-center justify-between border border-cream/10">
                <div>
                  <div className="text-[10px] text-cream/60 font-semibold uppercase tracking-wider">
                    Active Engagements
                  </div>
                  <div className="text-[13px] font-bold text-cream mt-0.5">
                    28 healthcare brands
                  </div>
                </div>
                <div className="flex -space-x-1.5">
                  {[
                    { bg: "#F4B62E", l: "F" },
                    { bg: "#D89A14", l: "M" },
                    { bg: "#F8CB60", l: "C" },
                  ].map((a, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-navy text-[10px] font-display font-bold flex items-center justify-center"
                      style={{ background: a.bg, color: "#1A2A5E" }}
                    >
                      {a.l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
