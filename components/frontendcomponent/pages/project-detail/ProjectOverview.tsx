"use client";
import Image from "next/image";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import Button from "../../atoms/Button";

interface SpecificationItem {
  title: string;
  desc: string;
}

interface HighlightItem {
  desc: string;
}

interface ContentSection {
  type: "content";
  heading: string;
  content: string;
}

interface SpecificationsSection {
  type: "specifications";
  heading: string;
  specificationsData: SpecificationItem[];
}

interface HighlightsSection {
  type: "highlights";
  heading: string;
  highlightsData: HighlightItem[];
}

type OverviewSection =
  | ContentSection
  | SpecificationsSection
  | HighlightsSection;

interface ProjectOverviewProps {
  overviewData?: OverviewSection[];
}

interface ContactFormData {
  companyName: string;
  phone: string;
  email: string;
  message: string;
}

const defaultOverviewData: OverviewSection[] = [
  {
    type: "content",
    heading: "Project Overview",
    content: `<p>Dhudhichua OCP is an ongoing open-cast mining project in Amrapara, Pakur District, Jharkhand. The project involves large-scale mining operations supported by systematic excavation, material handling, haulage, and site management. With experienced teams, specialised equipment, and structured operational processes, the project is being executed with a strong focus on safety, productivity, and efficient resource utilisation.</p><p>The project reflects our commitment to delivering dependable mining solutions in complex operating environments. From coordinated site activities and efficient material movement to the deployment of heavy machinery, every operation is planned to maintain continuity and performance. Our on-ground approach combines technical expertise, operational discipline, and safety standards to support the project's ongoing requirements and long-term productivity.</p>`,
  },
  {
    type: "specifications",
    heading: "Specifications",
    specificationsData: [
      { title: "Project", desc: "Dhudhichua OCP" },
      { title: "Category", desc: "Mining Project" },
      { title: "Method Used", desc: "Open-Cast" },
      { title: "Location", desc: "Pakur District, Jharkhand" },
      { title: "Current Status", desc: "Ongoing" },
      { title: "Project Value", desc: "₹ 12,000 Cr" },
    ],
  },
  {
    type: "highlights",
    heading: "Highlights",
    highlightsData: [
      {
        desc: "The project involves coordinated mining and excavation activities designed to support efficient operations across demanding site conditions.",
      },
      {
        desc: "Systematic excavation, loading, haulage, and material movement form key components of the project's operational activities.",
      },
      {
        desc: "The project is supported by experienced professionals and specialised heavy equipment to maintain reliable and productive site operations.",
      },
      {
        desc: "Disciplined processes and safety-conscious operating practices help ensure controlled, efficient, and responsible execution.",
      },
    ],
  },
];

export default function ProjectOverview({
  overviewData = defaultOverviewData,
}: ProjectOverviewProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="project_overview sec-pad-all">
      <div className="container">
        <div className="main_wrapper flex">
          <div className="colA">
            {overviewData.map((section) => {
              switch (section.type) {
                case "content":
                  return (
                    <section key={section.heading}>
                      <h4>{section.heading}</h4>
                      <div
                        className="website-content"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </section>
                  );

                case "specifications":
                  return (
                    <section key={section.heading}>
                      <h4>{section.heading}</h4>
                      <ul className="specifications">
                        {section.specificationsData.map((item, index) => (
                          <li key={`${item.title}-${index}`}>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </section>
                  );

                case "highlights":
                  return (
                    <section key={section.heading}>
                      <h4>{section.heading}</h4>
                      <div className="highlight_wrapper">
                        {section.highlightsData.map((item, index) => (
                          <div className="highlight_col" key={index}>
                            <div className="number">{index + 1}</div>
                            <div className="desc">
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  );

                default:
                  return null;
              }
            })}
          </div>
          <div className="colB">
            <form className="contact_form form" onSubmit={handleSubmit}>
              <div className="icon">
                <Image
                  src="/icon/logo-vector.svg"
                  width="51"
                  height="51"
                  alt="Logo_vector"
                ></Image>
              </div>
              <div className="form-grid">
                <Input
                  type="text"
                  label="Company Name *"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  label="Phone *"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  label="Email *"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  label="Message *"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="btn_wrap">
                <Button
                  classname="solid-secondary"
                  buttonText="Enquire Now"
                  type="submit"
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
