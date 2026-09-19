import Link from "next/link";
import { JournalCards } from "@/components/home/JournalCards";
import { JournalFooter } from "@/components/home/JournalFooter";
import { site } from "@/data/content";
import home from "@/components/home/HomeScenes.module.css";
import styles from "@/components/home/HomeEditorial.module.css";

export const metadata = {
  title: "Küçük notlar | Buse Sarıdaş",
  description: "Gündelik deneyimler, ilişkiler ve bir başlangıca yer açmak üzerine kısa notlar.",
  alternates: { canonical: "/buse-saridas-demo/yazilar" },
};
export default function JournalIndex() {
  return <div className={`${home.home} ${styles.articlePage}`}>
    <a className={home.skipLink} href="#yazi-listesi">İçeriğe geç</a>
    <nav className={styles.articleNav} aria-label="Yazı gezinme"><Link href="/">← {site.name}</Link><Link href="/#iletisim">İletişim ↗</Link></nav>
    <main id="yazi-listesi">
      <header className={styles.article}><p className={styles.label}>Küçük notlar</p><h1>Kendinize biraz daha yakından bakmak için.</h1><p className={styles.articleIntro}>Gündelik deneyimler, ilişkiler ve bir başlangıca yer açmak üzerine.</p></header>
      <div className={styles.articleList}><JournalCards headingLevel={2}/></div>
    </main>
    <JournalFooter />
  </div>;
}
