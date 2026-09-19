"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../atoms/SwiperButton";
import Image from "next/image";

interface SafetyProps {
  title: string;
  desc: string;
  mediaSrc: string;
}

const safetyData: SafetyProps[] = [
  {
    title: "Trained Workforce",
    desc: "Our teams operate with the training, knowledge, and awareness required to work safely in demanding mining environments. Regular safety briefings, operational guidance, and adherence to established procedures help our workforce respond effectively to site conditions while maintaining high standards of workplace safety.",
    mediaSrc: "/images/service/safety1.jpg",
  },
  {
    title: "Site Risk Management",
    desc: "Mining environments involve constantly changing conditions and operational risks. We identify potential hazards across active work areas, assess associated risks, and implement appropriate control measures to create safer working conditions for personnel, equipment, and project operations.",
    mediaSrc: "/images/service/safety2.jpg",
  },
  {
    title: "Trained Workforce",
    desc: "Our teams operate with the training, knowledge, and awareness required to work safely in demanding mining environments. Regular safety briefings, operational guidance, and adherence to established procedures help our workforce respond effectively to site conditions while maintaining high standards of workplace safety.",
    mediaSrc: "/images/service/safety1.jpg",
  },
  {
    title: "Site Risk Management",
    desc: "Mining environments involve constantly changing conditions and operational risks. We identify potential hazards across active work areas, assess associated risks, and implement appropriate control measures to create safer working conditions for personnel, equipment, and project operations.",
    mediaSrc: "/images/service/safety2.jpg",
  },
];

export default function SafetyCompliance() {
  return (
    <div className="safety_compliance sec-pad-all">
      <div className="heading">
        <h3>Safety & Compliance</h3>
      </div>
      <div className="main_wrapper">
        <div className="swiper-nav center-full group">
          <SwiperButton classname="swiper-prev safety-prev"></SwiperButton>
          <SwiperButton classname="swiper-next safety-next"></SwiperButton>
        </div>
        <Swiper
          modules={[Navigation]}
          className="safety_slider"
          speed={1000}
          centeredSlides={true}
          centeredSlidesBounds={true}
          navigation={{
            prevEl: ".safety-prev",
            nextEl: ".safety-next",
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
            1280: {
              slidesPerView: 1.4,
              spaceBetween: 100,
            },
          }}
        >
          {safetyData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="safety_col">
                <figcaption>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </figcaption>
                <figure>
                  <Image
                    src={item.mediaSrc}
                    width={369}
                    height={267}
                    alt="safety-img"
                  ></Image>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
