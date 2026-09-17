import "@/uploads/sass/home/home.css";
import HeroBanner from "./HeroBanner";
import AboutDescription from "../../molecules/AboutDescription";
import InsightSec from "./InsightSec";
import EngineeringDelivers from "./EngineeringDelivers";
import DirectorMessage from "./DirectorMessage";
import SocialResponsibility from "./SocialResponsibility";
import IndustryClients from "../../molecules/IndustryClients";
import Milestone from "../../organisms/Milestone";
import { number } from "framer-motion";
import PresenceGlobe from "../../organisms/PresenceGlobe";

const homeClientData = [
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

const filterData = [
  {
    title: "Coal Mining",
    location: "73, New Baradwari, Jamshedpur, Jharkhand 831001",
  },
  {
    title: "Coal Mining",
    location: "73, New Baradwari, Jamshedpur, Jharkhand 831001",
  },
  {
    title: "Coal Mining",
    location: "73, New Baradwari, Jamshedpur, Jharkhand 831001",
  },
  {
    title: "Coal Mining",
    location: "73, New Baradwari, Jamshedpur, Jharkhand 831001",
  },
  {
    title: "Coal Mining",
    location: "73, New Baradwari, Jamshedpur, Jharkhand 831001",
  },
];

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

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <AboutDescription
        classname="home_about"
        truck={true}
        heading="SJ GROUP"
        desc={`<p>Established in 2005, SJ Group is a leading mining and infrastructure services company
                specializing in end-to-end project execution across the mining, construction, and
                industrial sectors. </p>
            <p>Our expertise spans the complete mining value chain, including controlled blasting,
                drilling, mining, excavation, overburden removal, transportation, crushing, material
                processing, and infrastructure development. Through our integrated approach, we
                provide turnkey solutions that enable clients to streamline operations, optimize
                productivity, and achieve project objectives within budget and schedule.</p>`}
        ctaText="Who We Are"
        ctaHref="/about-us"
        svgpath={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 25 25"
          >
            <path
              fill="currentColor"
              d="M18.92 6.05a.75.75 0 0 0-.598-.297L9.327 5.75a.75.75 0 1 0 0 1.5l7.19.002l-10.72 10.72a.75.75 0 0 0 1.061 1.06L17.573 8.318l.002 7.177a.75.75 0 0 0 1.5-.001l-.003-8.933a.75.75 0 0 0-.152-.51"
            />
          </svg>
        }
      />
      <InsightSec />
      <PresenceGlobe
        heading="Presence Across India"
        title="Search Projects"
        filter={true}
        filterData={filterData}
      />
      <EngineeringDelivers />
      <Milestone milestoneData={milestoneData} />
      <DirectorMessage />
      <IndustryClients
        heading="Trusted by Industry Leaders"
        clientsData={homeClientData}
      />
      <SocialResponsibility />
    </main>
  );
}
