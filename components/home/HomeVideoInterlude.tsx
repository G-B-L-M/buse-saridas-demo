"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HomeVideoInterlude.module.css";

const videoSource = "/buse-saridas-demo/assets/video/shared-sky.mp4";

export function HomeVideoInterlude() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const preference = useRef<boolean | null>(null);
  const updatePlayback = useRef<() => void>(() => {});
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = video.current!;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const sync = () => {
      const shouldPlay = visible && !document.hidden && (preference.current ?? !motion.matches);
      if (shouldPlay) {
        if (!element.getAttribute("src")) element.src = videoSource;
        element.play().catch(() => setPlaying(false));
      } else element.pause();
    };
    updatePlayback.current = sync;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.1 });
    observer.observe(section.current!);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      element.pause();
      updatePlayback.current = () => {};
    };
  }, []);

  return (
    <section ref={section} id="birlikte" className={styles.scene} aria-labelledby="interlude-heading">
      <div className={styles.film} data-cinema-frame>
      <video ref={video} className={styles.video} autoPlay loop muted playsInline preload="none"
        poster="/buse-saridas-demo/assets/video/shared-sky-poster.jpg" aria-hidden="true"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onError={() => { setFailed(true); setPlaying(false); }} />
      <div className={styles.copy} data-calm-heading>
        <h2 id="interlude-heading"><span>Her şeyi tek başınıza</span><em>taşımak zorunda değilsiniz.</em></h2>
        <a className={styles.glass} href="#ilk-gorusme">İlk görüşmeyi keşfedin <span aria-hidden="true">↗</span></a>
      </div>
      <button type="button" className={styles.playback} disabled={failed}
        aria-label={playing ? "Arka plan videosunu duraklat" : "Arka plan videosunu oynat"}
        onClick={() => { preference.current = !playing; updatePlayback.current(); }}>
        <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>
        {failed ? "Video yüklenemedi" : playing ? "Duraklat" : "Oynat"}
      </button>
      <span className={styles.note}>Temsili sahne</span>
      </div>
    </section>
  );
}
