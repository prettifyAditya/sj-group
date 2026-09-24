"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../atoms/SwiperButton";
import Button from "../../atoms/Button";

interface ValueItem {
  imgSrc: string;
  title: string;
  desc: string;
  linkHref: string;
}

const valuesData: ValueItem[] = [
  {
    imgSrc: "/images/about-us/value1.jpg",
    title: "Safety First",
    desc: "We prioritise the safety of our people, partners, and project environments at every stage of execution.",
    linkHref: "/",
  },
  {
    imgSrc: "/images/about-us/value2.jpg",
    title: "Quality Focused",
    desc: "We prioritise the safety of our people, partners, and project environments at every stage of execution.",
    linkHref: "/",
  },
  {
    imgSrc: "/images/about-us/value3.jpg",
    title: "Operational Excellence",
    desc: "We prioritise the safety of our people, partners, and project environments at every stage of execution.",
    linkHref: "/",
  },
  {
    imgSrc: "/images/about-us/value4.jpg",
    title: "Client Partnership",
    desc: "We prioritise the safety of our people, partners, and project environments at every stage of execution.",
    linkHref: "/",
  },
  {
    imgSrc: "/images/about-us/value1.jpg",
    title: "Safety First",
    desc: "We prioritise the safety of our people, partners, and project environments at every stage of execution.",
    linkHref: "/",
  },
  {
    imgSrc: "/images/about-us/value2.jpg",
    title: "Quality Focused",
    desc: "We prioritise the safety of our people, partners, and project environments at every stage of execution.",
    linkHref: "/",
  },
];

export default function OurValues() {
  return (
    <section>
      <div className="our_values_sec sec-pad-all">
        <div className="container">
          <div className="heading">
            <h3>Our Values</h3>
          </div>
          <div className="main_wrapper">
            <div className="swiper-nav center-full group white">
              <SwiperButton classname="swiper-prev value-prev"></SwiperButton>
              <SwiperButton classname="swiper-next value-next"></SwiperButton>
            </div>
            <Swiper
              modules={[Navigation]}
              className="value_slider"
              speed={1000}
              navigation={{
                prevEl: ".value-prev",
                nextEl: ".value-next",
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
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {valuesData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="value_col item-md">
                    <figure>
                      <Image
                        src={item.imgSrc}
                        width={280}
                        height={328}
                        alt="value_img"
                      ></Image>
                    </figure>
                    <figcaption>
                      <h6>{item.title}</h6>
                    </figcaption>
                    <div className="details">
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                      <Button
                        classname="solid-secondary"
                        buttonText="View Details"
                        svgpath={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
