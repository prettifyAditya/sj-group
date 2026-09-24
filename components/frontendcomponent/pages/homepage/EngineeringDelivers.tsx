"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../../atoms/Button";
import SwiperButton from "../../atoms/SwiperButton";

interface EngineerSlide {
  img: string;
  heading: string;
  linkHref: string;
}

const engineeringSlides: EngineerSlide[] = [
  {
    img: "/images/home/engineering1.jpg",
    heading: "Drilling",
    linkHref: "",
  },
  {
    img: "/images/home/engineering2.jpg",
    heading: "Blasting",
    linkHref: "",
  },
  {
    img: "/images/home/engineering3.jpg",
    heading: "Loading",
    linkHref: "",
  },
  {
    img: "/images/home/engineering1.jpg",
    heading: "Drilling",
    linkHref: "",
  },
  {
    img: "/images/home/engineering2.jpg",
    heading: "Blasting",
    linkHref: "",
  },
  {
    img: "/images/home/engineering3.jpg",
    heading: "Loading",
    linkHref: "",
  },
];

export default function EngineeringDelivers() {
  return (
    <div className="engineering_delivers">
      <div className="bg-wrapper">
        <Image
          src="/images/home/engineering_bg.jpg"
          width={1280}
          height={677}
          alt="engineering_bg"
        />
      </div>
      <div className="container sec-pad-all">
        <div className="main_wrapper flex">
          <div className="heading">
            <h3>Engineering That Delivers</h3>
            <p>
              Our expertise spans the complete mining value chain, including
              controlled blasting, drilling, mining, excavation, overburden
              removal, transportation, crushing, material processing, and
              infrastructure development.&nbsp;
            </p>
            <Button
              linkHref="/service-listing"
              classname="btn solid-secondary"
              buttonText="View all Services"
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
          <div className="slider-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              className="engineering_slider"
              speed={1000}
              pagination={{
                el: ".progressbar",
                clickable: false,
                type: "progressbar",
              }}
              navigation={{
                prevEl: ".engineer-prev",
                nextEl: ".engineer-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {engineeringSlides.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link
                    className="engineering_col item-md"
                    href={item.linkHref}
                  >
                    <figure>
                      <Image
                        src={item.img}
                        width={380}
                        height={330}
                        alt={item.heading}
                      />
                    </figure>
                    <figcaption>
                      <h6>{item.heading}</h6>
                    </figcaption>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-wrap">
              <div className="progressbar" />
              <div className="swiper-nav group white-border">
                <SwiperButton classname="swiper-prev engineer-prev no_radius"></SwiperButton>
                <SwiperButton classname="swiper-next engineer-next no_radius"></SwiperButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
