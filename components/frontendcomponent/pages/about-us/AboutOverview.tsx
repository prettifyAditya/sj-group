import Image from "next/image";

export default function AboutOverview() {
  return (
    <section>
      <div className="about_description banner">
        <div className="bg">
          <video
            src="/video/about-description.mp4"
            poster="/video/about-description-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="banner-wrapper">
            <div className="container">
              <div className="heading">
                <div className="icon">
                  <Image
                    src="/images/logo-color-vec.svg"
                    width={51}
                    height={51}
                    alt="logo_vector"
                  ></Image>
                </div>
                <h2>Committed to Excellence</h2>
                <div className="desc">
                  <p>
                    We are an experienced project execution company delivering
                    complex infrastructure, construction, and operational
                    projects across demanding environments. Our strength lies in
                    combining technical expertise, skilled teams, specialised
                    equipment, and disciplined project management to execute
                    work efficiently from planning through completion. With a
                    focus on safety, quality, and dependable delivery, we build
                    long-term partnerships by consistently meeting the evolving
                    requirements of our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
