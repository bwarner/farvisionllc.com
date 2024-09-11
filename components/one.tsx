"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface SpotlightSectionProps {
  imageSrc: string;
  imageAlt: string;
  dataPosition: string;
  title: string;
  description: string;
  link: string;
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  imageSrc,
  imageAlt,
  dataPosition,
  title,
  description,
  link,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <section ref={ref} className={inView ? "active" : "inactive"}>
      <a href={link} className="image">
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectPosition: dataPosition, objectFit: "cover" }}
          />
        </div>
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
};

const Spotlights: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });
  useEffect(() => {
    if (inView) {
      window.location.hash = "#one";
    }
  }, [inView]);
  return (
    <section id="one" ref={ref} className="wrapper style2 spotlights">
      <SpotlightSection
        imageSrc="/images/ecommerce.jpg"
        imageAlt="E-commerce solutions image"
        dataPosition="center center"
        title="Custom E-Commerce Solutions"
        description="At Farvision LLC, we specialize in building tailored e-commerce platforms designed to scale with your business. Our solutions ensure seamless customer experiences and powerful backend integrations."
        link="custom"
      />
      <SpotlightSection
        imageSrc="/images/integration.png"
        imageAlt="Integration services image"
        dataPosition="top center"
        title="Seamless System Integration"
        description="We integrate your e-commerce platform with essential third-party tools such as payment gateways, inventory systems, and customer management software to streamline your operations."
        link="integration"
      />
      <SpotlightSection
        imageSrc="/images/infrastructure.jpg"
        imageAlt="Security services image"
        dataPosition="25% 25%"
        title="Secure and Scalable Infrastructure"
        description="Security and scalability are at the core of what we build. Our e-commerce solutions are designed to grow with your business while ensuring the highest level of data protection."
        link="secure"
      />
    </section>
  );
};

export default Spotlights;
