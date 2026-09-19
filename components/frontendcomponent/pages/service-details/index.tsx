import HeroBanner from "../../organisms/HeroBanner";
import ServiceInfo from "./ServiceInfo";
import OurProcess from "./OurProcess";
import SafetyCompliance from "./SafetyCompliance";
import Faqs from "./Faqs";
import MoreServices from "./MoreServices";
import "@/uploads/sass/service/service.css";

export default function ServiceDetailsPage() {
  return (
    <main>
      <HeroBanner
        classname="service_details"
        heading="Mining"
        desc="End-to-end mining operations focused on systematic excavation, resource recovery, material handling"
        mediaSrc="/images/service/service-details-banner.jpg"
      />
      <ServiceInfo />
      <OurProcess />
      <SafetyCompliance />
      <Faqs />
      <MoreServices />
    </main>
  );
}
