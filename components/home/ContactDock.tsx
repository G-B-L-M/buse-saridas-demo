"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/data/content";
import styles from "./ContactDock.module.css";


export function ContactDock() {
  const [passedHero, setPassedHero] = useState(false);
  const [atDestination, setAtDestination] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("baslangic");
    if (!hero) return;

    let showAt = 0;
    let frame = 0;
    const measure = () => {
      const introduction = document.getElementById("buse");
      showAt = introduction
        ? introduction.offsetTop + introduction.offsetHeight - window.innerHeight * 0.15
        : Math.max(window.innerHeight * 0.6, hero.offsetTop + hero.offsetHeight * 0.7);
    };
    const evaluate = () => { frame = 0; setPassedHero(window.scrollY >= showAt); };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(evaluate); };
    const onResize = () => { measure(); schedule(); };
    onResize();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    const targets = [document.getElementById("iletisim"), document.querySelector("footer")]
      .filter((node): node is HTMLElement => Boolean(node));
    const seen = new Set<Element>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) seen.add(entry.target);
        else seen.delete(entry.target);
      }
      setAtDestination(seen.size > 0);
    }, { threshold: 0.08 });
    targets.forEach(target => observer.observe(target));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  const visible = passedHero && !atDestination;

  return (
    <div className={styles.dock} data-visible={visible ? "" : undefined}
      aria-hidden={visible ? undefined : "true"}>
      <a className={styles.primary} href={whatsappHref} target="_blank" rel="noopener noreferrer"
        tabIndex={visible ? undefined : -1}
        aria-label="WhatsApp üzerinden yazın — yeni sekmede açılır">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 3.5c-4.7 0-8.5 3.5-8.5 7.8 0 1.6.5 3.1 1.5 4.3L4 20.5l5.1-1.3c.9.3 1.9.5 2.9.5 4.7 0 8.5-3.5 8.5-7.8S16.7 3.5 12 3.5Z"
            fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        <span>WhatsApp</span>
      </a>
      <a className={styles.secondary} href="#geri-arama" onClick={() => window.dispatchEvent(new Event("home:callback"))} tabIndex={visible ? undefined : -1}>
        Geri arama
      </a>
    </div>
  );
}
