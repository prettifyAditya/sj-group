"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SwiperButton from "../../atoms/SwiperButton";
import TeamCol from "../../molecules/TeamCol";

const teamData = [
  {
    imgSrc: "/images/other/team1.jpg",
    name: "Mr. Dhruv Sharma",
    designation: "Founder",
    bio: `<p>Over the years, we have focused on building an organisation that brings together experienced people, technical capabilities, specialised resources, and disciplined project management to take on complex challenges with confidence. Every project presents its own demands, and our approach is to understand those requirements deeply, plan carefully, and execute with precision.</p>`,
  },
  {
    imgSrc: "/images/other/team1.jpg",
    name: "Mr. Rohan Mehta",
    designation: "Executive Director",
    bio: `<p>Over the years, we have focused on building an organisation that brings together experienced people, technical capabilities, specialised resources, and disciplined project management to take on complex challenges with confidence. Every project presents its own demands, and our approach is to understand those requirements deeply, plan carefully, and execute with precision.</p>`,
  },
  {
    imgSrc: "/images/other/team1.jpg",
    name: "Ms. Anita Patel",
    designation: "Vice President",
    bio: `<p>Over the years, we have focused on building an organisation that brings together experienced people, technical capabilities, specialised resources, and disciplined project management to take on complex challenges with confidence. Every project presents its own demands, and our approach is to understand those requirements deeply, plan carefully, and execute with precision.</p>`,
  },
  {
    imgSrc: "/images/other/team1.jpg",
    name: "Mr. Dhruv Sharma",
    designation: "Founder",
    bio: `<p>Over the years, we have focused on building an organisation that brings together experienced people, technical capabilities, specialised resources, and disciplined project management to take on complex challenges with confidence. Every project presents its own demands, and our approach is to understand those requirements deeply, plan carefully, and execute with precision.</p>`,
  },
  {
    imgSrc: "/images/other/team1.jpg",
    name: "Mr. Rohan Mehta",
    designation: "Executive Director",
    bio: `<p>Over the years, we have focused on building an organisation that brings together experienced people, technical capabilities, specialised resources, and disciplined project management to take on complex challenges with confidence. Every project presents its own demands, and our approach is to understand those requirements deeply, plan carefully, and execute with precision.</p>`,
  },
];

export default function LeaderShipTeam() {
  return (
    <section>
      <div className="leadership_team sec-pad-all">
        <div className="container">
          <div className="heading">
            <h3>Leadership Team</h3>
          </div>
          <div className="main_wrapper">
            <div className="swiper-nav center-full group white">
              <SwiperButton classname="swiper-prev team-prev"></SwiperButton>
              <SwiperButton classname="swiper-next team-next"></SwiperButton>
            </div>
            <Swiper
              modules={[Navigation]}
              className="team_slider"
              speed={1000}
              navigation={{
                prevEl: ".team-prev",
                nextEl: ".team-next",
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
              {teamData.map((item, index) => (
                <SwiperSlide key={index}>
                  <TeamCol data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
