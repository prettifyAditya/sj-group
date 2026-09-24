"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import SwiperButton from "@/components/frontendcomponent/atoms/SwiperButton";

export default function FutureColleagues() {
  return (
    <section>
      <div className="future_colleague_sec sec-pad-all">
        <div className="container">
          <div className="future_wrapper">
            <div className="colA">
              <div className="heading">
                <h2>
                  Join the Conversation:{" "}
                  <span>Meet Your Future Colleagues</span>
                </h2>
              </div>
              <div className="career-nav swiper-nav group primary-border">
                <SwiperButton classname="career-prev swiper-prev" />
                <SwiperButton classname="career-next swiper-next" />
              </div>
              <div className="details">
                <h6>Feel free to contact us directly:</h6>
                <Link href="mailto:info@sjgroup.com">info@sjgroup.com</Link>
                <Link href="tel:+910000000000">+91 000 000 0000</Link>
              </div>
            </div>
            <div className="colB">
              <Swiper
                className="career_slider"
                modules={[Navigation]}
                speed={1000}
                navigation={{
                  prevEl: ".career-prev",
                  nextEl: ".career-next",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="future_col">
                    <div className="user_icon">
                      <Image
                        src="/assets/images/career/user1.jpg"
                        width="85"
                        height="85"
                        alt="User"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ullam accusamus recusandae molestiae expedita enim
                        eveniet, praesentium quisquam esse quidem aut rem vel
                        inventore alias placeat voluptatem! Ex quibusdam
                        laudantium veniam saepe in fuga ipsum repudiandae
                        quisquam aliquam dolores eos facere id, cumque delectus
                        commodi! Voluptatum corrupti alias ab magni delectus
                        suscipit culpa facere natus sunt soluta laudantium
                        deserunt et fuga provident repudiandae laborum voluptate
                        quia autem ipsam fugit ut minima veniam, iste at! Sequi
                        rem deleniti assumenda in esse natus quaerat blanditiis
                        placeat, id magnam adipisci laboriosam enim! Fugit,
                        voluptate.
                      </p>
                    </div>
                    <div className="details">
                      <h6>Name Here</h6>
                      <p>Desgination</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="future_col">
                    <div className="user_icon">
                      <Image
                        src="/assets/images/career/user2.jpg"
                        width="85"
                        height="85"
                        alt="User"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ullam accusamus recusandae molestiae expedita enim
                        eveniet, praesentium quisquam esse quidem aut rem vel
                        inventore alias placeat voluptatem! Ex quibusdam
                        laudantium veniam saepe in fuga ipsum repudiandae
                        quisquam aliquam dolores eos facere id, cumque delectus
                        commodi! Voluptatum corrupti alias ab magni delectus
                        suscipit culpa facere natus sunt soluta laudantium
                        deserunt et fuga provident repudiandae laborum voluptate
                        quia autem ipsam fugit ut minima veniam, iste at! Sequi
                        rem deleniti assumenda in esse natus quaerat blanditiis
                        placeat, id magnam adipisci laboriosam enim! Fugit,
                        voluptate.
                      </p>
                    </div>
                    <div className="details">
                      <h6>Name Here</h6>
                      <p>Desgination</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="future_col">
                    <div className="user_icon">
                      <Image
                        src="/assets/images/career/user1.jpg"
                        width="85"
                        height="85"
                        alt="User"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ullam accusamus recusandae molestiae expedita enim
                        eveniet, praesentium quisquam esse quidem aut rem vel
                        inventore alias placeat voluptatem! Ex quibusdam
                        laudantium veniam saepe in fuga ipsum repudiandae
                        quisquam aliquam dolores eos facere id, cumque delectus
                        commodi! Voluptatum corrupti alias ab magni delectus
                        suscipit culpa facere natus sunt soluta laudantium
                        deserunt et fuga provident repudiandae laborum voluptate
                        quia autem ipsam fugit ut minima veniam, iste at! Sequi
                        rem deleniti assumenda in esse natus quaerat blanditiis
                        placeat, id magnam adipisci laboriosam enim! Fugit,
                        voluptate.
                      </p>
                    </div>
                    <div className="details">
                      <h6>Name Here</h6>
                      <p>Desgination</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="future_col">
                    <div className="user_icon">
                      <Image
                        src="/assets/images/career/user2.jpg"
                        width="85"
                        height="85"
                        alt="User"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ullam accusamus recusandae molestiae expedita enim
                        eveniet, praesentium quisquam esse quidem aut rem vel
                        inventore alias placeat voluptatem! Ex quibusdam
                        laudantium veniam saepe in fuga ipsum repudiandae
                        quisquam aliquam dolores eos facere id, cumque delectus
                        commodi! Voluptatum corrupti alias ab magni delectus
                        suscipit culpa facere natus sunt soluta laudantium
                        deserunt et fuga provident repudiandae laborum voluptate
                        quia autem ipsam fugit ut minima veniam, iste at! Sequi
                        rem deleniti assumenda in esse natus quaerat blanditiis
                        placeat, id magnam adipisci laboriosam enim! Fugit,
                        voluptate.
                      </p>
                    </div>
                    <div className="details">
                      <h6>Name Here</h6>
                      <p>Desgination</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
