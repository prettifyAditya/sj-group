import Image from "next/image";
import type { MouseEventHandler } from "react";
import Button from "../atoms/Button";
import "@/uploads/sass/component/component.css";

interface HeroProps {
  classname?: string;
  heading: string;
  desc: string;
  mediaSrc: string;
  posterSrc?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function HeroBanner({
  classname = "",
  heading = "",
  desc = "",
  mediaSrc = "",
  posterSrc = "",
  onClick,
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
              {onClick && (
                <Button
                  onClick={onClick}
                  classname="solid-secondary"
                  buttonText="View Current Openings"
                  svgpath={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M340.9 149.3a30.6 30.6 0 0 0 0 42.8L652.7 512L341 831.9a30.6 30.6 0 0 0 0 42.7a29 29 0 0 0 41.7 0l331.6-340.3a32 32 0 0 0 0-44.6L382.6 149.4a29 29 0 0 0-41.7 0z"
                      ></path>
                    </svg>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
