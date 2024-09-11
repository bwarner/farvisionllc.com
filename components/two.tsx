"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface FeatureProps {
  iconClass: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ iconClass, title, description }) => {
  return (
    <section>
      <span className={`icon solid major ${iconClass}`}></span>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

const WhatWeDo: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 50% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      window.location.hash = "#two";
    }
  }, [inView]);

  return (
    <section
      id="two"
      ref={ref}
      className={clsx(
        { active: inView, inactive: !inView },
        "wrapper style3 fade-up"
      )}
    >
      <div className="inner">
        <h2>What we do</h2>
        <p>
          At Farvision LLC, we specialize in building scalable, secure, and
          innovative e-commerce solutions. We help businesses streamline their
          operations through custom development, integration, and modern
          technology.
        </p>
        <div className="features">
          <Feature
            iconClass="fa-laptop-code" // Changed to laptop code to signify development
            title="Custom Development"
            description="We develop custom e-commerce platforms tailored to your business needs, ensuring seamless user experience and scalability."
          />
          <Feature
            iconClass="fa-shield-alt" // Changed to shield to signify security
            title="Secure Solutions"
            description="Security is at the forefront of what we do. We build secure applications to protect both your business and customers."
          />
          <Feature
            iconClass="fa-plug" // Changed to plug to signify system integration
            title="System Integrations"
            description="We provide seamless integrations with third-party tools, payment gateways, inventory management systems, and more."
          />
          <Feature
            iconClass="fa-mobile-alt" // Changed to mobile to signify responsive design
            title="Responsive Design"
            description="Our solutions are optimized for all devices, providing a consistent and engaging experience across platforms."
          />
          <Feature
            iconClass="fa-life-ring" // Changed to life ring to signify continuous support
            title="Continuous Support"
            description="We provide ongoing support and maintenance to ensure your platform runs smoothly and adapts to your growing needs."
          />
          <Feature
            iconClass="fa-lightbulb" // Changed to lightbulb to signify innovation
            title="Innovative Solutions"
            description="We innovate with cutting-edge technologies to provide unique features that set your business apart from the competition."
          />
        </div>

        <ul className="actions">
          <li>
            <a href="generic.html" className="button">
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
