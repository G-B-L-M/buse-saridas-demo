import { HomeScenes } from "@/components/home/HomeScenes";
import { getFormAvailability } from "@/lib/forms/config";

export const dynamic = "force-static";

export default function Home() {
  return <HomeScenes forms={getFormAvailability()} />;
}
