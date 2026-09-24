import Image from "next/image";

export default function MissionVision() {
  return (
    <section>
      <div className="mission_vision">
        <div className="bg">
          <Image
            src="/images/about-us/aboutus_bg.jpg"
            width={1336}
            height={700}
            alt="background_bg"
          ></Image>
        </div>
        <div className="container">
          <div className="main_wrapper">
            <div className="vision_col">
              <figcaption>
                <h4>Our Vision</h4>
                <div className="desc">
                  <p>
                    To become a trusted project execution partner, recognised
                    for dependable delivery, operational excellence, and the
                    ability to successfully execute challenging projects across
                    diverse and demanding environments.
                  </p>
                </div>
              </figcaption>
              <figure>
                <Image
                  src="/images/about-us/vision_img.jpg"
                  width={182}
                  height={275}
                  alt="vision_img"
                ></Image>
              </figure>
            </div>
            <div className="mission_col">
              <figcaption>
                <h4>Our Mission</h4>
                <div className="desc">
                  <p>
                    To deliver complex infrastructure, construction, and
                    operational projects with precision, safety, and efficiency
                    by combining technical expertise, skilled people,
                    specialised resources, and disciplined project management.
                  </p>
                </div>
              </figcaption>
              <figure>
                <Image
                  src="/images/about-us/mission_img.jpg"
                  width={250}
                  height={250}
                  alt="mission_img"
                ></Image>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
