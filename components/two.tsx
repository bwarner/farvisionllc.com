import React from "react";

interface FeatureProps {
  iconClass: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ iconClass, title, description }) => (
  <section>
    <span className={`icon solid major ${iconClass}`}></span>
    <h3>{title}</h3>
    <p>{description}</p>
  </section>
);

const WhatWeDo: React.FC = () => (
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>What we do</h2>
      <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
        mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
        hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
        quis lorem.
      </p>

      <div className="features">
        <Feature
          iconClass="fa-code"
          title="Lorem ipsum amet"
          description="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        />
        <Feature
          iconClass="fa-lock"
          title="Aliquam sed nullam"
          description="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        />
        <Feature
          iconClass="fa-cog"
          title="Sed erat ullam corper"
          description="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        />
        <Feature
          iconClass="fa-desktop"
          title="Veroeros quis lorem"
          description="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        />
        <Feature
          iconClass="fa-link"
          title="Urna quis bibendum"
          description="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        />
        <Feature
          iconClass="fa-gem"
          title="Aliquam urna dapibus"
          description="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
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

export default WhatWeDo;
