import HeroBanner from "../../organisms/HeroBanner";
import AboutOverview from "./AboutOverview";
import OurValues from "./OurValues";
import Milestone from "../../organisms/Milestone";
import MissionVision from "./MissionVision";
import LeaderShipTeam from "./LeaderShipTeam";
import "@/uploads/sass/about/about.css";

const milestoneData = [
  {
    img: "/images/home/milestone1.svg",
    year: 2005,
    number: "01",
    heading: "The Foundation",
    desc: "Established to provide trusted mining and infrastructure services with engineering excellence.",
  },
  {
    img: "/images/home/milestone2.svg",
    year: 2008,
    number: "02",
    heading: "Expanding Mining Operations",
    desc: "Expanded into large-scale mining with drilling, blasting, excavation, and overburden removal services.",
  },
  {
    img: "/images/home/milestone3.svg",
    year: 2012,
    number: "03",
    heading: "Project Execution",
    desc: "Expanded into end-to-end mining solutions, from transportation to mine development.",
  },
  {
    img: "/images/home/milestone4.svg",
    year: 2016,
    number: "04",
    heading: "Technology & Fleet Modernization",
    desc: "Invested in advanced machinery to enhance productivity and efficiency.",
  },
  {
    img: "/images/home/milestone1.svg",
    year: 2020,
    number: "05",
    heading: "The Foundation",
    desc: "Established to provide trusted mining and infrastructure services with engineering excellence.",
  },
  {
    img: "/images/home/milestone2.svg",
    year: 2022,
    number: "06",
    heading: "Expanding Mining Operations",
    desc: "Expanded into large-scale mining with drilling, blasting, excavation, and overburden removal services.",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <HeroBanner
        classname="about_us_banner"
        heading="About Us"
        desc="Powering projects with people, expertise, and dependable execution."
        mediaSrc="/video/about-banner.mp4"
        posterSrc="/video/about-poster.jpg"
      />
      <AboutOverview />
      <MissionVision />
      <OurValues />
      <Milestone classname="about_milestone" milestoneData={milestoneData} />
      <LeaderShipTeam />
    </main>
  );
}
