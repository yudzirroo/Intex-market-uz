import Delivery from "@/modules/Delivery";
import Features from "@/modules/Features";
import Footer from "@/modules/Footer";
import FramePool from "@/modules/FramePool";
import Header from "@/modules/Header";
import Hero from "@/modules/Hero";
import InflatablePools from "@/modules/InflatablePools";
import Info from "@/modules/Info";
import SeasonalSale from "@/modules/SeasonalSale";

export default function Home() {
    return (
        <div className="font-bold">
            <Header />
            <Hero />
            <SeasonalSale />
            <FramePool />
            <InflatablePools />
            <Delivery />
            <Features />
            <Info />
            <Footer />
        </div>
    );
}
