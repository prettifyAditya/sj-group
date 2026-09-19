"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../atoms/SwiperButton";
import ProjectCol from "../../molecules/ProjectCol";

interface MoreProjectItem {
  linkHref: string;
  img?: string;
  name: string;
  location: string;
  status: string;
  price: string;
}

const moreProjectData: MoreProjectItem[] = [
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
];

export default function MoreProject() {
  return (
    <div className="more_project_sec sec-pad-all">
      <div className="container">
        <div className="heading">
          <h4>More Projects</h4>
        </div>
        <div className="main_wrapper">
          <div className="swiper-nav center-full group white">
            <SwiperButton classname="swiper-prev social-prev"></SwiperButton>
            <SwiperButton classname="swiper-next social-next"></SwiperButton>
          </div>
          <Swiper
            modules={[Navigation]}
            className="more_slider"
            speed={1000}
            navigation={{
              prevEl: ".more-prev",
              nextEl: ".more-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              675: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {moreProjectData.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`}>
                <ProjectCol data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
