import { workingTopics } from "./content";


export const expertiseTracks = {
  counselling: "Online bireysel danışma",
  education: "LGS ve YKS eğitim danışmanlığı",
} as const;


export const servicePaths = [
  {
    id: "bireysel-danisma",
    audience: "Yetişkinler için",
    title: expertiseTracks.counselling,
    description: "Kendinizle ve ilişkilerinizle ilgili zorlandığınız konuları, online bireysel görüşmelerde birlikte ele alabiliriz.",
    topics: workingTopics.items,
    action: "Bireysel danışma için yazın",
    message: "Merhaba, siteniz üzerinden yazıyorum. Online bireysel danışma süreci hakkında bilgi almak istiyorum.",
  },
  {
    id: "egitim-danismanligi",
    audience: "LGS ve YKS öğrencileri için",
    title: "Eğitim danışmanlığı",
    description: "Sınava hazırlık döneminde çalışma düzeni, takip ve sınav stresini ele alan bir süreçte birlikte ilerleyebiliriz.",
    topics: [
      "Kişiye özel çalışma planı ve günlük takip",
      "Haftalık online görüşme ve hata analizi",
      "Sınav stresi ve erteleme üzerine çalışma",
      "Hedef belirleme ve tercih süreci takibi",
    ],
    action: "Eğitim danışmanlığı için yazın",
    message: "Merhaba, siteniz üzerinden yazıyorum. LGS–YKS eğitim danışmanlığı süreci hakkında bilgi almak istiyorum.",
  },
] as const;

export type ExpertiseArea = {
  track: (typeof expertiseTracks)[keyof typeof expertiseTracks];
  title: string;
  copy: string;
  image: string;
  alt: string;
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    track: expertiseTracks.counselling,
    title: workingTopics.items[0],
    copy: "Zihnin susmadığı, bedenin sürekli tetikte kaldığı dönemlerde kaygının nasıl biriktiğine birlikte bakmak.",
    image: "/buse-saridas-demo/assets/expertise/01-anksiyete.webp",
    alt: "Akşam ışığında kalabalık bir vagonda, camdan dışarı dalgın bakan bir kadın",
  },
  {
    track: expertiseTracks.counselling,
    title: workingTopics.items[1],
    copy: "Başkalarına gösterdiğiniz anlayışı kendinizden esirgediğiniz yerleri fark etmek ve kendinize de alan açmak.",
    image: "/buse-saridas-demo/assets/expertise/02-oz-sefkat.webp",
    alt: "Sabah ışığında pencere kenarında, battaniyeye sarınmış, elinde sıcak fincanla oturan bir kadın",
  },
  {
    track: expertiseTracks.counselling,
    title: workingTopics.items[2],
    copy: "İlişkilerde nerede durduğunuzu, neyi taşıyıp neyi bırakabileceğinizi birlikte netleştirmek.",
    image: "/buse-saridas-demo/assets/expertise/03-sinir-cizme.webp",
    alt: "Kalabalık bir akşam sofrasında telefonunu ters çevirip masadan hafifçe geri çekilen bir kadın",
  },
  {
    track: expertiseTracks.counselling,
    title: workingTopics.items[3],
    copy: "Yakınlık ve mesafe biçimlerinize, ilişkilerde tekrar eden döngülere birlikte bakmak.",
    image: "/buse-saridas-demo/assets/expertise/04-iliski.webp",
    alt: "Gün batımında balkonda birbirine dönük, arada küçük bir mesafeyle duran iki kişi",
  },
  {
    track: expertiseTracks.education,
    title: "Çalışma Sistemi Kurma",
    copy: "Kişiye özel çalışma planı, günlük konu ve ödev takibi, haftalık online görüşme ve önceki haftanın hata analizi.",
    image: "/buse-saridas-demo/assets/expertise/05-calisma-sistemi.webp",
    alt: "Akşam lambasının ışığında masasında çalışma planına yazan bir lise öğrencisi",
  },
  {
    track: expertiseTracks.education,
    title: "Sınav Stresi ve Erteleme",
    copy: "Sınav kaygısına ve erteleme davranışına psikolojik destek; seviyeye uygun hedefler ve tercih dönemine kadar süreç takibi.",
    image: "/buse-saridas-demo/assets/expertise/06-sinav-stresi.webp",
    alt: "Açık kitapların başında, sayfadan çok pencereye bakan yorgun bir lise öğrencisi",
  },
];
