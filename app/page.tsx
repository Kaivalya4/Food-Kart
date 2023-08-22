import Featured from "@/src/home/components/Featured";
import Offer from "@/src/home/components/Offer";
import Slider from "@/src/home/components/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
