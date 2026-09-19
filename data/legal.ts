export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };
export type LegalDocument = { slug: string; title: string; description: string; intro: string; sections: LegalSection[] };
const sections: LegalSection[] = [
  { heading: "Tasarım incelemesi", paragraphs: ["Bu site, Buse Sarıdaş için hazırlanan bir tasarım demosudur. Metinler, yazılar ve hizmet bilgileri nihai değerlendirme aşamasındadır. Kesin hizmet veya ücret bilgisi olarak kullanılmamalıdır."] },
  { heading: "Demo formlar", paragraphs: ["Geri arama, e-posta ve bülten formları yalnızca arayüzü göstermek içindir. Bu alanlara yazılan bilgiler gönderilmez veya uygulamada kaydedilmez. Lütfen gerçek kişisel bilgi girmeyin."] },
  { heading: "Barındırma ve dış bağlantılar", paragraphs: ["Demo GitHub Pages üzerinde barındırılır. Barındırma sağlayıcısı kendi politikaları kapsamında teknik erişim kayıtları işleyebilir. Bu uygulamaya analitik veya reklam takip aracı eklenmemiştir. WhatsApp ve LinkedIn bağlantıları ilgili dış platformlara gider."] },
  { heading: "Nihai site", paragraphs: ["Canlı iletişim, içerik yönetimi ve diğer veri işleme işlevleri açılmadan önce kullanım koşulları ve gizlilik metinleri gerçek işleyişe göre ayrıca hazırlanacaktır."] },
];
export const kvkk: LegalDocument = { slug: "kvkk", title: "Demo ve veri işleme bilgisi", description: "Tasarım demosunun kapsamı.", intro: "Bu sayfa bir tasarım demosunun bilgilendirme metnidir; nihai KVKK aydınlatma metni değildir.", sections };
export const privacy: LegalDocument = { ...kvkk, slug: "gizlilik", title: "Demo gizlilik bilgisi" };
export const terms: LegalDocument = { ...kvkk, slug: "kullanim-sartlari", title: "Demo kullanım bilgisi" };
export const legalDocuments = [kvkk, privacy, terms];
