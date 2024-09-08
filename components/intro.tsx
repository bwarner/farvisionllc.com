import React from "react";
import { FaArrowDown } from "react-icons/fa";
import classNames from "clsx";

interface IntroSectionProps {
  className?: string;
}

const buttonClassNames = `button`;

const IntroSection: React.FC<IntroSectionProps> = ({ className }) => {
  return (
    <section
      id="intro"
      className={classNames(
        "wrapper style1 fullscreen fade-up bg-purple-800 text-white bg-intro bg-right-top bg-fixed bg-no-repeat bg-cover",
        className
      )}
    >
      <div className="inner pt-16 pr-16 pl-16 pb-8 text-center">
        <h1 className="text-5xl leading-6 font-bold mb-2">Hyperspace</h1>
        <p className="text-xl mb-8">
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
        <ul className="actions flex cursor-default list-none -ml-4 justify-center">
          <li className="appearance-none pr-4 align-middle">
            <a href="#one" className={buttonClassNames}>
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
