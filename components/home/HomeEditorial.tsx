"use client";

import Image from "next/image";
import Link from "next/link";
import { journal } from "@/data/journal";
import styles from "./HomeEditorial.module.css";
import journalStyles from "./HomeJournal.module.css";

export function HomeInterlude() {
  return <section className={styles.interlude} aria-labelledby="interlude-heading">
    <Image src="/buse-saridas-demo/assets/home/scene-02-room.webp" alt="Gün ışığı alan sakin bir iç mekân. Temsili görsel." fill sizes="100vw" quality={84}/>
    <div className={styles.interludeCopy}><p>Kendinize bir alan</p><h2 id="interlude-heading">Biraz durmak.<br/><span>Birlikte anlamak.</span></h2><a className={styles.interludeLink} href="#ilk-gorusme">İlk görüşme nasıl ilerler? <span aria-hidden="true">↗</span></a></div>
    <span className={styles.imageNote}>Temsili görsel</span>
  </section>;
}

export function HomeJournal() {
  return <section id="yazilar" className={journalStyles.journal} aria-labelledby="journal-heading">
    <div className={journalStyles.inner}>
      <header data-calm-heading><h2 id="journal-heading">Okumak için<br />küçük bir ara.</h2><Link className={journalStyles.all} href="/yazilar">Tüm yazılar <span aria-hidden="true">↗</span></Link></header>
      <div className={journalStyles.entries}>
        {journal.slice(0, 3).map(item => <article key={item.slug}>
          <Link className={journalStyles.entry} href={`/yazilar/${item.slug}`}>
            <div className={journalStyles.photo}><Image src={item.image} alt={item.alt} fill quality={84} sizes="(max-width: 599px) 76px, 120px" /></div>
            <div className={journalStyles.copy}><p>{item.category}</p><h3>{item.title}</h3></div>
            <span className={journalStyles.arrow} aria-hidden="true">↗</span>
          </Link>
        </article>)}
      </div>
    </div>
  </section>;
}
