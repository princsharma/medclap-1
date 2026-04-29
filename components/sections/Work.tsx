"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   PROJECT COVERS — one stylized canvas per project
   Each cover is intentionally simple: background, big name,
   one decorative accent. Keeps the section clean.
   ============================================================ */

function FastESACover() {
  return (
    <div className="absolute inset-0 bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="font-serif italic font-normal text-gold leading-none transition-transform duration-700 group-hover:scale-105"
          style={{ fontSize: "clamp(4rem, 14vw, 10rem)" }}
        >
          Fast.
        </div>
      </div>
      <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-cream/15">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] font-bold text-cream uppercase tracking-widest">
          ESA Letter ✓
        </span>
      </div>
    </div>
  );
}

function MMJCover() {
  return (
    <div className="absolute inset-0 bg-cream-warm overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="font-display font-extrabold text-navy leading-none tracking-tight transition-transform duration-700 group-hover:scale-105"
          style={{ fontSize: "clamp(4.5rem, 16vw, 12rem)" }}
        >
          MMJ
        </div>
      </div>
      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
        <div>
          <div className="text-[10px] font-bold text-ink-soft uppercase tracking-widest">
            Patients booked
          </div>
          <div className="font-display text-3xl font-extrabold text-navy leading-none mt-1">
            3.2<span className="text-gold-deep">×</span>
          </div>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-navy text-cream flex items-center justify-center font-display font-extrabold text-lg rotate-[6deg] transition-transform duration-700 group-hover:rotate-[10deg]">
          ✦
        </div>
      </div>
    </div>
  );
}

function StackwiseCover() {
  return (
    <div className="absolute inset-0 bg-gold overflow-hidden">
      {/* Stacked rectangles forming a tower */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-105">
        <div className="bg-navy rounded-md w-32 h-3 -rotate-3 mb-1.5 shadow-sm" />
        <div className="bg-navy rounded-md w-44 h-3 rotate-2 mb-1.5 shadow-sm" />
        <div className="bg-navy rounded-md w-36 h-3 -rotate-1 mb-1.5 shadow-sm" />
        <div className="bg-cream rounded-md w-48 h-3 rotate-1 mb-1.5 shadow-sm" />
        <div className="bg-navy rounded-md w-40 h-3 -rotate-2 mb-1.5 shadow-sm" />
        <div className="bg-navy rounded-md w-44 h-3 rotate-1 shadow-sm" />
      </div>
      <div className="absolute bottom-7 left-7">
        <div
          className="font-display font-extrabold text-navy leading-none tracking-tight italic"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          stack/wise
        </div>
      </div>
    </div>
  );
}

function BloomCover() {
  return (
    <div className="absolute inset-0 bg-cream overflow-hidden">
      {/* Soft circular blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/30" />
      <div className="absolute top-1/3 -right-10 w-32 h-32 rounded-full bg-gold-deep/20" />
      <div className="absolute -bottom-12 -left-16 w-56 h-56 rounded-full bg-navy/8" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="font-serif italic font-normal text-gold-deep leading-none transition-transform duration-700 group-hover:scale-105"
          style={{ fontSize: "clamp(5rem, 16vw, 12rem)" }}
        >
          Bloom.
        </div>
      </div>

      <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 bg-navy/8 rounded-full px-3 py-1.5">
        <span className="text-[10px] font-bold text-navy uppercase tracking-widest">
          DTC · Wellness
        </span>
      </div>
    </div>
  );
}

function VertexCover() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,182,46,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(244,182,46,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Geometric V */}
      <svg
        className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 100 60 L 200 220 L 300 60"
          fill="none"
          stroke="#F4B62E"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Mini chart line going up */}
      <svg
        className="absolute bottom-7 left-7 right-7 h-12"
        viewBox="0 0 300 50"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 40 L 50 35 L 100 32 L 150 25 L 200 18 L 250 12 L 300 5"
          fill="none"
          stroke="#F4B62E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="300" cy="5" r="3" fill="#F4B62E" />
      </svg>

      <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 bg-cream/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-cream/15">
        <span className="text-[10px] font-bold text-gold uppercase tracking-widest">
          Vertex Capital
        </span>
      </div>
    </div>
  );
}

function HexaCover() {
  return (
    <div className="absolute inset-0 bg-cream-warm overflow-hidden">
      {/* Hexagon cluster background */}
      <svg
        className="absolute -right-12 -top-12 opacity-25 transition-transform duration-700 group-hover:rotate-[8deg]"
        width="280"
        height="280"
        viewBox="0 0 280 280"
      >
        <g fill="none" stroke="#1A2A5E" strokeWidth="2">
          <polygon points="140,40 200,75 200,145 140,180 80,145 80,75" />
          <polygon points="140,40 200,75 200,145 140,180 80,145 80,75" transform="translate(60, -10)" />
          <polygon points="140,40 200,75 200,145 140,180 80,145 80,75" transform="translate(-60, 60)" />
        </g>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="font-display font-extrabold text-navy leading-none tracking-tight transition-transform duration-700 group-hover:scale-105"
          style={{ fontSize: "clamp(4rem, 14vw, 10rem)" }}
        >
          HEXA
        </div>
      </div>

      {/* Color palette accent */}
      <div className="absolute bottom-7 left-7 flex gap-1.5">
        <div className="w-7 h-7 rounded-md bg-gold border border-divider shadow-sm" />
        <div className="w-7 h-7 rounded-md bg-navy shadow-sm" />
        <div className="w-7 h-7 rounded-md bg-gold-deep shadow-sm" />
      </div>
    </div>
  );
}

/* ============================================================
   PROJECTS DATA
   ============================================================ */

type Project = {
  name: string;
  category: string;
  description: string;
  cover: React.ComponentType;
  href: string;
};

const projects: Project[] = [
  {
    name: "Fast ESA Letter",
    category: "Healthtech · 2025",
    description: "Streamlined the application funnel and rebuilt paid acquisition.",
    cover: FastESACover,
    href: "#fast-esa",
  },
  {
    name: "My MMJ Doctor",
    category: "Telehealth · 2024",
    description: "Brand refresh + multi-channel patient acquisition.",
    cover: MMJCover,
    href: "#mmj-doctor",
  },
  {
    name: "Stackwise",
    category: "SaaS Platform",
    description: "Positioning, web rebuild, and content engine for B2B SaaS.",
    cover: StackwiseCover,
    href: "#stackwise",
  },
  {
    name: "Bloom & Co",
    category: "DTC · Wellness",
    description: "End-to-end brand identity and Shopify-first launch.",
    cover: BloomCover,
    href: "#bloom",
  },
  {
    name: "Vertex Capital",
    category: "Fintech · 2024",
    description: "Performance marketing and lifecycle email for a lending app.",
    cover: VertexCover,
    href: "#vertex",
  },
  {
    name: "Hexa Studios",
    category: "Creative · Studio",
    description: "Brand system and editorial content strategy for a design studio.",
    cover: HexaCover,
    href: "#hexa",
  },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".work-eyebrow", ".work-title", ".work-intro"], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-header",
          start: "top 80%",
        },
      });

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-20 md:py-28 bg-cream"
    >
      <Container>
        {/* ════════ HEADER ════════ */}
        <div className="work-header grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="md:col-span-8">
            <div className="work-eyebrow inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6">
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                <Briefcase
                  className="w-2.5 h-2.5 text-navy"
                  strokeWidth={2.75}
                />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Work
              </span>
            </div>

            <h2
              className="work-title font-display font-extrabold text-navy tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Selected{" "}
              <span className="font-serif italic font-normal text-gold-deep">
                work.
              </span>
            </h2>
          </div>

          <p className="work-intro md:col-span-4 text-sm md:text-[15px] text-ink-soft leading-relaxed md:text-right">
            A look at some of the brands we&apos;ve helped — and the
            outcomes we&apos;ve delivered.
          </p>
        </div>

        {/* ════════ PROJECTS GRID ════════ */}
        <div className="work-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {projects.map((project) => {
            const Cover = project.cover;
            return (
              <a
                key={project.name}
                href={project.href}
                className="project-card group relative block aspect-[4/3] rounded-2xl overflow-hidden border border-divider-soft transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Cover visual */}
                <Cover />

                {/* Hover info overlay — slides up from bottom */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] z-10">
                  <div className="m-3 md:m-4 bg-cream/95 backdrop-blur-md rounded-xl p-4 flex items-center justify-between gap-4 border border-cream shadow-lg">
                    <div className="min-w-0">
                      <div className="font-display text-base md:text-lg font-extrabold text-navy leading-tight tracking-tight truncate">
                        {project.name}
                      </div>
                      <div className="text-[11px] font-medium text-ink-soft mt-0.5 truncate">
                        {project.category}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-[-12deg]">
                      <ArrowUpRight
                        className="w-4 h-4 text-gold"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* ════════ "VIEW ALL" LINK ════════ */}
        <div className="mt-30 md:mt-24 flex justify-center">
         <a
  href="#"
  className="group inline-flex items-center gap-3 text-sm font-bold text-navy uppercase tracking-[0.2em] hover:gap-5 transition-all duration-300"
>
  <span className="w-10 h-[2px] bg-navy transition-all duration-300 group-hover:w-16" />
  View all case studies
  <ArrowUpRight
    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-[-15deg]"
    strokeWidth={2.5}
  />
</a>
        </div>
      </Container>
    </section>
  );
}
