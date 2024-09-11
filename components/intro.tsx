"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IntroSectionProps {
  className?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 50% of the section is visible
    initialInView: true,
  });
  useEffect(() => {
    if (inView) {
      window.location.hash = "#intro";
    }
  }, [inView]);
  return (
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1>Farvision LLC</h1>
        <p>
          Your trusted partner for e-commerce software development. We build
          custom solutions to help businesses succeed in the digital world.
        </p>

        <ul className="actions">
          <li>
            <a href="#one" className="button">
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
