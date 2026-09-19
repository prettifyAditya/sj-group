import Image from "next/image";
import Button from "../../atoms/Button";

interface ServiceItem {
  number: string;
  title: string;
  desc: string;
  linkHref: string;
  mediaSrc: string;
}

const serviceData: ServiceItem[] = [
  {
    number: "01",
    title: "Drilling",
    desc: "Precision drilling carried out with specialised equipment and experienced teams to prepare rock and overburden for efficient and controlled mining operations.",
    linkHref: "/service-details",
    mediaSrc: "/images/service/service1.jpg",
  },
  {
    number: "02",
    title: "Mining",
    desc: "Precision drilling carried out with specialised equipment and experienced teams to prepare rock and overburden for efficient and controlled mining operations.",
    linkHref: "/service-details",
    mediaSrc: "/images/service/service2.jpg",
  },
  {
    number: "03",
    title: "Excavation",
    desc: "Precision drilling carried out with specialised equipment and experienced teams to prepare rock and overburden for efficient and controlled mining operations.",
    linkHref: "/service-details",
    mediaSrc: "/images/service/service3.jpg",
  },
  {
    number: "04",
    title: "Transportation",
    desc: "Precision drilling carried out with specialised equipment and experienced teams to prepare rock and overburden for efficient and controlled mining operations.",
    linkHref: "/service-details",
    mediaSrc: "/images/service/service4.jpg",
  },
  {
    number: "05",
    title: "Blasting",
    desc: "Precision drilling carried out with specialised equipment and experienced teams to prepare rock and overburden for efficient and controlled mining operations.",
    linkHref: "/service-details",
    mediaSrc: "/images/service/service5.jpg",
  },
  {
    number: "06",
    title: "Dumping",
    desc: "Precision drilling carried out with specialised equipment and experienced teams to prepare rock and overburden for efficient and controlled mining operations.",
    linkHref: "/service-details",
    mediaSrc: "/images/service/service6.jpg",
  },
];

export default function ServiceItems() {
  return (
    <section>
      <div className="service_listing_sec">
        <div className="main_wrapper">
          {serviceData.map((item) => (
            <div className="service_col" key={item.number}>
              <div className="colA">
                <div className="title">
                  <span>{item.number}</span>
                  <h6>{item.title}</h6>
                </div>
              </div>
              <div className="info-desc">
                <div className="desc">
                  <p>{item.desc}</p>
                  <Button
                    classname="solid-secondary"
                    buttonText="Explore"
                    linkHref={item.linkHref}
                    svgpath={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 25 25"
                      >
                        <path
                          fill="currentColor"
                          d="M18.92 6.05a.75.75 0 0 0-.598-.297L9.327 5.75a.75.75 0 1 0 0 1.5l7.19.002l-10.72 10.72a.75.75 0 0 0 1.061 1.06L17.573 8.318l.002 7.177a.75.75 0 0 0 1.5-.001l-.003-8.933a.75.75 0 0 0-.152-.51"
                        />
                      </svg>
                    }
                  ></Button>
                </div>
                <figure>
                  <Image
                    src={item.mediaSrc}
                    width={304}
                    height={218}
                    alt="service_img"
                  ></Image>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
