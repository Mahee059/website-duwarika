// app/page.tsx

import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import DwarikasStory from "@/components/home/DwarikasStory";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <About />
      <Gallery />
    <DwarikasStory />
   </div>
   
  );
}

