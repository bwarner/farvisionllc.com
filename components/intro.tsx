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
    <section ref={ref} id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1>Farvision LLC</h1>
        <p>
          A San Francisco-based company with a growing portfolio of web
          properties &mdash; from AI-powered software tools to e-commerce. We
          design, build, and ship products from idea to production.
        </p>

        <ul className="actions">
          <li>
            <a href="#products" className="button">
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
