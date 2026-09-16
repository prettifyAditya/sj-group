"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../atoms/SwiperButton";
import Button from "../../atoms/Button";

interface socialSlide {
  img: string;
  heading: string;
  desc: string;
  linkHref: string;
}

const socialData: socialSlide[] = [
  {
    img: "/images/home/social1.jpg",
    heading: "Sustainability initiatives",
    desc: "Our sustainability initiatives focus on optimizing resources, minimizing emissions, and building ..",
    linkHref: "/",
  },
  {
    img: "/images/home/social2.jpg",
    heading: "Energy / Waste Reduction",
    desc: "Our sustainability initiatives focus on optimizing resources, minimizing emissions, and building ..",
    linkHref: "/",
  },
  {
    img: "/images/home/social3.jpg",
    heading: "Social Responsibility Activities",
    desc: "Our sustainability initiatives focus on optimizing resources, minimizing emissions, and building ..",
    linkHref: "/",
  },
  {
    img: "/images/home/social1.jpg",
    heading: "Sustainability initiatives",
    desc: "Our sustainability initiatives focus on optimizing resources, minimizing emissions, and building ..",
    linkHref: "/",
  },
];

export default function SocialResponsibility() {
  return (
    <div className="social_responsibility sec-pad-all">
      <div className="container">
        <div className="heading">
          <h3>Committed to Social Responsibility</h3>
          <p>
            Our Initiative to Reduce Carbon Footprint &amp; Give Back to Society
          </p>
        </div>
        <div className="main_wrapper">
          <div className="swiper-nav center-full group secondary">
            <SwiperButton classname="swiper-prev social-prev"></SwiperButton>
            <SwiperButton classname="swiper-prev social-next"></SwiperButton>
          </div>
          <Swiper
            modules={[Navigation]}
            className="social_slider"
            speed={1000}
            navigation={{
              prevEl: ".social-prev",
              nextEl: ".social-next",
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
            {socialData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="social_col item-md">
                  <figure>
                    <Image
                      src={item.img}
                      width={380}
                      height={410}
                      alt="Social_img"
                    />
                  </figure>
                  <figcaption>
                    <h6>{item.heading}</h6>
                    <div className="desc">
                      <p>{item.desc}</p>
                    </div>
                    <Button
                      linkHref={item.linkHref}
                      classname="solid-secondary"
                      buttonText="Read More"
                    ></Button>
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
