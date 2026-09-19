"use client";

import { useState } from "react";
import ProjectCol from "../../molecules/ProjectCol";

interface MiningProjectItem {
  linkHref: string;
  img?: string;
  name: string;
  location: string;
  status: string;
  price: string;
}

interface MiningProjectGroup {
  status: string;
  projectData: MiningProjectItem[];
}

const miningProjectData: MiningProjectGroup[] = [
  {
    status: "Ongoing",
    projectData: [
      {
        linkHref: "/",
        img: "/images/other/mining1.jpg",
        name: "Dhudhichua OCP",
        location: "Amrapara, Pakur District, Jharkhand, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
      {
        linkHref: "/",
        img: "/images/other/mining2.jpg",
        name: "Gouthamkhani OCP",
        location: "Singrauli, Madhya Pradesh, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
      {
        linkHref: "/",
        img: "/images/other/mining3.jpg",
        name: "Lakhanpur OCP",
        location: "Sonebhadra, Uttar Pradesh, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
      {
        linkHref: "/",
        img: "/images/other/mining1.jpg",
        name: "Dhudhichua OCP",
        location: "Amrapara, Pakur District, Jharkhand, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
      {
        linkHref: "/",
        img: "/images/other/mining2.jpg",
        name: "Gouthamkhani OCP",
        location: "Singrauli, Madhya Pradesh, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
      {
        linkHref: "/",
        img: "/images/other/mining3.jpg",
        name: "Lakhanpur OCP",
        location: "Sonebhadra, Uttar Pradesh, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
    ],
  },
  {
    status: "Completed",
    projectData: [
      {
        linkHref: "/",
        img: "/images/other/mining1.jpg",
        name: "Dhudhichua OCP",
        location: "Amrapara, Pakur District, Jharkhand, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
      {
        linkHref: "/",
        img: "/images/other/mining2.jpg",
        name: "Gouthamkhani OCP",
        location: "Singrauli, Madhya Pradesh, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
      {
        linkHref: "/",
        img: "/images/other/mining3.jpg",
        name: "Lakhanpur OCP",
        location: "Sonebhadra, Uttar Pradesh, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
      {
        linkHref: "/",
        img: "/images/other/mining1.jpg",
        name: "Dhudhichua OCP",
        location: "Amrapara, Pakur District, Jharkhand, India",
        status: "Ongoing",
        price: "₹ 12,000 Cr",
      },
    ],
  },
];

export default function MiningProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mining_sec sec-pad-all">
      <div className="container">
        <div className="upper_sec">
          <div className="heading">
            <h3>Our Mining Projects</h3>
          </div>
          <ul className="tab-nav">
            {miningProjectData.map((group, index) => (
              <li
                key={group.status}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {group.status}
              </li>
            ))}
          </ul>
        </div>
        <div className="main_wrapper">
          {miningProjectData[activeIndex].projectData.map((item, index) => (
            <ProjectCol data={item} key={`${item.name}-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
