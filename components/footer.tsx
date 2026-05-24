import React from "react";
import clsx from "clsx";

interface FooterProps {
  className?: string;
}
const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
  return (
    <footer id="footer" className={clsx(className)}>
      <p>
        &copy; {new Date().getFullYear()} Farvision LLC. All rights reserved.
        {" "}
        <a href="/support">Support</a> · <a href="/terms">Terms</a> ·{" "}
        <a href="/privacy">Privacy</a>
      </p>
    </footer>
  );
};

export default Footer;
