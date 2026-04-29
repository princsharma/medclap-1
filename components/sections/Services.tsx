"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  FileText,
  Palette,
  Search,
  Mail,
  Share2,
  Folder,
  Star,
  Heart,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/ui/Container";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   VISUAL CARDS — one stylized mock-deliverable per service
   ============================================================ */

function AnalyticsVisual() {
  return (
    <div className="relative w-full h-full bg-navy overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Floating dashboard card */}
      <div className="absolute top-7 left-6 right-6 bg-cream rounded-2xl p-4 shadow-2xl rotate-[-2deg] transition-transform duration-700 group-hover:rotate-[-1deg] group-hover:translate-y-[-4px]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[9px] font-bold text-ink-soft uppercase tracking-widest">
              Avg ROI · 90 days
            </div>
            <div className="font-display text-2xl font-extrabold text-navy leading-none mt-1">
              +312<span className="text-gold-deep">%</span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
            <BarChart3 className="w-3.5 h-3.5 text-gold-deep" strokeWidth={2.5} />
          </div>
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-1 h-9">
          {[35, 50, 42, 65, 58, 75, 88, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-gold-deep to-gold rounded-t-sm"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Floating KPI card bottom-right */}
      <div className="absolute bottom-12 right-5 bg-gold rounded-xl px-3 py-2 shadow-xl rotate-[3deg] transition-transform duration-700 group-hover:rotate-[5deg]">
        <div className="text-[9px] font-bold text-navy/70 uppercase tracking-wider">
          Conversion
        </div>
        <div className="font-display text-sm font-extrabold text-navy">
          4.7×
        </div>
      </div>

      {/* Floating KPI card bottom-left */}
      <div className="absolute bottom-12 left-5 bg-cream rounded-xl px-3 py-2 shadow-xl rotate-[-4deg] transition-transform duration-700 group-hover:rotate-[-6deg]">
        <div className="text-[9px] font-bold text-ink-soft uppercase tracking-wider">
          CAC
        </div>
        <div className="font-display text-sm font-extrabold text-navy">
          −38%
        </div>
      </div>
    </div>
  );
}

function ContentVisual() {
  return (
    <div className="relative w-full h-full bg-cream-warm overflow-hidden">
      {/* Stacked article previews */}
      <div className="absolute inset-x-6 top-7 space-y-3">
        {/* Top article */}
        <div className="bg-cream border border-divider rounded-xl p-3.5 shadow-md rotate-[-1.5deg] transition-transform duration-700 group-hover:rotate-[-2.5deg] group-hover:translate-x-[-3px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-bold text-gold-deep uppercase tracking-widest">
              ★ Featured
            </span>
            <span className="text-[9px] text-ink-soft">5 min read</span>
          </div>
          <div className="font-display text-[13px] font-bold text-navy leading-tight mb-2">
            How we 3× organic traffic in 90 days.
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-divider rounded-full w-full" />
            <div className="h-1 bg-divider rounded-full w-[85%]" />
            <div className="h-1 bg-divider rounded-full w-[60%]" />
          </div>
        </div>

        {/* Middle article */}
        <div className="bg-cream border border-divider rounded-xl p-3.5 shadow-sm rotate-[1deg] transition-transform duration-700 group-hover:rotate-[2deg]">
          <div className="text-[9px] font-bold text-ink-soft uppercase tracking-widest mb-1.5">
            Strategy
          </div>
          <div className="font-display text-[12px] font-bold text-navy leading-tight mb-2">
            Topic clusters that compound.
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-divider rounded-full w-full" />
            <div className="h-1 bg-divider rounded-full w-[70%]" />
          </div>
        </div>

        {/* Bottom article (peek) */}
        <div className="bg-cream border border-divider rounded-xl p-3 shadow-sm rotate-[-0.5deg] transition-transform duration-700 group-hover:rotate-[-1.5deg]">
          <div className="text-[9px] font-bold text-navy/60 uppercase tracking-widest mb-1">
            Editorial
          </div>
          <div className="font-display text-[11px] font-bold text-navy leading-tight">
            The newsletter playbook.
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div className="relative w-full h-full bg-navy overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Big italic Aa */}
      <div className="absolute top-4 left-6 font-serif italic font-normal text-cream leading-none transition-transform duration-700 group-hover:translate-y-[-4px]" style={{ fontSize: "8rem" }}>
        Aa
      </div>

      {/* Color palette swatches */}
      <div className="absolute bottom-12 left-6 right-6 flex gap-2 transition-transform duration-700 group-hover:translate-x-[3px]">
        <div className="flex-1 h-12 rounded-lg bg-gold flex items-end p-1.5">
          <span className="text-[8px] font-bold text-navy">#F4B62E</span>
        </div>
        <div className="flex-1 h-12 rounded-lg bg-cream flex items-end p-1.5">
          <span className="text-[8px] font-bold text-navy">#FAF6EE</span>
        </div>
        <div className="flex-1 h-12 rounded-lg bg-navy-soft border border-cream/20 flex items-end p-1.5">
          <span className="text-[8px] font-bold text-cream/80">#2B3D7A</span>
        </div>
        <div className="flex-1 h-12 rounded-lg bg-ink flex items-end p-1.5">
          <span className="text-[8px] font-bold text-cream/80">#0F1018</span>
        </div>
      </div>

      {/* Floating brand badge */}
      <div className="absolute top-7 right-5 bg-gold rounded-full px-2.5 py-1 shadow-xl rotate-[6deg] transition-transform duration-700 group-hover:rotate-[10deg]">
        <span className="text-[9px] font-bold text-navy uppercase tracking-wider">
          ✦ Brand v2.0
        </span>
      </div>
    </div>
  );
}

function SEOVisual() {
  return (
    <div className="relative w-full h-full bg-cream-warm overflow-hidden">
      {/* Mock browser bar */}
      <div className="absolute inset-x-5 top-6 bg-cream rounded-xl shadow-lg overflow-hidden border border-divider transition-transform duration-700 group-hover:translate-y-[-3px]">
        {/* Browser chrome */}
        <div className="bg-cream-warm/60 px-3 py-2 flex items-center gap-1.5 border-b border-divider">
          <div className="w-1.5 h-1.5 rounded-full bg-divider" />
          <div className="w-1.5 h-1.5 rounded-full bg-divider" />
          <div className="w-1.5 h-1.5 rounded-full bg-divider" />
          <div className="ml-2 flex-1 h-3 bg-cream rounded text-[7px] flex items-center px-1.5 text-ink-soft font-mono">
            google.com
          </div>
        </div>
        {/* SERP results */}
        <div className="p-3 space-y-2.5">
          <div className="bg-gold/15 -mx-1 px-1.5 py-1 rounded">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-3 h-3 rounded-full bg-gold flex items-center justify-center">
                <span className="text-[7px] font-bold text-navy">1</span>
              </div>
              <span className="text-[8px] text-ink-soft font-mono">medclap.com</span>
            </div>
            <div className="text-[10px] font-bold text-navy leading-tight">
              MedClap — Marketing Agency
            </div>
            <div className="text-[8px] text-ink-soft mt-0.5 leading-tight">
              Strategy, design & growth for ambitious brands.
            </div>
          </div>
          <div className="opacity-60">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[7px] text-ink-soft">2</span>
              <div className="h-1 bg-divider rounded w-16" />
            </div>
            <div className="h-1.5 bg-divider rounded w-3/4" />
          </div>
          <div className="opacity-40">
            <div className="h-1.5 bg-divider rounded w-2/3" />
          </div>
        </div>
      </div>

      {/* Floating rank badge */}
      <div className="absolute bottom-12 right-5 bg-navy text-cream rounded-2xl px-3 py-2 shadow-xl rotate-[4deg] transition-transform duration-700 group-hover:rotate-[6deg]">
        <div className="text-[8px] font-bold text-gold uppercase tracking-wider">
          Position
        </div>
        <div className="font-display text-base font-extrabold leading-none">
          #<span className="text-gold">1</span> ↑
        </div>
      </div>
    </div>
  );
}

function EmailVisual() {
  return (
    <div className="relative w-full h-full bg-navy overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Email mockup card */}
      <div className="absolute inset-x-5 top-6 bg-cream rounded-xl shadow-2xl overflow-hidden rotate-[-1.5deg] transition-transform duration-700 group-hover:rotate-[-2.5deg] group-hover:translate-y-[-3px]">
        {/* Gold header bar */}
        <div className="bg-gold h-2" />
        <div className="p-3.5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-[9px] font-bold text-ink-soft uppercase tracking-wider">
              Inbox
            </div>
            <div className="text-[9px] text-ink-soft font-mono">9:41 AM</div>
          </div>
          <div className="font-display text-[13px] font-bold text-navy leading-tight">
            Your weekly growth insight ✦
          </div>
          <div className="text-[10px] text-ink-soft mt-1 leading-tight">
            See the 3 wins your team unlocked this week.
          </div>
          <div className="mt-3 space-y-1">
            <div className="h-1 bg-divider rounded-full w-full" />
            <div className="h-1 bg-divider rounded-full w-[88%]" />
            <div className="h-1 bg-divider rounded-full w-[62%]" />
          </div>
          <div className="mt-3 inline-flex items-center gap-1 bg-navy text-cream rounded-full px-2.5 py-1">
            <span className="text-[9px] font-bold">View report</span>
            <span className="text-[9px]">→</span>
          </div>
        </div>
      </div>

      {/* Floating open-rate badge */}
      <div className="absolute bottom-11 left-5 bg-gold rounded-2xl px-3 py-2 shadow-xl rotate-[-3deg] transition-transform duration-700 group-hover:rotate-[-5deg]">
        <div className="text-[8px] font-bold text-navy/70 uppercase tracking-wider">
          Open rate
        </div>
        <div className="font-display text-sm font-extrabold text-navy">
          58.2%
        </div>
      </div>
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="relative w-full h-full bg-cream-warm overflow-hidden">
      {/* Three social posts in cluster */}
      <div className="absolute inset-x-5 top-6 grid grid-cols-2 gap-2 transition-transform duration-700 group-hover:translate-y-[-3px]">
        {/* Post 1 — gold */}
        <div className="bg-gold rounded-xl p-2.5 aspect-square flex flex-col justify-between rotate-[-2deg] shadow-md">
          <div className="text-[8px] font-bold text-navy/70 uppercase tracking-wider">
            @medclap
          </div>
          <div className="font-display text-[14px] font-extrabold text-navy leading-[1] italic">
            Grow.
          </div>
          <div className="flex items-center gap-2 text-navy">
            <div className="flex items-center gap-0.5">
              <Heart className="w-2.5 h-2.5 fill-navy" />
              <span className="text-[8px] font-bold">2.4k</span>
            </div>
            <div className="flex items-center gap-0.5">
              <MessageCircle className="w-2.5 h-2.5" strokeWidth={2.5} />
              <span className="text-[8px] font-bold">38</span>
            </div>
          </div>
        </div>
        {/* Post 2 — navy */}
        <div className="bg-navy rounded-xl p-2.5 aspect-square flex flex-col justify-between rotate-[2deg] shadow-md">
          <div className="text-[8px] font-bold text-gold uppercase tracking-wider">
            ✦ Tip
          </div>
          <div className="font-display text-[10px] font-bold text-cream leading-tight">
            Less data.
            <br />More signal.
          </div>
          <div className="flex items-center gap-2 text-cream">
            <div className="flex items-center gap-0.5">
              <Heart className="w-2.5 h-2.5 fill-gold text-gold" />
              <span className="text-[8px] font-bold">1.1k</span>
            </div>
          </div>
        </div>
        {/* Post 3 — cream wide */}
        <div className="col-span-2 bg-cream border border-divider rounded-xl p-2.5 flex items-center gap-2.5 rotate-[-0.5deg] shadow-sm">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center font-display font-extrabold text-navy text-[10px]">
            M
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-bold text-navy">MedClap · 2h</div>
            <div className="text-[9px] text-ink-soft truncate">
              Just shipped a campaign that hit 4.7× ROAS in week one ✦
            </div>
          </div>
          <Star className="w-3 h-3 fill-gold text-gold flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SERVICES DATA
   ============================================================ */

type Service = {
  icon: typeof BarChart3;
  title: string;
  desc: string;
  tags: string[];
  visual: React.ComponentType;
  bgIsDark: boolean; // for choosing dot indicator colors
};

const services: Service[] = [
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Turn raw data into decisions. We track what matters and ignore vanity metrics.",
    tags: ["Attribution", "Dashboards", "A/B Testing", "Funnel Audits"],
    visual: AnalyticsVisual,
    bgIsDark: true,
  },
  {
    icon: FileText,
    title: "Content Strategy",
    desc: "Editorial systems that make your brand the obvious answer when people search.",
    tags: ["Editorial Calendar", "Brand Voice", "Long-form", "Topic Clusters"],
    visual: ContentVisual,
    bgIsDark: false,
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Brand systems and digital experiences with a real point of view. Never generic.",
    tags: ["Brand Identity", "Web Design", "UI/UX", "Design Systems"],
    visual: DesignVisual,
    bgIsDark: true,
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Organic traffic that compounds. Pages that rank, links that hold, content engines that scale.",
    tags: ["Technical SEO", "Link Building", "Local SEO", "On-page"],
    visual: SEOVisual,
    bgIsDark: false,
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Lifecycle flows and campaigns that earn the open and drive measurable revenue.",
    tags: ["Lifecycle Flows", "Newsletters", "Segmentation", "Deliverability"],
    visual: EmailVisual,
    bgIsDark: true,
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Content systems that turn followers into customers. Voice, cadence, creative — all aligned.",
    tags: ["Content Production", "Community", "Paid Social", "Influencer"],
    visual: SocialVisual,
    bgIsDark: false,
  },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".services-eyebrow", ".services-title", ".services-intro"], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 80%",
        },
      });

      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 md:py-28 bg-cream"
    >
      <Container>
        {/* ════════ HEADER ════════ */}
        <div className="services-header grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="md:col-span-8">
            <div className="services-eyebrow inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6">
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                <Folder
                  className="w-2.5 h-2.5 text-navy"
                  strokeWidth={2.75}
                  fill="currentColor"
                />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Services
              </span>
            </div>

            <h2
              className="services-title font-display font-extrabold text-navy tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              What{" "}
              <span className="font-serif italic font-normal text-gold-deep">
                we
              </span>{" "}
              do.
            </h2>
          </div>

          <p className="services-intro md:col-span-4 text-sm md:text-[15px] text-ink-soft leading-relaxed md:text-right">
            We combine strategy, design, and data to deliver measurable
            revenue — not vanity metrics. Every engagement, every time.
          </p>
        </div>

        {/* ════════ SERVICES GRID ════════ */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const Visual = service.visual;
            return (
              <a
                key={service.title}
                href="#"
                className="service-card group block"
              >
                {/* TEXT CARD */}
                <div className="bg-cream-warm border border-divider-soft rounded-2xl p-6 md:p-7 transition-all duration-500 group-hover:border-divider group-hover:bg-cream-warm/80 group-hover:-translate-y-1 group-hover:shadow-lg shadow-sm">
                  {/* Top row: icon + arrow */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-6deg]">
                      <Icon
                        className="w-5 h-5 text-gold"
                        strokeWidth={2.25}
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-divider flex items-center justify-center transition-all duration-500 group-hover:bg-navy group-hover:border-navy">
                      <ArrowUpRight
                        className="w-3.5 h-3.5 text-navy transition-colors duration-500 group-hover:text-gold"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[22px] md:text-2xl font-extrabold text-navy leading-tight tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-[13.5px] text-ink-soft leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Tag pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 bg-cream border border-divider rounded-full pl-2 pr-2.5 py-1 transition-colors duration-300 group-hover:border-divider"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-[10.5px] font-bold text-navy uppercase tracking-wider">
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* VISUAL CARD */}
                <div className="mt-3 md:mt-4 relative rounded-2xl overflow-hidden h-[260px] md:h-[280px] transition-transform duration-500 group-hover:scale-[1.01]">
                  <Visual />

                  {/* Dot indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        service.bgIsDark ? "bg-gold w-4" : "bg-navy w-4"
                      }`}
                    />
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        service.bgIsDark ? "bg-cream/40" : "bg-navy/30"
                      }`}
                    />
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        service.bgIsDark ? "bg-cream/40" : "bg-navy/30"
                      }`}
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}