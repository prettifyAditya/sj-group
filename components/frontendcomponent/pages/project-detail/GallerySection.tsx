"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperButton from "../../atoms/SwiperButton";

interface GalleryItem {
  mediaSrc: string;
}

interface GalleryGroup {
  galleryType: string;
  galleryData: GalleryItem[];
}

const mediaGalleryData: GalleryGroup[] = [
  {
    galleryType: "Photo Gallery",
    galleryData: [
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
    ],
  },
  {
    galleryType: "Video Gallery",
    galleryData: [
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
      {
        mediaSrc: "/images/other/gallery1.jpg",
      },
    ],
  },
];

export default function GallerySection() {
  const [activeGallery, setActiveGallery] = useState(0);
  return (
    <div className="gallery_section sec-pad-all">
      <ul>
        {mediaGalleryData.map((item, index) => (
          <li
            key={index}
            className={index === activeGallery ? "active" : ""}
            onClick={() => setActiveGallery(index)}
          >
            {item.galleryType}
          </li>
        ))}
      </ul>
      <div className="main_wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          className="gallery_slider"
          speed={1000}
          navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next",
          }}
          pagination={{
            el: ".progress",
            type: "progressbar",
            clickable: false,
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
              slidesPerView: 4.6,
              spaceBetween: 8,
            },
          }}
        >
          {mediaGalleryData[activeGallery].galleryData.map((item, index) => (
            <SwiperSlide key={index}>
              <figure className="gallery_col">
                {item.mediaSrc.includes("mp4") ? (
                  <video
                    src={item.mediaSrc}
                    width={100}
                    height={100}
                    playsInline
                    muted
                    loop
                  ></video>
                ) : (
                  <Image
                    src={item.mediaSrc}
                    width={524}
                    height={442}
                    alt="gallery_img"
                  ></Image>
                )}
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-nav group primary-border">
          <SwiperButton classname="swiper-prev gallery-prev"></SwiperButton>
          <div className="progress"></div>
          <SwiperButton classname="swiper-next gallery-next"></SwiperButton>
        </div>
      </div>
    </div>
  );
}
