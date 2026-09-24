import SocialCol from "../../molecules/SocialCol";

const socialData = [
  {
    img: "/images/home/social1.jpg",
    heading: "Sustainability initiatives",
    desc: "Our sustainability initiatives focus on optimizing resources, minimizing emissions, and building ..",
    linkHref: "/sustainability",
  },
  {
    img: "/images/home/social2.jpg",
    heading: "Energy / Waste Reduction",
    desc: "Our sustainability initiatives focus on optimizing resources, minimizing emissions, and building ..",
    linkHref: "/sustainability",
  },
  {
    img: "/images/home/social3.jpg",
    heading: "Social Responsibility Activities",
    desc: "Our sustainability initiatives focus on optimizing resources, minimizing emissions, and building ..",
    linkHref: "/sustainability",
  },
  {
    img: "/images/home/social1.jpg",
    heading: "Sustainability initiatives",
    desc: "Our sustainability initiatives focus on optimizing resources, minimizing emissions, and building ..",
    linkHref: "/sustainability",
  },
];

export default function SustainabilityListing() {
  return (
    <section>
      <div className="sustain_sec sec-pad-all">
        <div className="container">
          <div className="main_wrapper">
            {socialData.map((item, index) => (
              <SocialCol data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
