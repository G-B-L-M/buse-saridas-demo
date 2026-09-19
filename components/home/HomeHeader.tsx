"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/content";
import styles from "./HomeHeader.module.css";

const links = [
  ["#buse", "Buse’yle tanışın"],
  ["#hizmetler", "Hizmetler"],
  ["#egitim", "Eğitim ve deneyim"],
  ["#ilk-gorusme", "İlk görüşme"],
  ["#sorular", "SSS"],
  ["#yazilar", "Yazılar"],
] as const;

export function HomeHeader() {
  const header = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1180px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    const element = header.current!;
    const hero = document.getElementById("baslangic")!;
    const introduction = document.getElementById("buse");
    let lastY = window.scrollY;
    let direction = 0;
    let travel = 0;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;
      const nextDirection = Math.sign(delta);
      if (nextDirection && nextDirection !== direction) travel = 0;
      travel += Math.abs(delta);
      if (nextDirection) direction = nextDirection;
      element.dataset.surface = hero.getBoundingClientRect().bottom > element.offsetHeight ? "hero" : "paper";
      const openingEnd = introduction ? introduction.offsetTop + introduction.offsetHeight : hero.offsetHeight;
      if (y < openingEnd || menuOpen) element.dataset.hidden = "false";
      else if (travel > 12) element.dataset.hidden = String(direction > 0);
      lastY = y;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        header.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return <header ref={header} className={styles.header} data-surface="hero" data-hidden="false" data-menu={menuOpen ? "open" : "closed"}>
    <a href="#baslangic" className={styles.wordmark} onClick={() => setMenuOpen(false)} aria-label={`${site.name}, başlangıç`}>
      <span>{site.name}</span><small>{site.title} · Demo</small>
    </a>
    <nav className={styles.desktop} aria-label="Ana gezinme">
      {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
    </nav>
    <div className={styles.actions}>
      <a className={styles.contact} href="#iletisim" onClick={() => setMenuOpen(false)}><span aria-hidden="true" />İletişim</a>
      <button className={styles.toggle} type="button" aria-expanded={menuOpen} aria-controls="home-mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Kapat" : "Menü"}</button>
    </div>
    {menuOpen && <nav id="home-mobile-nav" className={styles.mobile} aria-label="Mobil gezinme">
      {links.map(([href, label]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
    </nav>}
  </header>;
}
