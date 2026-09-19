import Image from "next/image";
import { Fragment } from "react";

interface ProcessItem {
  title: string;
  desc: string;
}

interface ProcessGroup {
  mediaSrc: string;
  stepData: ProcessItem[];
}

const processData: ProcessGroup[] = [
  {
    mediaSrc: "/images/service/service-process.jpg",
    stepData: [
      {
        title: "Plan",
        desc: "Understand project requirements, site conditions, production targets, and operational constraints.",
      },
      {
        title: "Mobilize",
        desc: "Deploy the required workforce, equipment, and resources to establish operations.",
      },
      {
        title: "Execute",
        desc: "Carry out planned mining activities through coordinated site operations.",
      },
      {
        title: "Monitor",
        desc: "Track productivity, equipment utilisation, safety, and operational performance.",
      },
      {
        title: "Optimise",
        desc: "Continuously improve workflows and resource utilisation to maintain efficient production.",
      },
    ],
  },
];

export default function OurProcess() {
  return (
    <div className="our_process sec-pad">
      <div className="container">
        <div className="heading">
          <h3>Our Process</h3>
        </div>
        <div className="main_wrapper flex">
          {processData.map((item, index) => (
            <Fragment key={index}>
              <figure>
                <Image
                  src={item.mediaSrc}
                  width={485}
                  height={350}
                  alt="step_img"
                ></Image>
              </figure>
              <figcaption>
                <ul>
                  {item.stepData.map((step, stepIndex) => (
                    <li key={step.title || stepIndex}>
                      <h6>{step.title}</h6>
                      <p>{step.desc}</p>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
