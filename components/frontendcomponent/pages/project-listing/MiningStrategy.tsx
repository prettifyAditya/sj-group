"use client";
import { useState, useEffect } from "react";

interface MiningItem {
  number: string;
  title: string;
  desc: string;
}

const miningData: MiningItem[] = [
  {
    number: "01",
    title: "Mine Planning",
    desc: "Planning excavation sequences, equipment, and workflows for safe and efficient mining operations.",
  },
  {
    number: "02",
    title: "Drilling",
    desc: "Creating precise drill holes in rock and overburden to prepare for controlled blasting.",
  },
  {
    number: "03",
    title: "Blasting",
    desc: "Breaking rock and overburden through controlled blasting for efficient material handling.",
  },
  {
    number: "04",
    title: "Loading",
    desc: "Loading fragmented material into haulage equipment using efficient excavation methods.",
  },
  {
    number: "05",
    title: "Haulage",
    desc: "Transporting mined material from excavation areas to designated dumping or processing points.",
  },
  {
    number: "06",
    title: "Dumping",
    desc: "Systematically placing excavated material at designated dumping or stockpile areas.",
  },
  {
    number: "07",
    title: "Evacuation",
    desc: "Moving mined material efficiently from operational areas to designated destinations.",
  },
  {
    number: "08",
    title: "Operational Support",
    desc: "Providing equipment, workforce, maintenance, logistics, and safety support for smooth operations.",
  },
];

export default function MiningStrategy() {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsMobile(true);
        setItemsPerRow(miningData.length);
      } else if (width >= 768 && width < 992) {
        setIsMobile(false);
        setItemsPerRow(2);
      } else if (width >= 992 && width < 1170) {
        setIsMobile(false);
        setItemsPerRow(3);
      } else {
        setIsMobile(false);
        setItemsPerRow(4);
      }
    };
    // Set initial value
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (miningData.length === 0) {
    return null;
  }

  // Split data into rows
  const createRows = () => {
    if (isMobile) {
      // Below 768px: all items in upper_row
      return [miningData];
    }

    // For larger screens: split into rows
    const rows = [];
    for (let i = 0; i < miningData.length; i += itemsPerRow) {
      rows.push(miningData.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const rows = createRows();
  return (
    <div className="mining_strategy sec-pad-all">
      <div className="container">
        <div className="heading">
          <h3>Mining Strategy</h3>
          <p>
            End to End Support from Identification to Establishment and
            Production
          </p>
        </div>
        <div className="main_wrapper">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={
                isMobile || rowIndex % 2 === 0 ? "upper_row" : "lower_row"
              }
            >
              {row.map((item) => (
                <div key={item.number} className="strategy_col">
                  <span className="number">{item.number}</span>
                  <h6 className="title">{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
