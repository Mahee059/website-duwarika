// app/page.tsx

import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import DwarikasStory from "@/components/home/DwarikasStory";
import ExploresRoom from "@/components/home/ExploresRoom";
import Exclsuive from "@/components/home/Exclusive";
import SocialGathering from "@/components/home/SocialGathering"; 
import GoogleMaps from "@/components/home/GoogleMaps"; 
export default function HomePage() {
  return (
    <div className="bg-gray-100">
   
      <HeroSection />
      <About />
      <Gallery />
      <DwarikasStory />
      <ExploresRoom />
      <Exclsuive />
      <SocialGathering />
      <GoogleMaps />
   </div>
   
  );
}

