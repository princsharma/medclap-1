"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   PROJECTS DATA
   To use a real image: set `image` to the path inside /public.
   To fall back to a stylized cover: leave `image` undefined
   and provide a `cover` component instead.
   ============================================================ */

type Project = {
  name: string;
  category: string;
  description: string;
  href: string;
  image?: string;          // path under /public, e.g. "/work/fast-esa.jpg"
  cover?: React.ComponentType; // fallback stylized cover (optional)
  badge?: string;          // small label that floats over the image (top-left)
  badgeAccent?: "navy" | "cream"; // controls badge color theme
};

const projects: Project[] = [
  {
    name: "Fast ESA Letter",
    category: "Healthtech · 2025",
    description: "Streamlined the application funnel and rebuilt paid acquisition.",
    href: "#fast-esa",
    image: "/images/fast-esa.jpeg",
    badge: "Fast ESA Letter ✓",
    badgeAccent: "cream",
  },
  {
    name: "My MMJ Doctor",
    category: "Telehealth · 2024",
    description: "Brand refresh + multi-channel patient acquisition.",
    href: "#mmj-doctor",
    image: "/images/mymmj.jpg",
    badge: "Telehealth",
    badgeAccent: "cream",
  },
  {
    name: "Myesatherapist",
    category: "Telehealth",
    description: "Positioning, web rebuild, and content engine for Telehealth.",
    href: "#stackwise",
    image: "/images/my-esa.jpg",
    badge: "Telehealth",
    badgeAccent: "cream",
  },
{
  name: "Ongo Weight Loss",
  category: "Healthcare · Wellness",
  description: "Conversion-focused website and patient acquisition funnel for a medical weight loss brand, including landing pages, CRM integration, and paid growth strategy.",
  href: "#ongo-weight-loss",
  image: "/images/ongo.png",
  badge: "Healthcare",
  badgeAccent: "navy",
},
 {
  name: "SRB Truck & Trailer Repair Edmonton",
  category: "Automotive · 2024",
  description: "Website design and local SEO for a truck and trailer repair service in Edmonton, focused on roadside assistance and heavy-duty vehicle support.",
  href: "#edmonton-repair",
  image: "/images/srb-100.jpg",
  badge: "Automotive",
  badgeAccent: "cream",
},
  {
    name: "Fast ESA Letter",
    category: "Healthtech · 2025",
    description: "Streamlined the application funnel and rebuilt paid acquisition.",
    href: "#fast-esa",
    image: "/images/fast-esa.jpeg",
    badge: "Fast ESA Letter ✓",
    badgeAccent: "cream",
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
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* ════════ "VIEW ALL" LINK ════════ */}
        <div className="mt-16 md:mt-24 flex justify-center">
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

/* ============================================================
   PROJECT CARD
   ============================================================ */

function ProjectCard({ project }: { project: Project }) {
  const { name, category, href, image, cover: Cover, badge, badgeAccent } = project;
  const isCreamBadge = badgeAccent === "cream";

  return (
    <a
      href={href}
      className="project-card group relative block aspect-[4/3] rounded-2xl overflow-hidden border border-divider-soft transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Cover — real image OR stylized fallback */}
      {image ? (
        <div className="absolute inset-0 bg-navy">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Soft gradient overlay so the badge stays readable on light photos */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
        </div>
      ) : Cover ? (
        <Cover />
      ) : null}

      {/* Optional badge over the image */}
      {badge && (
        <div
          className={`absolute top-6 left-6 inline-flex items-center gap-1.5 backdrop-blur-sm rounded-full px-3 py-1.5 border ${
            isCreamBadge
              ? "bg-cream/15 border-cream/20"
              : "bg-navy/20 border-navy/15"
          }`}
        >
          {isCreamBadge && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          )}
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${
              isCreamBadge ? "text-cream" : "text-navy"
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Hover info overlay — slides up from bottom */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] z-10">
        <div className="m-3 md:m-4 bg-cream/95 backdrop-blur-md rounded-xl p-4 flex items-center justify-between gap-4 border border-cream shadow-lg">
          <div className="min-w-0">
            <div className="font-display text-base md:text-lg font-extrabold text-navy leading-tight tracking-tight truncate">
              {name}
            </div>
            <div className="text-[11px] font-medium text-ink-soft mt-0.5 truncate">
              {category}
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-[-12deg]">
            <ArrowUpRight className="w-4 h-4 text-gold" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </a>
  );
}