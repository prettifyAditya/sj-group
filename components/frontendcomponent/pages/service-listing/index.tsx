import HeroBanner from "../../organisms/HeroBanner";
import ServiceItems from "./ServiceItems";
import "@/uploads/sass/service/service.css";

export default function ServiceListingPage() {
  return (
    <main>
      <HeroBanner
        classname="service_listing"
        heading="Services"
        desc="We operate one of the industry's most advanced heavy-equipment fleets, combining world-class machinery, "
        mediaSrc="/video/service-banner.mp4"
        posterSrc="/video/service-poster.jpg"
      />
      <ServiceItems />
    </main>
  );
}
