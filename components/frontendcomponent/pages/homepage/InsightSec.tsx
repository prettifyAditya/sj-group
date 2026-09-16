"use client";

import { useState } from "react";

interface Insight {
  img: string;
  icon: string;
  value: string;
  text: string;
}

const insights: Insight[] = [
  {
    img: "/images/home/insight1-bg.jpg",
    icon: "/images/home/insight1.svg",
    value: "2.5 M",
    text: "Tonnes Monthly production",
  },
  {
    img: "/images/home/insight2-bg.jpg",
    icon: "/images/home/insight2.svg",
    value: "1000+",
    text: "Heavy mining equipment",
  },
  {
    img: "/images/home/insight3-bg.jpg",
    icon: "/images/home/insight3.svg",
    value: "2,000 +",
    text: "skilled professionals",
  },
  {
    img: "/images/home/insight1-bg.jpg",
    icon: "/images/home/insight4.svg",
    value: "16 +",
    text: "operational crushing units",
  },
];

export default function InsightSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };
  return (
    <div className="insights_sec">
      <div
        className="main_wrapper flex"
        style={{
          backgroundImage: `url("${insights[activeIndex].img}")`,
        }}
        onMouseLeave={handleMouseLeave}
      >
        {insights.map((insight, index) => (
          <div
            className={`insight_col ${activeIndex === index ? "active" : ""}`}
            key={insight.value}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className="content">
              <div className="icon">
                <img
                  src={insight.icon}
                  className="svg"
                  width="57"
                  height="54"
                  alt="insight_icon"
                />
              </div>

              <h6>{insight.value}</h6>
              <p>{insight.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
