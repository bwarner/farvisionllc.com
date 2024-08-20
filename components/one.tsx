import React from "react";
import Spotlight from "./spotlight";
import clsx from "clsx";

interface SpotlightsProps {
  className?: string;
}

const Spotlights: React.FC<SpotlightsProps> = ({ className }) => {
  return (
    <section id="one" className={clsx("wrapper style2 spotlights", className)}>
      <Spotlight
        imageSrc="/images/pic01.jpg"
        imageAlt="Picture 1"
        title="Sed ipsum dolor"
        description="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
        link="generic.html"
        imagePosition="center center"
        className="flex flex-row h-[22.5em]"
      />
      <Spotlight
        imageSrc="/images/pic02.jpg"
        imageAlt="Picture 2"
        title="Feugiat consequat"
        description="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
        link="generic.html"
        imagePosition="top center"
        className="flex flex-row h-[22.5em]"
      />
      <Spotlight
        imageSrc="/images/pic03.jpg"
        imageAlt="Picture 3"
        title="Ultricies aliquam"
        description="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
        link="generic.html"
        imagePosition="25% 25%"
        className="flex flex-row h-[22.5em]"
      />
    </section>
  );
};

export default Spotlights;
