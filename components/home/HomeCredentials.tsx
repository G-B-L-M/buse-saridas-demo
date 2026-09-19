"use client";

import Image from "next/image";
import { credentialGroups, credentialsPhoto, type CredentialGroup } from "@/data/homeCredentials";
import { ScrollTrigger } from "@/lib/motion/gsap";
import styles from "./HomeCredentials.module.css";

function CredentialRows({ group }: { group: CredentialGroup }) {
  return (
    <section className={styles.group} aria-label={group.label}>
      <h3 className={styles.groupLabel}>{group.label}</h3>
      <ul className={styles.rows}>
        {group.items.map(item => (
          <li key={item.title} className={styles.row}>
            <span className={styles.period}>{item.period}</span>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.place}>{item.place}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const additionalGroups = credentialGroups
  .map(group => ({ ...group, items: group.items.slice(1) }))
  .filter(group => group.items.length > 0);
const additionalCount = additionalGroups.reduce((count, group) => count + group.items.length, 0);

export function HomeCredentials() {
  return (
    <section id="egitim" className={styles.credentials} aria-labelledby="credentials-heading">
      <div className={styles.body}>
        <figure className={styles.photo}>
          <div className={styles.photoFrame} data-cinema-frame>
            <Image src={credentialsPhoto.src} alt={credentialsPhoto.alt} fill quality={84}
              sizes="(max-width: 699px) 88vw, (max-width: 1099px) 36vw, 400px" />
          </div>
          <figcaption>{credentialsPhoto.caption}</figcaption>
        </figure>

        <div className={styles.list}>
          <header className={styles.header} data-calm-heading>
            <h2 id="credentials-heading">Eğitim ve deneyim</h2>
          </header>
          {credentialGroups.map(group => (
            <CredentialRows key={group.label} group={{ ...group, items: group.items.slice(0, 1) }} />
          ))}
          <details className={styles.more} onToggle={() => ScrollTrigger.refresh()}>
            <summary>Diğer eğitim ve deneyim kayıtları ({additionalCount})<span aria-hidden="true" /></summary>
            <div className={styles.moreGroups}>
              {additionalGroups.map(group => <CredentialRows key={group.label} group={group} />)}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
