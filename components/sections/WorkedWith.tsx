"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Container from "@/components/ui/Container";

/* ────────────────────────────────────────────────────────────
   LOGO DATA
   Drop your actual files in `public/logos/` and update the paths.
   Use SVG when possible — they stay crisp on retina screens.
   The optional `height` lets you fine-tune individual logos
   (some brand marks read smaller than others at the same height).
   ──────────────────────────────────────────────────────────── */
type Logo = {
  name: string;
  src: string;
  height?: number; // px — overrides default of 28
};

const logos: Logo[] = [
  { name: "idleaa", src: "/logos/idleaa.svg" },
  { name: "LightAI", src: "/logos/light-ai.svg" },
  { name: "amara", src: "/logos/amara.svg" },
  { name: "atica", src: "/logos/atica.svg", height: 26 },
  { name: "aven", src: "/logos/aven.svg" },
  { name: "CodeLab", src: "/logos/code-lab.svg" },
  { name: "hexa", src: "/logos/hexa.svg" },
  { name: "Vertex", src: "/logos/vertex.svg" },
];

export default function WorkedWith() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Infinite horizontal scroll. Track holds two copies of the logo set
    // so a translate of -50% lands on the start of the second copy —
    // visually identical to the first, so the loop is seamless.
    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  // Slow the marquee on hover instead of pausing — keeps it feeling alive
  const handleEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0.15, duration: 0.5 });
    }
  };
  const handleLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
    }
  };

  return (
    <section className="relative py-10 md:py-12 bg-cream-warm/40 border-y border-divider-soft">
      <Container>
        <div className="flex items-center gap-6 md:gap-12">
          {/* Label — hidden on small screens to give logos all the room */}
          <div className="flex-shrink-0 hidden md:flex items-center gap-2">
            <span className="text-gold text-base leading-none">✦</span>
            <span className="text-[11px] font-bold text-ink-soft uppercase tracking-[0.22em] whitespace-nowrap">
              Worked with
            </span>
          </div>

          {/* Marquee viewport */}
          <div
            className="flex-1 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div
              ref={trackRef}
              className="flex items-center gap-12 md:gap-16 w-max"
            >
              {/* Render the logo set twice for a seamless infinite loop */}
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  title={logo.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{
                      height: `${logo.height ?? 28}px`,
                      width: "auto",
                    }}
                    className="object-contain max-w-none select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
