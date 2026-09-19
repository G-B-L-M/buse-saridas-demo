import Link from "next/link";
import type { LegalDocument } from "@/data/legal";
import { footer, site } from "@/data/content";
import styles from "./LegalPage.module.css";


export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.back} href="/">
          {`← ${site.name}`}
        </Link>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.title}>{document.title}</h1>
          <p className={styles.intro}>{document.intro}</p>

          {document.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <p className={styles.updated}>
            {`Son güncelleme: ${footer.lastUpdated}`}
          </p>
        </article>
      </main>
    </>
  );
}
