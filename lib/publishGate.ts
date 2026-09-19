import { hasDraftAnswer, hasDraftSessionFact, hasUnverifiedChannel } from "@/data/content";
import { legalDocuments } from "@/data/legal";


const legalPlaceholder = /\[[^\]]+\]/;

export const hasLegalPlaceholder = legalDocuments.some((document) =>
  legalPlaceholder.test(
    [
      document.intro,
      ...document.sections.flatMap((section) => [
        section.heading,
        ...(section.paragraphs ?? []),
        ...(section.list ?? []),
      ]),
    ].join(" "),
  ),
);

export const publishBlocked =
  hasUnverifiedChannel || hasLegalPlaceholder || hasDraftAnswer || hasDraftSessionFact;


export const publishBlockers = [
  hasUnverifiedChannel && "Doğrulanmamış iletişim kanalı görünüyor",
  hasLegalPlaceholder && "Hukuki metinlerde doldurulmamış alan var",
  hasDraftAnswer && "Onay bekleyen SSS cevabı var",
  hasDraftSessionFact && "Onay bekleyen seans/ücret bilgisi var",
].filter(Boolean) as string[];
