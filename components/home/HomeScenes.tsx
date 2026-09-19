"use client";

import type { FormAvailability } from "@/lib/forms/validation";
import { HomeVideoInterlude } from "./HomeVideoInterlude";
import { HomeCredentials } from "./HomeCredentials";
import { HomeClosing } from "./HomeClosing";
import { HomeMeeting } from "./HomeMeeting";
import { HomeHeader } from "./HomeHeader";
import { HomeOpening } from "./HomeOpening";
import { HomeExpertise } from "./HomeExpertise";
import { HomeJourney } from "./HomeJourney";
import { ContactDock } from "./ContactDock";
import styles from "./HomeScenes.module.css";

export function HomeScenes({ forms }: { forms: FormAvailability }) {
  return (
    <main className={styles.home}>
      <a className={styles.skipLink} href="#bir-alan">İçeriğe geç</a>
      <HomeHeader />
      <HomeOpening />
      <HomeJourney>
      <HomeExpertise />
      <HomeCredentials />
      <HomeVideoInterlude />
      <HomeMeeting />
      <HomeClosing availability={forms} />
      </HomeJourney>
      <ContactDock />
    </main>
  );
}
