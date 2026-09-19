"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { intro, site } from "@/data/content";
import { homeStory } from "@/data/homeStory";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";
import styles from "./HomeOpening.module.css";

function Arrow({ down = false }: { down?: boolean }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    style={down ? { transform: "rotate(90deg)" } : undefined}>
    <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.3" />
  </svg>;
}


export function HomeOpening() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const select = gsap.utils.selector(root);
      const origin = root.current!.querySelector<HTMLElement>("[data-heart-origin]")!;
      const landing = root.current!.querySelector<HTMLElement>("[data-heart-landing]")!;
      const portrait = root.current!.querySelector<HTMLElement>("[data-about-portrait]")!;
      const delta = (target: HTMLElement, axis: "x" | "y") => {
        const a = origin.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        return axis === "x" ? b.left + b.width / 2 - a.left - a.width / 2
          : b.top + b.height / 2 - a.top - a.height / 2;
      };

      const pageCenter = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return window.scrollY + rect.top + rect.height / 2;
      };
      gsap.timeline({
        scrollTrigger: {
          id: "buse-heart-journey",
          trigger: origin,
          start: () => Math.max(0, pageCenter(origin) - window.innerHeight * 0.65),
          end: () => pageCenter(landing) - window.innerHeight * 0.74,
          scrub: true, invalidateOnRefresh: true,
        },
      })
        .fromTo(select("[data-travelling-heart]"), { x: 0 }, {
          x: () => delta(landing, "x"), duration: 1,
          ease: progress => {
            const t = gsap.utils.clamp(0, 1, (progress - 0.4) / 0.32);
            return t * t * (3 - 2 * t);
          },
        }, 0)
        .fromTo(select("[data-travelling-heart]"), { y: 0, rotation: 0, scale: 1 }, {
          y: () => delta(landing, "y"), rotation: -9,
          scale: () => window.innerWidth < 600 ? 1 : 0.72,
          duration: 1, ease: "none",
        }, 0);
      gsap.timeline({
        scrollTrigger: {
          id: "buse-portrait-reveal", trigger: portrait.parentElement,
          start: "top 88%", end: "top 48%", scrub: 0.35,
          invalidateOnRefresh: true,
        },
      })
        .fromTo(portrait, { clipPath: "inset(0% 0% 100% 0%)", y: 24 }, {
          clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1, ease: "none",
        }, 0)
        .fromTo(portrait.querySelector("img"), { scale: 1.07 }, {
          scale: 1, duration: 1, ease: "none",
        }, 0);
    }, root);
    let active = true;
    document.fonts.ready.then(() => { if (active) ScrollTrigger.refresh(); });
    return () => { active = false; media.revert(); };
  }, []);

  return <div ref={root} className={styles.opening}>
    <section id="baslangic" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{site.name}<span aria-hidden="true">·</span>{site.title}</p>
        <h1 id="hero-heading" aria-label={intro.primaryLine}>
          <span>Başlamak için her şeyi</span>
          <em>bilmek zorunda değilsiniz.</em>
        </h1>
        <p className={styles.description}>Yetişkinlerle online bireysel danışma.<br />LGS–YKS yolculuğundaki öğrencilerle eğitim danışmanlığı.</p>
        <a href="#iletisim" className={styles.primaryAction}>Birlikte başlayalım <Arrow /></a>
      </div>

      <div className={styles.mosaic} role="group" aria-label="Bireysel danışma ve eğitim danışmanlığından temsili kareler" aria-describedby="opening-image-note">
        <a href="#bireysel-danisma" className={`${styles.mosaicItem} ${styles.conversationPhoto}`}>
          <span className={styles.photoCard}>
            <Image src="/buse-saridas-demo/assets/meeting/02-dinlerim.webp" alt="Kulaklıkla online görüşmede kendini ifade eden bir yetişkin; temsili sahne" fill quality={84} sizes="(max-width: 599px) 31vw, 16vw" loading="eager" />
          </span>
          <span className={styles.photoCaption}>Online görüşme <Arrow /></span>
        </a>
        <a href="#bireysel-danisma" className={`${styles.mosaicItem} ${styles.reflectionPhoto}`}>
          <span className={styles.photoCard}>
            <Image src="/buse-saridas-demo/assets/meeting/03-cerceveleriz.webp" alt="Düşüncelerini ve hislerini bir deftere not eden kişi; temsili sahne" fill quality={84} sizes="(max-width: 599px) 1px, 16vw" />
          </span>
          <span className={styles.photoCaption}>Duyguları anlamak <Arrow /></span>
        </a>
        <a href="#egitim-danismanligi" className={`${styles.mosaicItem} ${styles.planningPhoto}`}>
          <span className={styles.photoCard}>
            <Image src="/buse-saridas-demo/assets/expertise/05-calisma-sistemi.webp" alt="Çalışma masasındaki planına not alan lise öğrencisi; temsili sahne" fill quality={84} sizes="(max-width: 599px) 31vw, 16vw" loading="eager" />
          </span>
          <span className={styles.photoCaption}>Çalışma planı <Arrow /></span>
        </a>
        <a href="#egitim-danismanligi" className={`${styles.mosaicItem} ${styles.examPhoto}`}>
          <span className={styles.photoCard}>
            <Image src="/buse-saridas-demo/assets/expertise/06-sinav-stresi.webp" alt="Açık ders kitaplarının başında durup düşüncelerine ara veren lise öğrencisi; temsili sahne" fill quality={84} sizes="(max-width: 599px) 1px, 16vw" />
          </span>
          <span className={styles.photoCaption}>Sınav stresi <Arrow /></span>
        </a>
        <div className={styles.heartCard}>
          <span className={styles.heartOrigin} data-heart-origin>
            <span className={styles.travellingHeart} data-travelling-heart aria-hidden="true">
              <Image src="/buse-saridas-demo/assets/brand/buse-heart.png" alt="" width={240} height={240} sizes="(max-width: 599px) 100px, 180px" loading="eager" />
            </span>
          </span>
        </div>
      </div>
      <p id="opening-image-note" className={styles.imageNote}>Görseller temsilidir.</p>

      <div className={styles.bridge}>
        <p>Biraz durmak, kendinizi duymak.<br /><em>Kendi ritminizde, birlikte.</em></p>
        <a href="#buse" className={styles.meetLink}>Buse’yle tanışın <Arrow down /></a>
      </div>
    </section>

    <section id="buse" className={styles.about} aria-labelledby="introduction-heading">
      <span id="bir-alan" className={styles.legacyAnchor} />
      <header className={styles.aboutHeading}>
        <p className={styles.eyebrow}>Biraz tanışalım</p>
        <h2 id="introduction-heading">Merhaba, ben <em>Buse.</em></h2>
        <p id="buse-yaklasimi" className={styles.approach}>{homeStory.approach}</p>
      </header>

      <div className={styles.aboutGrid}>
        <div className={`${styles.sideNote} ${styles.servicesNote}`}>
          <h3>Birlikte çalışabiliriz</h3>
          <a href="#bireysel-danisma" className={styles.serviceLink}>
            <span>Online bireysel danışma</span>
            <small>Yetişkinlerle, kendinize dair.</small>
            <Arrow />
          </a>
          <a href="#egitim-danismanligi" className={styles.serviceLink}>
            <span>Eğitim danışmanlığı</span>
            <small>LGS–YKS sürecinde, adım adım.</small>
            <Arrow />
          </a>
          <p className={styles.personalNote}>Her yolculuğun<br /><em>kendine ait bir ritmi var.</em></p>
        </div>

        <figure className={styles.portrait}>
          <div className={styles.portraitFrame} data-about-portrait>
            <Image src="/buse-saridas-demo/assets/buse/buse-library-portrait.webp" alt="Psikolojik danışman Buse Sarıdaş, ahşap kitaplık önünde" fill quality={84} sizes="(max-width: 599px) 76vw, (max-width: 899px) 38vw, 340px" />
          </div>
          <figcaption><span>{site.name}</span><small>{site.title}</small></figcaption>
          <span className={styles.heartLanding} data-heart-landing aria-hidden="true" />
        </figure>

        <div className={`${styles.sideNote} ${styles.educationNote}`}>
          <h3>Bu yolun arka planı</h3>
          <dl>
            <div><dt>TED Üniversitesi</dt><dd>Rehberlik ve Psikolojik <br />Danışmanlık eğitimi</dd></div>
            <div><dt>PDR360</dt><dd>Sanal gerçeklik tabanlı rehberlik <br />öğrenci projesi, ekip üyesi</dd></div>
          </dl>
          <a href="#egitim" className={styles.textLink}>Eğitim ve deneyim <Arrow /></a>
        </div>
      </div>

      <a href="#ilk-gorusme" className={styles.aboutAction}>İlk görüşme nasıl ilerler? <Arrow /></a>
    </section>
  </div>;
}
