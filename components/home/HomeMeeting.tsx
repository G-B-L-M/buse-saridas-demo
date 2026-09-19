import Image from "next/image";
import { firstMeeting } from "@/data/content";
import { meetingRows } from "@/data/homeMeeting";
import styles from "./HomeMeeting.module.css";

export function HomeMeeting() {
  const image = meetingRows[0];
  return (
    <section id="ilk-gorusme" className={styles.meeting} aria-labelledby="meeting-heading">
      <header className={styles.header} data-calm-heading>
        <h2 id="meeting-heading">{firstMeeting.heading}</h2>
      </header>
      <div className={styles.body}>
        <figure className={styles.photo}>
          <div className={styles.stage} data-cinema-frame>
            <Image src={image.image} alt={image.alt} fill quality={84}
              sizes="(max-width: 699px) 88vw, (max-width: 1199px) 36vw, 440px" />
          </div>
          <figcaption>Temsili görsel</figcaption>
        </figure>
        <ol className={styles.steps}>
          {meetingRows.map(row => (
            <li key={row.number} className={styles.step} data-meeting-step>
              <span className={styles.connector} aria-hidden="true"><span data-step-line /></span>
              <span className={styles.number} aria-hidden="true">{row.number}</span>
              <div>
                <h3>{row.title}</h3>
                <p>{row.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
