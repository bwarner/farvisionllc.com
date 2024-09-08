import React from "react";

const SpotlightSection = ({
  imageSrc,
  imageAlt,
  dataPosition,
  title,
  description,
  link,
}) => (
  <section>
    <a href={link} className="image">
      <img src={imageSrc} alt={imageAlt} data-position={dataPosition} />
    </a>
    <div className="content">
      <div className="inner">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="actions">
          <li>
            <a href={link} className="button">
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const Spotlights = () => (
  <section id="one" className="wrapper style2 spotlights">
    <SpotlightSection
      imageSrc="images/pic01.jpg"
      imageAlt=""
      dataPosition="center center"
      title="Sed ipsum dolor"
      description="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
      link="generic.html"
    />
    <SpotlightSection
      imageSrc="images/pic02.jpg"
      imageAlt=""
      dataPosition="top center"
      title="Feugiat consequat"
      description="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
      link="generic.html"
    />
    <SpotlightSection
      imageSrc="images/pic03.jpg"
      imageAlt=""
      dataPosition="25% 25%"
      title="Ultricies aliquam"
      description="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
      link="generic.html"
    />
  </section>
);

export default Spotlights;
