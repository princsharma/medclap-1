"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ArrowUpRight, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   TESTIMONIAL DATA
   Each quote is tied to a brand from the Work section
   so the page reads as one continuous story.
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
      "Proactive, precise, and easy to work with — no hand-holding needed, just smooth execution from kickoff to launch.",
    name: "Sarah Chen",
    role: "VP Marketing · Fast ESA Letter",
    avatar: { bg: "#F4B62E", color: "#1A2A5E", initials: "SC" },
  },
  {
    rating: 5.0,
    quote:
      "Felt like an embedded team with zero friction. Reports are clear, recommendations sharp, and the work moves the needle.",
    name: "Maya Collins",
    role: "Head of Growth · Stackwise",
    avatar: { bg: "#1A2A5E", color: "#F4B62E", initials: "MC" },
  },
  {
    rating: 4.9,
    quote:
      "We came in skeptical. Three months later, our paid acquisition is delivering 4× the leads at half the cost. They earned it.",
    name: "Jesse Leigh",
    role: "CEO · Bloom & Co",
    avatar: { bg: "#D89A14", color: "#FAF6EE", initials: "JL" },
  },
  {
    rating: 4.9,
    quote:
      "We tried four agencies before MedClap. This team gets it — strategy first, then craft. Wish we'd found them sooner.",
    name: "Benjamin Daul",
    role: "Director of Brand · Vertex Capital",
    avatar: { bg: "#2B3D7A", color: "#F4B62E", initials: "BD" },
  },
];

/* ============================================================
   AVATAR STACK DATA (for the left rating card)
   ============================================================ */

const stackAvatars: Avatar[] = [
  { bg: "#F4B62E", color: "#1A2A5E", initials: "SC" },
  { bg: "#1A2A5E", color: "#F4B62E", initials: "MC" },
  { bg: "#D89A14", color: "#FAF6EE", initials: "JL" },
  { bg: "#2B3D7A", color: "#F4B62E", initials: "BD" },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".reviews-eyebrow", ".reviews-title", ".reviews-intro"], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reviews-header",
          start: "top 80%",
        },
      });

      gsap.from(".reviews-stats-card", {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reviews-grid",
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reviews-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative py-20 md:py-28 bg-cream"
    >
      <Container>
        {/* ════════ HEADER ════════ */}
        <div className="reviews-header grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="md:col-span-8">
            <div className="reviews-eyebrow inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6">
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                <Star
                  className="w-2.5 h-2.5 text-navy fill-navy"
                  strokeWidth={2.75}
                />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Reviews
              </span>
            </div>

            <h2
              className="reviews-title font-display font-extrabold text-navy tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Success{" "}
              <span className="font-serif italic font-normal text-gold-deep">
                stories.
              </span>
            </h2>
          </div>

          <p className="reviews-intro md:col-span-4 text-sm md:text-[15px] text-ink-soft leading-relaxed md:text-right">
            Discover how our growth-focused approach helps ambitious brands
            scale smarter and faster than the competition.
          </p>
        </div>

        {/* ════════ MAIN GRID ════════ */}
        <div className="reviews-grid grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {/* ─── LEFT: STATS CARD ─── */}
          <div className="reviews-stats-card lg:col-span-4 bg-navy rounded-3xl p-7 md:p-8 text-cream relative overflow-hidden flex flex-col justify-between min-h-[460px] lg:min-h-0">
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
              {/* Avatar stack */}
              <div className="flex -space-x-3 mb-4 group/stack">
                {stackAvatars.map((a, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center text-[12px] font-display font-extrabold transition-all duration-500 group-hover/stack:-space-x-2"
                    style={{
                      background: a.bg,
                      color: a.color,
                      transitionDelay: `${i * 30}ms`,
                    }}
                  >
                    {a.initials}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-navy bg-cream/10 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-gold">
                  +136
                </div>
              </div>

              {/* Trust copy */}
              <div className="font-display text-lg font-extrabold text-cream tracking-tight leading-tight mb-1.5">
                Trusted by 140+ brands.
              </div>
              <div className="text-[11px] font-bold text-gold uppercase tracking-[0.18em] mb-6">
                ✦ They hit their targets — you&apos;re next.
              </div>

              {/* Leave a review button */}
              <a
                href="#"
                className="group inline-flex items-center justify-between gap-3 w-full bg-cream text-navy rounded-full pl-5 pr-3 py-3 hover:bg-gold transition-colors duration-300"
              >
                <span className="font-bold text-[14px]">Leave a review</span>
                <span className="w-8 h-8 rounded-full bg-navy flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg]">
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-gold"
                    strokeWidth={2.5}
                  />
                </span>
              </a>
            </div>
          </div>

          {/* ─── RIGHT: TESTIMONIAL GRID 2×2 ─── */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card group bg-cream-warm border border-divider-soft rounded-3xl p-6 md:p-7 flex flex-col transition-all duration-500 hover:border-divider hover:-translate-y-1 hover:shadow-md relative"
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

                {/* Subtle hover accent line at bottom */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-gold transition-all duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
