import React from "react";
import clsx from "clsx";

interface FooterProps {
  className?: string;
}
const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
  return (
    <footer
      id="footer"
      className={clsx("wrapper style1-alt py-8 bg-gray-800", className)}
    >
      <div className="inner max-w-6xl mx-auto text-center text-gray-400">
        <ul className="menu space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-6">
          <li>
            &copy; {new Date().getFullYear()} Untitled. All rights reserved.
          </li>
          <li>
            Design:{" "}
            <a
              href="http://html5up.net"
              className="text-blue-500 hover:text-blue-700"
            >
              HTML5 UP
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
