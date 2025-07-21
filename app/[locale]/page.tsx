import FramePool from "@/modules/FramePool";
import Header from "@/modules/Header";
import Hero from "@/modules/Hero";
import SeasonalSale from "@/modules/SeasonalSale";

export default function Home() {
  return (
    <div className="font-bold">
      <Header />
      <Hero />
      <SeasonalSale />
      <FramePool />
    </div>
  );
}
