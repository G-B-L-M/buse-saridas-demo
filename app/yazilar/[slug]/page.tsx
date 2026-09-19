import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JournalFooter } from "@/components/home/JournalFooter";
import { journal } from "@/data/journal";
import { site } from "@/data/content";
import home from "@/components/home/HomeScenes.module.css";
import styles from "@/components/home/HomeEditorial.module.css";

export function generateStaticParams() { return journal.map(({slug})=>({slug})); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const {slug}=await params; const item=journal.find(entry=>entry.slug===slug);
  if (!item) return {};
  return { title: `${item.title} | ${site.name}`, description: item.excerpt, alternates:{canonical:`/yazilar/${slug}`} };
}
export default async function JournalArticle({ params }: { params: Promise<{slug:string}> }) {
  const {slug}=await params; const item=journal.find(entry=>entry.slug===slug);
  if (!item) notFound();
  const related = journal.filter(entry => entry.slug !== slug).slice(0, 2);
  return <div className={`${home.home} ${styles.articlePage}`}><a className={home.skipLink} href="#yazi">Yazıya geç</a><nav className={styles.articleNav} aria-label="Yazı gezinme"><Link href="/">← {site.name}</Link><Link href="/yazilar">Tüm yazılar</Link></nav><main id="yazi"><article className={styles.article}><p className={styles.label}>{item.category}</p><h1>{item.title}</h1><p className={styles.articleIntro}>{item.excerpt}</p><div className={styles.articleHero}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 899px) 88vw, 850px" priority/></div><div className={styles.articleBody}>{item.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}<p className={styles.articleNote}>Demo içerik taslağı; Buse’nin nihai yazısı değildir. Düşünmeye alan açan kısa bir not. Kişiye özel danışmanlık veya değerlendirme yerine geçmez.</p><Link className={styles.articleCta} href="/#iletisim">Görüşme hakkında bilgi alın ↗</Link></div></article>
    <aside className={styles.related} aria-labelledby="related-heading">
      <p className={styles.label}>Okumaya devam edin</p><h2 id="related-heading">Bir başka küçük not.</h2>
      <div className={styles.relatedLinks}>{related.map(entry => <Link key={entry.slug} href={`/yazilar/${entry.slug}`}><span>{entry.category}</span><h3>{entry.title}</h3><span aria-hidden="true">↗</span></Link>)}</div>
    </aside>
    </main><JournalFooter /></div>;
}
