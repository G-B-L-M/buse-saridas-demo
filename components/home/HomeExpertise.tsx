import Image from "next/image";
import { whatsappHref } from "@/data/content";
import { servicePaths } from "@/data/homeExpertise";
import styles from "./HomeExpertise.module.css";
const serviceImages = {
  "bireysel-danisma": {
    src: "/buse-saridas-demo/assets/meeting/02-dinlerim.webp",
    alt: "Evinde kulaklık ve bilgisayarla online görüşmeye katılan yetişkin; temsili sahne",
  },
  "egitim-danismanligi": {
    src: "/buse-saridas-demo/assets/expertise/05-calisma-sistemi.webp",
    alt: "Masasında çalışma planına not alan lise öğrencisi; temsili sahne",
  },
} as const;

export function HomeExpertise() {
  return (
    <section id="hizmetler" className={styles.expertise} aria-labelledby="expertise-heading">
      <span id="calisma-alanlari" className={styles.legacyAnchor} />
      <span id="uzmanlik-alanlari" className={styles.legacyAnchor} />
      <header className={styles.header} data-calm-heading>
        <div>
          <h2 id="expertise-heading">İhtiyacınıza uygun <em>bir başlangıç.</em></h2>
        </div>
      </header>
      <div className={styles.paths} data-calm-group>
        {servicePaths.map((path, index) => {
          const destination = new URL(whatsappHref);
          destination.searchParams.set("text", path.message);
          const image = serviceImages[path.id];
          return (
            <article id={path.id} className={styles.path} key={path.id} aria-labelledby={`${path.id}-heading`} data-calm-item>
              <header className={styles.serviceHeading}>
                <p className={styles.audience}><span aria-hidden="true">0{index + 1}</span>{path.audience}</p>
                <h3 id={`${path.id}-heading`}>{path.title}</h3>
              </header>
              <figure className={styles.serviceImage}>
                <div className={styles.imageFrame} data-cinema-frame>
                  <Image src={image.src} alt={image.alt} fill quality={84}
                    sizes="(max-width: 699px) 88vw, (max-width: 1399px) 40vw, 560px" />
                </div>
                <figcaption>Temsili görsel</figcaption>
              </figure>
              <div className={styles.details}>
                <p className={styles.description}>{path.description}</p>
                <details className={styles.topicDetails}>
                  <summary>Çalışma konuları <span aria-hidden="true">+</span></summary>
                  <ul className={styles.topics}>
                  {path.topics.map(topic => <li key={topic}>{topic}</li>)}
                  </ul>
                </details>
                <a className={styles.action} href={destination.toString()} target="_blank" rel="noopener noreferrer">
                  {path.action}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.3" /></svg>
                  <span className="visually-hidden"> — WhatsApp, yeni sekmede açılır</span>
                </a>
                <p className={styles.channel}>WhatsApp üzerinden bilgi alabilirsiniz.</p>
              </div>
            </article>
          );
        })}
      </div>
      <p className={styles.otherContact}>Farklı bir iletişim yolu tercih ederseniz <a href="#iletisim">iletişim seçeneklerini inceleyin <span aria-hidden="true">↗</span></a></p>
    </section>
  );
}
