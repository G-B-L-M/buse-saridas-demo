import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { kvkk } from "@/data/legal";

export const metadata: Metadata = {
  title: kvkk.title,
  description: kvkk.description,
  alternates: { canonical: "/kvkk" },
};

export default function Page() {
  return <LegalPage document={kvkk} />;
}
