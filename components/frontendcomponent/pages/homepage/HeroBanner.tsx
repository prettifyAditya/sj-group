"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/frontendcomponent/atoms/Button";

interface HeroSlide {
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  videoSrc: string;
  poster: string;
}

const heroSlides: HeroSlide[] = [
  {
    heading: "Engineering Advantage, Built Into Every Solution.",
    description:
      "We operate one of the industry's most advanced heavy-equipment fleets, combining world-class machinery, intelligent technology, and proactive maintenance to deliver reliable performance and uninterrupted project execution.",
    ctaText: "Explore Our Services",
    ctaHref: "/service-listing",
    videoSrc: "/video/hero1.mp4",
    poster: "/video/hero1-poster.jpg",
  },
  {
    heading: "Operational Discipline to Practised Efficiency.",
    description:
      "We operate one of the industry's most advanced heavy-equipment fleets, combining world-class machinery, intelligent technology, and proactive maintenance to deliver reliable performance and uninterrupted project execution.",
    ctaText: "Explore Our Services",
    ctaHref: "/service-listing",
    videoSrc: "/video/hero2.mp4",
    poster: "/video/hero2-poster.jpg",
  },
  {
    heading: "Engineering Advantage, Built Into Every Machine.",
    description:
      "We operate one of the industry's most advanced heavy-equipment fleets, combining world-class machinery, intelligent technology, and proactive maintenance to deliver reliable performance and uninterrupted project execution.",
    ctaText: "Explore Our Services",
    ctaHref: "/service-listing",
    videoSrc: "/video/hero3.mp4",
    poster: "/video/hero3-poster.jpg",
  },
];

const ctaIcon = (
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
);

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="banner hero-banner">
      <div className="bg">
        <div className="image-wrapper tab-nav-content">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.videoSrc}
              className={`tabs ${index === activeIndex ? "active" : ""}`}
            >
              <video
                src={slide.videoSrc}
                poster={slide.poster}
                width={1333}
                height={750}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </div>

        <div className="banner-wrapper">
          <div className="container">
            <Swiper
              modules={[Autoplay, Pagination]}
              className="hero-heading"
              speed={1500}
              direction="vertical"
              allowTouchMove={false}
              pagination={{ el: ".swiper-dots", clickable: false }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: { slidesPerView: 3, spaceBetween: 20 },
                675: { slidesPerView: 4, spaceBetween: 20 },
                991: { slidesPerView: 1, spaceBetween: 20 },
              }}
              onSlideChange={handleSlideChange}
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.heading}>
                  <div className="heading">
                    <h2>{slide.heading}</h2>
                    <p>{slide.description}</p>
                    <Button
                      linkHref={slide.ctaHref}
                      buttonText={slide.ctaText}
                      classname="solid-secondary"
                      svgpath={ctaIcon}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="swiper-dots"></div>
      </div>
    </div>
  );
}
