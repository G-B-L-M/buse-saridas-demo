"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";
import styles from "./HomeJourney.module.css";


export function HomeJourney({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current!;
    const media = gsap.matchMedia();
    media.add({ motion: "(prefers-reduced-motion: no-preference)", wide: "(min-width: 768px)" }, context => {
      if (!context.conditions?.motion) return;
      element.querySelectorAll<HTMLElement>("[data-calm-heading]").forEach(heading => {
        gsap.fromTo(heading, { opacity: .8, y: 12 }, {
          opacity: 1, y: 0, duration: .65, ease: "power2.out",
          scrollTrigger: { trigger: heading, start: "top 94%", once: true },
        });
      });
      element.querySelectorAll<HTMLElement>("[data-calm-group]").forEach(group => {
        const items = [...group.querySelectorAll<HTMLElement>("[data-calm-item]")];
        if (context.conditions?.wide) {
          gsap.fromTo(items, { opacity: .9, y: 20 }, {
            opacity: 1, y: 0, duration: .8, stagger: .12, ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 92%", once: true },
          });
        } else {
          items.forEach(item => gsap.fromTo(item, { opacity: .9, y: 14 }, {
            opacity: 1, y: 0, duration: .65, ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 94%", once: true },
          }));
        }
      });
      const steps = [...element.querySelectorAll<HTMLElement>("[data-meeting-step]")];
      steps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step, start: "top 62%",
          onEnter: () => { step.dataset.reached = "true"; },
          onLeaveBack: () => { delete step.dataset.reached; },
        });
        const line = step.querySelector("[data-step-line]");
        if (line && steps[index + 1]) gsap.fromTo(line, { scaleY: 0 }, {
          scaleY: 1, ease: "none",
          scrollTrigger: { trigger: step, start: "top 62%", endTrigger: steps[index + 1], end: "top 62%", scrub: .25 },
        });
      });
      if (context.conditions.wide) {
        element.querySelectorAll<HTMLElement>("[data-cinema-frame]").forEach(frame => {
          const image = frame.querySelector("img, video");
          if (!image) return;
          gsap.fromTo(image, { scale: 1.04 }, {
            scale: 1, ease: "none",
            scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom center", scrub: .5 },
          });
        });
      }
      return () => steps.forEach(step => { delete step.dataset.reached; });
    }, element);
    let frame = 0;
    let previousHeight = element.offsetHeight;
    const resize = new ResizeObserver(() => {
      const height = element.offsetHeight;
      if (Math.abs(height - previousHeight) < 1) return;
      previousHeight = height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    resize.observe(element);
    return () => { resize.disconnect(); cancelAnimationFrame(frame); media.revert(); };
  }, []);

  return <div ref={root} className={styles.journey} data-home-journey>{children}</div>;
}
