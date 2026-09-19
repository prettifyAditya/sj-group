"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../atoms/SwiperButton";

interface EnquipSlide {
  img: string;
  title: string;
  desc: string;
}

const enquipData: EnquipSlide[] = [
  {
    img: "/images/other/enquip1.jpg",
    title: "Tippers",
    desc: "Amrapara, Pakur District, Jharkhand, India",
  },
  {
    img: "/images/other/enquip2.jpg",
    title: "Dumper",
    desc: "Amrapara, Pakur District, Jharkhand, India",
  },
  {
    img: "/images/other/enquip3.jpg",
    title: "Excavators",
    desc: "Amrapara, Pakur District, Jharkhand, India",
  },
  {
    img: "/images/other/enquip1.jpg",
    title: "Tippers",
    desc: "Amrapara, Pakur District, Jharkhand, India",
  },
  {
    img: "/images/other/enquip2.jpg",
    title: "Dumper",
    desc: "Amrapara, Pakur District, Jharkhand, India",
  },
];

export default function Equipments() {
  return (
    <div className="equipments_sec sec-pad-all">
      <div className="container">
        <div className="heading">
          <h3>Our Equipments</h3>
          <p>
            Our operations are supported by one of the industry’s largest and
            most modern heavy equipment fleets.
          </p>
        </div>
        <div className="main_wrapper">
          <div className="swiper-nav center-full group white">
            <SwiperButton classname="swiper-prev enquip-prev"></SwiperButton>
            <SwiperButton classname="swiper-next enquip-next"></SwiperButton>
          </div>
          <Swiper
            modules={[Navigation]}
            className="equip_slider"
            speed={1000}
            navigation={{
              prevEl: ".enquip-prev",
              nextEl: ".enquip-next",
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
            {enquipData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="enquip_col">
                  <figure>
                    <Image
                      src={item.img}
                      width={380}
                      height={245}
                      alt="enquip_img"
                    />
                  </figure>
                  <figcaption>
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </figcaption>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
