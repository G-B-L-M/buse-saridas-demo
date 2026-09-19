"use client";

import { approach, faq, footer, site, whatsappHref } from "@/data/content";
import type { FormAvailability } from "@/lib/forms/validation";
import { HomeContact, NewsletterForm } from "./HomeForms";
import { HomeJournal } from "./HomeEditorial";
import styles from "./HomeClosing.module.css";

const questions = [
  faq.items[2],
  { question: "Görüşme süreci herkes için aynı mı?", answer: approach.principles[1].copy },
  { question: "Görüşme hakkında nasıl bilgi alabilirim?", answer: "WhatsApp’tan yazabilir, geri arama talebi bırakabilir veya iletişim formunu doldurabilirsiniz." },
];

export function HomeClosing({ availability }: { availability: FormAvailability }) {
  return <>
    <section id="sorular" className={styles.questions} aria-labelledby="questions-heading">
      <header data-calm-heading><h2 id="questions-heading">{faq.heading}</h2></header>
      <div className={styles.answers}>{questions.map(item => <details key={item.question} name="home-faq">
        <summary>{item.question}<span aria-hidden="true" /></summary><p>{item.answer}</p>
      </details>)}</div>
      <a className={styles.questionLink} href="#iletisim">Diğer sorularınız için iletişime geçin <span aria-hidden="true">↗</span></a>
    </section>
    <HomeContact availability={availability} />
    <HomeJournal />
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerTop}>
        <div><a className={styles.brand} href="#baslangic">{site.name}</a><p className={styles.title}>{site.title}</p><p className={styles.title}>Tasarım demosu · İçerikler değerlendirme aşamasındadır.</p></div>
        <nav aria-label="Alt gezinme">
          <a href="#buse">Buse’yle tanışın</a><a href="#hizmetler">Hizmetler</a><a href="#yazilar">Yazılar</a><a href="#iletisim">İletişim</a>
        </nav>
      </div>
      <div className={styles.footerMiddle}>
        <details id="bulten" className={styles.newsletter}>
          <summary>Arada bir, küçük bir not.<span aria-hidden="true">+</span></summary>
          <div className={styles.newsletterBody}>
            <p>Yeni yazılar ve kendinize alan açmaya dair notlar, e-posta kutunuzda.</p>
            <NewsletterForm enabled={availability.newsletter} />
            <p className={styles.unsubscribe}>Her bültendeki bağlantıyla abonelikten ayrılabilirsiniz.</p>
          </div>
        </details>
        <nav className={styles.social} aria-label="Diğer iletişim yolları">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span><span className="visually-hidden">, yeni sekmede açılır</span></a>
          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span><span className="visually-hidden">, yeni sekmede açılır</span></a>
        </nav>
      </div>
      <div className={styles.footerBottom}><span>© {new Date().getFullYear()} {site.name}</span><nav aria-label="Yasal bilgiler">{footer.legal.map(link=><a href={`/buse-saridas-demo${link.href}/`} key={link.href}>{link.label}</a>)}</nav><a href="#baslangic">Başa dön ↑</a></div>
    </footer>
  </>;
}
