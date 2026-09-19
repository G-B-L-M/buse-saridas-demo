
export type CredentialGroup = {
  label: string;
  items: { period: string; title: string; place: string }[];
};

export const credentialGroups: CredentialGroup[] = [
  {
    label: "Eğitim",
    items: [
      {
        period: "2021 – 2026",
        title: "Rehberlik ve Psikolojik Danışmanlık, lisans",
        place: "TED Üniversitesi",
      },
      {
        period: "2026",
        title: "Global Öğretme ve Öğrenme Sertifika Programı (IB PYP)",
        place: "TED Üniversitesi Eğitim Fakültesi ve TEDÜSEM · 5 Ocak – 7 Haziran 2026 · 120 saat",
      },
    ],
  },
  {
    label: "Saha deneyimi",
    items: [
      {
        period: "2026",
        title: "Kariyer ve tercih danışmanlığı",
        place: "TED Üniversitesi",
      },
      {
        period: "2025 – 2026",
        title: "Danışman yardımcılığı",
        place: "AdaptTeen",
      },
      {
        period: "2025 – 2026",
        title: "Okul psikolojik danışmanlığı stajları",
        place: "Ankara Lisesi · Batıkent Şehit Erdal Çetin Ortaokulu · TED Mersin Koleji (TED Ambassador)",
      },
    ],
  },
  {
    label: "Araştırma ve yenilik",
    items: [
      {
        period: "2025 – 2026",
        title: "PDR360 — sanal gerçeklik tabanlı rehberlik projesi",
        place: "MEB ETKİM İstasyon Hızlandırma Programı",
      },
      {
        period: "2025",
        title: "XR Akademi — eğitimde karma gerçeklik programı",
        place: "MEB YEĞİTEK ve Koç Üniversitesi KARMA XR Lab",
      },
    ],
  },
];


export const credentialsPhoto = {
  src: "/buse-saridas-demo/assets/buse/buse-at-work.webp",
  alt: "Buse Sarıdaş bir eğitim forumunda standında anlatırken",
  caption: "TED Üniversitesi VI. Uluslararası Eğitim Forumu",
} as const;

export const credentialsIntro =
  "Bugünkü çalışmanın arkasında beş yıllık bir lisans eğitimi, okullarda yürütülen stajlar ve kariyer danışmanlığı deneyimi var.";
