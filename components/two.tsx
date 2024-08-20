import React from "react";
import {
  FaCode,
  FaLock,
  FaCog,
  FaDesktop,
  FaLink,
  FaGem,
} from "react-icons/fa";
import clsx from "clsx";

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  return (
    <section id="two" className={clsx("wrapper style3 fade-up", className)}>
      <div className="inner">
        <h2>What we do</h2>
        <p>
          Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
          mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
          hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
          quis lorem.
        </p>
        <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="text-center">
            <FaCode className="text-4xl mb-4 text-blue-600" />
            <h3>Lorem ipsum amet</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis
              aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </section>
          <section className="text-center">
            <FaLock className="text-4xl mb-4 text-blue-600" />
            <h3>Aliquam sed nullam</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis
              aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </section>
          <section className="text-center">
            <FaCog className="text-4xl mb-4 text-blue-600" />
            <h3>Sed erat ullam corper</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis
              aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </section>
          <section className="text-center">
            <FaDesktop className="text-4xl mb-4 text-blue-600" />
            <h3>Veroeros quis lorem</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis
              aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </section>
          <section className="text-center">
            <FaLink className="text-4xl mb-4 text-blue-600" />
            <h3>Urna quis bibendum</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis
              aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </section>
          <section className="text-center">
            <FaGem className="text-4xl mb-4 text-blue-600" />
            <h3>Aliquam urna dapibus</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis
              aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </section>
        </div>
        <ul className="actions mt-8">
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

export default FeaturesSection;
