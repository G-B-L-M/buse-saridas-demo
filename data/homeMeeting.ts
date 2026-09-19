import { firstMeeting } from "./content";


export type MeetingRow = {
  number: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
};

export const meetingGroups: { label: string; rows: MeetingRow[] }[] = [
  {
    label: "Görüşme nasıl başlar",
    rows: [
      {
        number: firstMeeting.steps[0].number,
        title: firstMeeting.steps[0].title,
        copy: firstMeeting.steps[0].copy,
        image: "/buse-saridas-demo/assets/meeting/01-tanisiriz.webp",
        alt: "Akşam lambasının ışığında evinde masaya oturup dizüstü bilgisayarını açan bir kadın",
      },
      {
        number: firstMeeting.steps[1].number,
        title: firstMeeting.steps[1].title,
        copy: firstMeeting.steps[1].copy,
        image: "/buse-saridas-demo/assets/meeting/02-dinlerim.webp",
        alt: "Kulaklıkla evinde görüntülü görüşme yapan, eliyle anlatan bir kadın",
      },
      {
        number: firstMeeting.steps[2].number,
        title: firstMeeting.steps[2].title,
        copy: firstMeeting.steps[2].copy,
        image: "/buse-saridas-demo/assets/meeting/03-cerceveleriz.webp",
        alt: "Yukarıdan görünen ahşap masada bir deftere kısa notlar yazan el",
      },
    ],
  },

];

export const meetingRows: MeetingRow[] = meetingGroups.flatMap(group => group.rows);
