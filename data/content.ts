

export const site = {
  name: "Buse Sarıdaş",
  title: "Psikolojik Danışman",
  
  documentHeading: "Psikolojik Danışman Buse Sarıdaş",
  instagramUrl: "https://www.instagram.com/psk.dan.busesaridas/",
  instagramHandle: "@psk.dan.busesaridas",
  
  linkedinUrl: "https://www.linkedin.com/in/buse-sar%C4%B1da%C5%9F-/",
} as const;

export const intro = {
  approachHint: "Kaydırarak yaklaşın",
  thoughts: [
    "Ya anlatamazsam?",
    "Nereden başlayacağımı bilmiyorum.",
    "Böyle devam etmek istemiyorum.",
  ],
  primaryLine: "Başlamak için her şeyi bilmek zorunda değilsiniz.",
  enter: "İçeri geç",
} as const;

export const recognition = {
  opening: "Belki buraya bunlardan biri için geldiniz.",
} as const;

export const meetBuse = {
  eyebrow: "Psikolojik Danışman",
  heading: "Buse Sarıdaş",
  positioningLine:
    "Bazen ilk ihtiyaç, her şeyi çözmek değil; kendinizi güvenle anlatabileceğiniz bir alan bulmaktır.",
  bio: [
    "Merhaba, ben Buse Sarıdaş.",
    "Rehberlik ve Psikolojik Danışmanlık alanındaki çalışmalarımı, insanı anlamaya ve psikolojik iyi oluşu desteklemeye duyduğum ilgiyle bir araya getiriyorum.",
    "Danışmanlık sürecinde açık iletişime, güvenli bir ilişkiye ve her bireyin kendine özgü ihtiyaçlarına saygı duyan bir yaklaşıma önem veriyorum. Amacım, kendinizi rahatlıkla ifade edebileceğiniz ve yaşadığınız deneyimleri birlikte anlamlandırabileceğimiz destekleyici bir alan sunmak.",
  ],
  portraitAlt: "Buse Sarıdaş portresi",
} as const;

export const workingTopics = {
  heading: "Çalıştığı Konular",
  items: [
    "Stres ve Anksiyete Yönetimi",
    "Öz Şefkat Geliştirme",
    "Sınır Çizme",
    "İlişki Dinamikleri",
  ],
  serviceLabel: "Görüşme biçimi",
  service: "Online Bireysel Danışma",
} as const;

export const approach = {
  eyebrow: "Yaklaşım",
  heading: "Sürecin dayandığı dört ilke",
  principles: [
    {
      number: "01",
      title: "Güvenli ilişki",
      copy: "Danışmanlık sürecinin temelini açık, güvenli ve yargılamayan bir iletişim oluşturur.",
    },
    {
      number: "02",
      title: "Kişiye özgü süreç",
      copy: "Her bireyin ihtiyaçları, yaşam koşulları ve hedefleri farklıdır. Bu nedenle görüşme süreci kişinin özgün ihtiyaçlarına göre şekillendirilir.",
    },
    {
      number: "03",
      title: "İş birliği",
      copy: "Psikolojik danışmanlık, hazır cevapların verildiği bir süreç değildir. İhtiyaçların, duyguların ve olası yolların birlikte keşfedildiği bir çalışma alanıdır.",
    },
    {
      number: "04",
      title: "Güncel ve gelişime açık bakış",
      copy: "Mesleki gelişmelerin ve yenilikçi uygulamaların takip edildiği; bunların insan odaklılık ve etik ilkeler çerçevesinde değerlendirildiği bir yaklaşım benimsenir.",
    },
  ],
} as const;

export const pdr360 = {
  eyebrow: "Araştırma & Yenilik",
  heading: "PDR360",
  copy: [
    "PDR360, sanal gerçeklik teknolojisinden yararlanarak Psikolojik Danışmanlık ve Rehberlik alanına yönelik bir çözüm geliştirmeyi hedefleyen disiplinler arası bir öğrenci projesidir.",
    "Buse Sarıdaş’ın da yer aldığı proje ekibi, MEB Eğitim Teknolojileri Kuluçka ve İnovasyon Merkezi tarafından yürütülen ETKİM İstasyon Hızlandırma Programı’na kabul edilmiştir.",
  ],
  note: "Buse’nin XR Akademi 2025 ve karma gerçeklik odaklı eğitim/etkinlik deneyimleri, psikolojik danışmanlık alanındaki güncel teknolojik gelişmelere yönelik ilgisini desteklemektedir.",
  metadata: ["TED University", "PDR360", "MEB ETKİM", "XR / VR"],
  imageAlt:
    "Buse Sarıdaş sanal gerçeklik gözlüğü ve kontrol cihazlarını kullanırken",
} as const;

export const firstMeeting = {
  heading: "İlk görüşmede ne olur?",
  steps: [
    {
      number: "01",
      title: "Tanışırız",
      copy: "Her şeyi ilk görüşmede anlatmak zorunda değilsiniz.",
    },
    {
      number: "02",
      title: "Sizi dinlerim",
      copy: "O anda sizin için önemli olan yerden başlayabiliriz.",
    },
    {
      number: "03",
      title: "Birlikte çerçeveleriz",
      copy: "İhtiyaçları ve bundan sonraki sürecin nasıl şekillenebileceğini birlikte değerlendirebiliriz.",
    },
  ],
} as const;


export type FaqItem = {
  question: string;
  answer: string;
  draft?: boolean;
};

export const faq = {
  heading: "Sık sorulan sorular",
  items: [
    {
      question: "Nereden başlayacağımı bilmiyorsam?",
      answer:
        "Başlangıç için hazır bir anlatınız olmak zorunda değildir. Görüşme, o anda sizin için en anlamlı olan yerden başlayabilir.",
    },
    {
      question: "İlk görüşmede her şeyi anlatmam gerekir mi?",
      answer:
        "Hayır. Süreç, kişinin kendisini güvende hissettiği hızda ilerleyebilir.",
    },
    {
      question: "Online görüşme var mı?",
      answer:
        "Evet, online bireysel danışma seçeneği bulunmaktadır. Detaylar için iletişime geçebilirsiniz.",
    },
    {
      question: "Görüşmeler gizli mi?",
      answer:
        "Danışmanlık sürecinde paylaştıklarınız mesleki gizlilik kapsamındadır ve üçüncü kişilerle paylaşılmaz. Gizliliğin yasal olarak sınırlandığı istisnai durumlar — kendinizin veya bir başkasının yaşamsal güvenliğinin söz konusu olduğu haller gibi — ilk görüşmede açıkça konuşulur.",
      draft: true,
    },
    {
      question: "Psikolojik danışmanlık ile psikiyatri arasındaki fark nedir?",
      answer:
        "Psikiyatri tıp alanına bağlıdır; psikiyatristler hekimdir ve gerektiğinde ilaç tedavisi düzenleyebilir. Psikolojik danışmanlık ise konuşmaya dayalı bir destek sürecidir; ilaç yazılmaz, tanı konmaz. İkisi birbirinin alternatifi değildir ve gerektiğinde birlikte yürüyebilir.",
    },
    {
      question: "Online görüşme nasıl yürüyor?",
      answer:
        "Görüşmeler görüntülü olarak yapılır ve bağlantı bilgisi görüşme öncesinde paylaşılır. Sizin tarafınızda da sessiz kalabileceğiniz, bölünmeyeceğiniz bir yer bulunması sürecin akışı için önemlidir.",
      draft: true,
    },
    {
      question: "Kimler için uygun?",
      answer:
        "Çalışma şu anda yetişkinlerle bireysel görüşmeler biçiminde yürütülmektedir.",
      draft: true,
    },
    {
      question: "Bir görüşme ne kadar sürüyor?",
      answer: "Görüşme süresi Buse’nin onayından sonra eklenecek.",
      draft: true,
    },
    {
      question: "Ücret ve iptal nasıl işliyor?",
      answer:
        "Ücret bilgisi ilk iletişimde paylaşılır. Randevunuzu değiştirmeniz veya iptal etmeniz gerekirse görüşmeden en az 24 saat önce haber vermeniz yeterlidir.",
      draft: true,
    },
    {
      question: "Acil bir durumdaysam ne yapmalıyım?",
      answer:
        "Bu site ve buradaki iletişim kanalları acil durum desteği sunmaz; mesajlar her zaman hemen görülmeyebilir. Kendinizin veya bir başkasının yaşamsal güvenliği söz konusuysa vakit kaybetmeden 112 Acil Çağrı Merkezi’ni arayın ya da en yakın acil servise başvurun.",
    },
  ] as FaqItem[],
} as const;



export type ContactChannel = {
  kind: "whatsapp" | "email" | "instagram";
  label: string;
  
  value: string;
  href: string;
  
  external?: boolean;
  
  verified: boolean;
};


const whatsappNumber = "905360893506";
const whatsappDisplay = "+90 536 089 35 06";


const contactEmail = "";

const whatsappPrefill =
  "Merhaba, siteniz üzerinden yazıyorum. Danışmanlık süreci hakkında bilgi almak istiyorum.";

const whatsappBase = `https://wa.me/${whatsappNumber}`;

export const whatsappHref = `${whatsappBase}?text=${encodeURIComponent(
  whatsappPrefill,
)}`;


export function whatsappFormHref(data: {
  name: string;
  phone: string;
  preferredTime: string;
}) {
  const text = [
    `Merhaba, ben ${data.name}.`,
    `Telefon: ${data.phone}`,
    data.preferredTime ? `Uygun zaman: ${data.preferredTime}` : null,
    "Danışmanlık süreci hakkında bilgi almak istiyorum.",
  ]
    .filter(Boolean)
    .join("\n");

  return `${whatsappBase}?text=${encodeURIComponent(text)}`;
}

const allChannels: ContactChannel[] = [
  {
    kind: "whatsapp",
    label: "WhatsApp",
    value: whatsappDisplay,
    href: whatsappHref,
    external: true,
    verified: true,
  },
  {
    kind: "email",
    label: "E-posta",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    verified: false,
  },
  {
    kind: "instagram",
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagramUrl,
    external: true,
    verified: true,
  },
];

export const contactChannels: ContactChannel[] = allChannels.filter(
  (channel) => channel.value !== "",
);


export const hasUnverifiedChannel = contactChannels.some(
  (channel) => !channel.verified,
);


export const hasDraftAnswer = faq.items.some((item) => item.draft);

export const contact = {
  heading: "İlk adım bazen sadece iletişime geçmektir.",
  copy: "Kendiniz, görüşme süreci veya çalışma alanları hakkında bilgi almak için iletişime geçebilirsiniz.",
  channelNote:
    "Mesajlar her zaman hemen görülmeyebilir. Acil bir durumdaysanız 112 Acil Çağrı Merkezi’ni arayın.",
} as const;


export type SessionFact = { term: string; detail: string; draft?: boolean };

export const sessionFacts: SessionFact[] = [
  {
    term: "Görüşme biçimi",
    detail: "Online, görüntülü. Bağlantı bilgisi görüşme öncesinde paylaşılır.",
    draft: true,
  },
  {
    term: "Süre",
    detail: "Görüşme süresi Buse’nin onayından sonra eklenecek.",
    draft: true,
  },
  {
    term: "Kimler için",
    detail: "Yetişkinlerle bireysel danışma; LGS ve YKS sürecindeki öğrencilerle eğitim danışmanlığı.",
    draft: true,
  },
  {
    term: "Ücret",
    detail: "Ücret ve paket bilgileri bu demo için henüz kesinleştirilmedi.",
    draft: true,
  },
];


export const hasDraftSessionFact = sessionFacts.some((fact) => fact.draft);


export const contactForm = {
  heading: "Sizi arayalım",
  copy: "Ne yaşadığınızı burada anlatmanıza gerek yok. Size dönebilmemiz için adınız ve telefonunuz yeterli.",
  fields: {
    name: { label: "Adınız", placeholder: "" },
    phone: { label: "Telefon", placeholder: "05XX XXX XX XX" },
    preferredTime: {
      label: "Aranmak istediğiniz zaman aralığı",
      optional: "isteğe bağlı",
      placeholder: "Örn. hafta içi öğleden sonra",
    },
  },
  consent: {
    linkLabel: "Aydınlatma metnini",
    linkHref: "/kvkk",
    after:
      " okudum; iletişim bilgilerimin yalnızca bana dönüş yapılması amacıyla işlenmesini kabul ediyorum.",
  },
  submit: "Gönder",
  
  submitViaWhatsapp: "WhatsApp’tan gönder",
  submitting: "Gönderiliyor…",
  success:
    "Mesajınız iletildi. En kısa sürede size dönüş yapılacak.",
  error:
    "Gönderilemedi. Dilerseniz WhatsApp’tan yazabilirsiniz.",
  errors: {
    name: "Lütfen adınızı yazın.",
    phone: "Lütfen geçerli bir telefon numarası yazın.",
    consent: "Devam etmek için aydınlatma metnini onaylamanız gerekiyor.",
  },
  
  whatsappNote:
    "Gönder’e bastığınızda bilgileriniz WhatsApp mesajı olarak hazırlanır; göndermeden önce görebilirsiniz.",
} as const;

export const footer = {
  legal: [
    { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
  ] as ReadonlyArray<{ label: string; href: string }>,
  
  cookieNote: "Bu sitede çerez kullanılmaz ve ziyaretçi takibi yapılmaz.",
  lastUpdated: "31.08.2026",
} as const;

export const navigation = [
  { label: "Buse", href: "#buse" },
  { label: "Yaklaşım", href: "#yaklasim" },
  { label: "İlk Görüşme", href: "#ilk-gorusme" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
] as const;
