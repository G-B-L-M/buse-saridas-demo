import Link from "next/link";
import { footer, site } from "@/data/content";
import styles from "./HomeEditorial.module.css";

export function JournalFooter() {
  return <footer className={styles.articleFooter}>
    <Link className={styles.articleBrand} href="/">{site.name}</Link>
    <nav aria-label="Yazılar alt gezinme">
      <Link href="/yazilar">Tüm yazılar</Link>
      <Link href="/#iletisim">İletişim</Link>
      {footer.legal.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
    </nav>
  </footer>;
}
