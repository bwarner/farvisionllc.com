import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface SpotlightProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  imagePosition?: string;
  className?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  imagePosition = "center center",
  className,
}) => {
  return (
    <section className={clsx("spotlight", className)}>
      <div
        className="image-wrapper"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="button">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Spotlight;
