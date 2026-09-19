import Image from "next/image";
import Link from "next/link";
import { journal } from "@/data/journal";
import styles from "./HomeEditorial.module.css";

export function JournalCards({ headingLevel = 3, limit }: { headingLevel?: 2 | 3; limit?: number }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const entries = limit ? journal.slice(0, limit) : journal;
  return <div className={styles.cards}>{entries.map(item => <article key={item.slug} className={styles.card}>
    <Link href={`/yazilar/${item.slug}`} className={styles.cardLink}>
      <div className={styles.cardImage}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 599px) 100px, (max-width: 899px) 31vw, 27vw" /></div>
      <p className={styles.cardCategory}>{item.category}</p>
      <Heading className={styles.cardTitle}>{item.title}</Heading>
      <p>{item.excerpt}</p>
      <span className={styles.read}>Yazıyı oku <span aria-hidden="true">↗</span></span>
    </Link>
  </article>)}</div>;
}
