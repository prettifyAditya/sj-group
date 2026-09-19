"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../atoms/SwiperButton";
import Image from "next/image";

interface ServiceItem {
  linkHref: string;
  imgSrc: string;
  title: string;
}

const serviceData: ServiceItem[] = [
  {
    linkHref: "",
    imgSrc: "/images/service/service1.jpg",
    title: "Drilling",
  },
  {
    linkHref: "",
    imgSrc: "/images/service/service2.jpg",
    title: "Mining",
  },
  {
    linkHref: "",
    imgSrc: "/images/service/service3.jpg",
    title: "Excavation",
  },
  {
    linkHref: "",
    imgSrc: "/images/service/service4.jpg",
    title: "Transportation",
  },
  {
    linkHref: "",
    imgSrc: "/images/service/service5.jpg",
    title: "Blasting",
  },
  {
    linkHref: "",
    imgSrc: "/images/service/service6.jpg",
    title: "Dumping",
  },
];

export default function MoreServices() {
  return (
    <div className="more_service_sec sec-pad-all">
      <div className="container">
        <div className="heading">
          <h3>More Services</h3>
        </div>
        <div className="main_wrapper">
          <div className="swiper-nav center-full group white">
            <SwiperButton classname="swiper-prev more-prev"></SwiperButton>
            <SwiperButton classname="swiper-next more-next"></SwiperButton>
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
            {serviceData.map((item, index) => (
              <SwiperSlide key={index}>
                <Link className="service_col item-md" href={item.linkHref}>
                  <figure>
                    <Image
                      src={item.imgSrc}
                      width={380}
                      height={275}
                      alt="service-img"
                    ></Image>
                  </figure>
                  <figcaption>
                    <h6>{item.title}</h6>
                  </figcaption>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
