"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";

// Register ScrollTrigger once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Bridges Lenis's smooth-scroll loop with GSAP.
 *
 * Without this, ScrollTrigger never sees the scroll position change
 * (because Lenis hijacks native scroll), so any animation with a
 * `scrollTrigger: { ... }` config silently fails to fire.
 *
 * Two integration points are needed:
 *   1. lenis.on("scroll") → ScrollTrigger.update()
 *      So ScrollTrigger recalculates trigger positions on every scroll tick.
 *   2. gsap.ticker drives lenis.raf()
 *      So both libraries share the same animation frame loop and stay in sync.
 */
function GsapLenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => ScrollTrigger.update();
    lenis.on("scroll", handleScroll);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", handleScroll);
      gsap.ticker.remove(tickerCallback);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <GsapLenisSync />
      {children}
    </ReactLenis>
  );
}