import Link from "next/link";
import { site } from "@/data/content";
import home from "@/components/home/HomeScenes.module.css";
import styles from "@/components/home/HomeEditorial.module.css";

export default function NotFound() {
  return <main className={`${home.home} ${styles.notFound}`}>
    <Link className={styles.articleBrand} href="/">{site.name}</Link>
    <div>
      <p className={styles.label}>404 · Sayfa bulunamadı</p>
      <h1>Burada bir sayfa yok.<br/>Yeni bir yerden başlayabiliriz.</h1>
      <p>Bağlantı değişmiş veya adres eksik yazılmış olabilir.</p>
      <nav aria-label="Devam etmek için"><Link className={styles.articleCta} href="/">Ana sayfaya dön ↗</Link><Link className={styles.articleCta} href="/yazilar">Yazılara göz at ↗</Link></nav>
    </div>
  </main>;
}
