import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { terms } from "@/data/legal";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.description,
  alternates: { canonical: "/kullanim-sartlari" },
};

export default function Page() {
  return <LegalPage document={terms} />;
}
