import HeroBanner from "../../organisms/HeroBanner";
import AboutDescription from "../../molecules/AboutDescription";
import PresenceGlobe from "../../organisms/PresenceGlobe";
import IndustryClients from "../../molecules/IndustryClients";
import Equipments from "./Equipments";
import MiningProject from "./MiningProject";
import MiningStrategy from "./MiningStrategy";
import WorkInAction from "./WorkInAction";
import "@/uploads/sass/project/project.css";

const saleData = [
  {
    price: "₹12,000 Cr +",
    status: "Ongoing",
    desc: "MDO for Development and Operation of Pachhwara Central Coal Mine.",
    location: "Odisha",
  },
  {
    price: "₹11,000 Cr +",
    status: "Completed",
    desc: "MDO for Development and Operation of Pachhwara Central Coal Mine.",
    location: "Chandigarh",
  },
  {
    price: "₹10,000 Cr +",
    status: "Completed",
    desc: "MDO for Development and Operation of Pachhwara Central Coal Mine.",
    location: "Jharkhand",
  },
  {
    price: "₹9,000 Cr +",
    status: "Ongoing",
    desc: "MDO for Development and Operation of Pachhwara Central Coal Mine.",
    location: "Telangana",
  },
  {
    price: "₹8,000 Cr +",
    status: "Ongoing",
    desc: "MDO for Development and Operation of Pachhwara Central Coal Mine.",
    location: "Jaipur",
  },
];

const projectClientData = [
  {
    imgSrc: "/images/other/client1.png",
  },
  {
    imgSrc: "/images/other/client2.png",
  },
  {
    imgSrc: "/images/other/client3.png",
  },
  {
    imgSrc: "/images/other/client4.png",
  },
  {
    imgSrc: "/images/other/client5.png",
  },
  {
    imgSrc: "/images/other/client6.png",
  },
  {
    imgSrc: "/images/other/client1.png",
  },
  {
    imgSrc: "/images/other/client2.png",
  },
  {
    imgSrc: "/images/other/client3.png",
  },
  {
    imgSrc: "/images/other/client4.png",
  },
  {
    imgSrc: "/images/other/client5.png",
  },
  {
    imgSrc: "/images/other/client6.png",
  },
];

export default function ProjectListingPage() {
  return (
    <main>
      <HeroBanner
        classname="project_listing"
        heading="Projects"
        desc="We operate one of the industry's most advanced heavy-equipment fleets, combining world-class machinery, "
        mediaSrc="/video/project-banner.mp4"
        posterSrc="/video/project-poster.jpg"
      />
      <AboutDescription
        classname="project_about"
        truck={false}
        mediaSrc="/video/project-about.mp4"
        heading="Overview"
        desc={`<p>
            We deliver comprehensive mining services to leading organisations,
            supporting large-scale operations through efficient excavation,
            haulage, dumping, and evacuation solutions. Backed by experienced
            teams, specialised equipment, and robust operational processes, we
            ensure the safe, efficient, and timely execution of mining
            activities. Our capabilities are designed to meet demanding site
            conditions while maintaining high standards of productivity, safety,
            and project performance.
          </p>`}
        ctaHref="/"
        ctaText="View All Projects"
        svgpath={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416z"
            />
            <path
              fill="currentColor"
              d="M777.3 822.7a32 32 0 0 0 45.4-45.4l-544-544a32 32 0 0 0-45.4 45.4z"
            />
          </svg>
        }
      />
      <PresenceGlobe
        classname="project-presence"
        heading="Expertise Built on Scale"
        filter={false}
        saleData={saleData}
      />
      <Equipments />
      <MiningStrategy />
      <MiningProject />
      <IndustryClients
        classname="project-clients"
        heading="Powering Industry Leaders"
        subheading="Our operational expertise helps leading organisations execute projects with confidence and precision."
        clientsData={projectClientData}
      />
      <WorkInAction />
    </main>
  );
}
