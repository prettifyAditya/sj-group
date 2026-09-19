import Image from "next/image";
import "@/uploads/sass/component/component.css";

interface HeroProps {
  classname?: string;
  heading: string;
  desc: string;
  mediaSrc: string;
  posterSrc?: string;
}

export default function HeroBanner({
  classname = "",
  heading = "",
  desc = "",
  mediaSrc = "",
  posterSrc = "",
}: HeroProps) {
  return (
    <div className={`banner hero_banner ${classname}`}>
      <div className="bg">
        {mediaSrc.includes("mp4") ? (
          <video
            src={mediaSrc}
            poster={posterSrc}
            width={1280}
            height={700}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        ) : (
          <Image src={mediaSrc} width={1280} height={700} alt={heading}></Image>
        )}
        <div className="banner-wrapper">
          <div className="container">
            <div className="heading">
              <h1>{heading}</h1>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
