"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from "@/components/frontendcomponent/atoms/SwiperButton";

export default function LifeOrganisation() {
  return (
    <section>
      <div className="life_org_sec sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>
              See Yourself Here<span>Life at SJ Group</span>
            </h2>
            <p>
              Innovation thrives where people feel valued. Get a glimpse of the
              environment we've built—a place where collaboration, learning, and
              celebration are part of the everyday.
            </p>
          </div>
        </div>
        <div className="life_wrapper">
          <Swiper
            className="life_slider"
            loop={true}
            modules={[Navigation, Pagination]}
            speed={1000}
            navigation={{
              prevEl: ".life-prev",
              nextEl: ".life-next",
            }}
            pagination={{
              enabled: true,
              el: ".progressbar",
              type: "progressbar",
            }}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 5,
              },
              540: {
                slidesPerView: 1.8,
                spaceBetween: 15,
              },
              991: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <figure>
                <Image
                  src="/images/career/career1.jpg"
                  width="550"
                  height="430"
                  alt="Career"
                ></Image>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image
                  src="/images/career/career1.jpg"
                  width="550"
                  height="430"
                  alt="Career"
                ></Image>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image
                  src="/images/career/career1.jpg"
                  width="550"
                  height="430"
                  alt="Career"
                ></Image>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image
                  src="/images/career/career1.jpg"
                  width="550"
                  height="430"
                  alt="Career"
                ></Image>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image
                  src="/images/career/career1.jpg"
                  width="550"
                  height="430"
                  alt="Career"
                ></Image>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image
                  src="/images/career/career1.jpg"
                  width="550"
                  height="430"
                  alt="Career"
                ></Image>
              </figure>
            </SwiperSlide>
          </Swiper>
          <div className="nav_wrapper swiper-nav primary-border">
            <SwiperButton classname="life-prev swiper-prev" />
            <div className="progressbar"></div>
            <SwiperButton classname="life-next swiper-next" />
          </div>
        </div>
      </div>
    </section>
  );
}
