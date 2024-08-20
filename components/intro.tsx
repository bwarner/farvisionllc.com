import React from "react";
import { FaArrowDown } from "react-icons/fa";
import classNames from "clsx";

interface IntroSectionProps {
  className?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ className }) => {
  return (
    <section
      id="intro"
      className={classNames(
        "wrapper style1 fullscreen fade-up bg-purple-800 text-white",
        className
      )}
    >
      <div className="inner text-center">
        <h1>Hyperspace</h1>
        <p>
          Just another fine responsive site template designed by{" "}
          <a href="http://html5up.net" className="text-blue-300 underline">
            HTML5 UP
          </a>
          <br />
          and released for free under the{" "}
          <a
            href="http://html5up.net/license"
            className="text-blue-300 underline"
          >
            Creative Commons
          </a>
          .
        </p>
        <ul className="actions justify-center mt-4">
          <li>
            <a
              href="#one"
              className="button scrolly flex items-center justify-center bg-white text-purple-800 py-3 px-6 rounded-full"
            >
              <FaArrowDown className="mr-2 text-base" />
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
