import React from "react";
import { FaArrowDown } from "react-icons/fa";
import classNames from "clsx";

interface IntroSectionProps {
  className?: string;
}

const buttonClassNames = `button`;

const IntroSection: React.FC<IntroSectionProps> = ({ className }) => {
  return (
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1>Hyperspace</h1>
        <p>
          Just another fine responsive site template designed by{" "}
          <a href="http://html5up.net">HTML5 UP</a>
          <br />
          and released for free under the{" "}
          <a href="http://html5up.net/license">Creative Commons</a>.
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
