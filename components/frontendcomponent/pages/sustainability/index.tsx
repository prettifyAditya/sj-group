import HeroBanner from "../../organisms/HeroBanner";
import SustainabilityListing from "./SustainabilityListing";
import "@/uploads/sass/sustain/sustain.css";

export default function SustainabilityPage() {
  return (
    <main>
      <HeroBanner
        classname="service_listing"
        heading="Sustainability"
        desc="Committed to Communities, Driven by Purpose"
        mediaSrc="/video/service-banner.mp4"
        posterSrc="/video/service-poster.jpg"
      />
      <SustainabilityListing />
    </main>
  );
}
