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
  external?: boolean;
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  imageSrc,
  imageAlt,
  dataPosition,
  title,
  description,
  link,
  external = false,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <section ref={ref} className={inView ? "active" : "inactive"}>
      <a href={link} className="image" {...linkProps}>
        <div style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1em",
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "0.5em",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
          }}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{ objectPosition: dataPosition, objectFit: "cover" }}
            />
          </div>
        </div>
      </a>
      <div className="content">
        <div className="inner">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="actions">
            <li>
              <a href={link} className="button" {...linkProps}>
                {external ? "Visit site" : "Learn more"}
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
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      window.location.hash = "#products";
    }
  }, [inView]);
  return (
    <section id="products" ref={ref} className="wrapper style2 spotlights">
      <SpotlightSection
        imageSrc="/images/resume-ai.png"
        imageAlt="MyAwesomeResume - AI-powered resume management"
        dataPosition="center center"
        title="MyAwesomeResume"
        description="AI-powered resume management with git-like versioning. Tailor your resume for every job, track changes across versions, and export to PDF or Word. Built with Next.js, Couchbase, and Anthropic Claude."
        link="https://myawesomeresume.com"
        external={true}
      />
      <SpotlightSection
        imageSrc="/images/scansafeguard-ai.png"
        imageAlt="ScanSafeguard - AI-powered security scanning"
        dataPosition="center center"
        title="ScanSafeguard"
        description="AI-powered security scanning for networks, containers, S3 buckets, and GitHub repositories. An AI agent analyzes vulnerabilities, prioritizes risks, and guides you through remediation. Built on AWS with CDK, Lambda, and S3."
        link="https://scansafeguard.com"
        external={true}
      />
      <SpotlightSection
        imageSrc="/images/filteredblend.png"
        imageAlt="FilteredBlend - Premium coffee, tea, and drinkware"
        dataPosition="center center"
        title="FilteredBlend"
        description="E-commerce brand selling premium specialty coffee, loose-leaf tea, and drinkware. Available on Shopify and Amazon, featuring Panama Geisha beans, insulated tumblers, and brewing accessories."
        link="https://www.filteredblend.com"
        external={true}
      />
    </section>
  );
};

export default Spotlights;
