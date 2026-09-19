"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface WorkInActionProps {
  images?: string[];
}

const defaultImages: string[] = [
  "/images/project/work-action1.jpg",
  "/images/project/work-action1.jpg",
  "/images/project/work-action1.jpg",
  "/images/project/work-action1.jpg",
  "/images/project/work-action1.jpg",
  "/images/project/work-action1.jpg",
  "/images/project/work-action1.jpg",
  "/images/project/work-action1.jpg",
  "/images/project/work-action1.jpg",
];

const VISIBLE_COUNT = 4;

export default function WorkInAction({
  images = defaultImages,
}: WorkInActionProps) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.unbind("[data-fancybox]");
    };
  }, []);

  const visibleImages = images.slice(0, VISIBLE_COUNT);
  const hiddenImages = images.slice(VISIBLE_COUNT);
  const remainingCount = hiddenImages.length;
  return (
    <div className="work_action sec-pad-all">
      <div className="container">
        <div className="heading">
          <h3>Our Work in Action</h3>
        </div>
        <div className="main_wrapper">
          {visibleImages.map((img, index) => {
            const isLastVisible = index === visibleImages.length - 1;
            const showCount = isLastVisible && remainingCount > 0;

            return (
              <a
                key={index}
                href={img}
                className="figure"
                data-fancybox="gallery"
              >
                <Image src={img} width={380} height={280} alt="" />
                {showCount && (
                  <div className="count">
                    <span>{remainingCount}+</span> images
                  </div>
                )}
              </a>
            );
          })}

          {/* Not shown as thumbnails, but still part of the fancybox gallery group
              so the lightbox can navigate through every image, not just the first 4. */}
          {hiddenImages.map((img, index) => (
            <a
              key={index}
              href={img}
              data-fancybox="gallery"
              className="hidden"
              aria-hidden="true"
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
