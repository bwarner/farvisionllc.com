"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface FeatureProps {
  iconClass: string;
  iconStyle?: "solid" | "brands";
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({
  iconClass,
  iconStyle = "solid",
  title,
  description,
}) => {
  return (
    <section>
      <span className={`icon ${iconStyle} major ${iconClass}`}></span>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

const TechStack: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
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
        <h2>Tech Stack</h2>
        <p>
          The tools and technologies we use to build products. Full-stack
          development with modern frameworks, cloud infrastructure, and AI
          integration from prototype to production.
        </p>
        <div className="features">
          <Feature
            iconClass="fa-laptop-code"
            title="Next.js & React"
            description="Full-stack web applications with React Server Components, App Router, and server actions. Type-safe, fast, and deployed on Vercel."
          />
          <Feature
            iconClass="fa-aws"
            iconStyle="brands"
            title="AWS Cloud"
            description="Infrastructure as code with AWS CDK. Lambda functions, S3 storage, SES email, and serverless architectures that scale automatically."
          />
          <Feature
            iconClass="fa-robot"
            title="AI Integration"
            description="Anthropic Claude and Vercel AI SDK powering intelligent features — from resume tailoring to vulnerability analysis and guided remediation."
          />
          <Feature
            iconClass="fa-code"
            title="TypeScript"
            description="Type-safe development across the entire stack. Shared types between frontend and backend, catching bugs at compile time."
          />
          <Feature
            iconClass="fa-database"
            title="Databases & APIs"
            description="Couchbase for flexible document storage, REST APIs, and serverless data layers. Designed for performance and reliability."
          />
          <Feature
            iconClass="fa-shield-alt"
            title="Security & DevOps"
            description="Vulnerability scanning, container security, CI/CD pipelines, and monitoring. Security built in from the start, not bolted on after."
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
