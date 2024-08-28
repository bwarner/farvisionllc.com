import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farvision LLC - Under Construction",
  description: "Temporarily under construction",
};

export default function Home() {
  return (
    <div className="container">
      <header>
        <Image
          src="/images/logo.png"
          width={150} // Adjust the width as needed
          height={153} // Adjusted height to maintain the aspect ratio
          priority
          alt="Farvision LLC Logo"
          className="logo"
        />
        <h1 className="tagline">Bringing Your Vision to Life</h1>
      </header>

      <main>
        <p className="message">
          Our site is under construction. We are working hard to bring you an
          exceptional digital experience.
        </p>
        <div className="contact-info">
          <p>
            For inquiries, please contact Byron Warner at &nbsp;
            <a href="tel:&#52;&#49;&#53;&#50;&#57;&#52;&#45;&#49;&#51;&#50;&#53;">
              &#52;&#49;&#53;&#45;&#50;&#57;&#52;&#45;&#49;&#51;&#50;&#53;
            </a>
            &nbsp;or email us at &nbsp;
            <a href="mailto:&#105;&#110;&#102;&#111;&#64;&#102;&#97;&#114;&#118;&#105;&#115;&#105;&#111;&#110;&#108;&#108;&#99;&#46;&#99;&#111;&#109;">
              &#105;&#110;&#102;&#111;&#64;&#102;&#97;&#114;&#118;&#105;&#115;&#105;&#111;&#110;&#108;&#108;&#99;&#46;&#99;&#111;&#109;
            </a>
            .
          </p>
        </div>
      </main>

      <footer>
        <p className="disclaimer">
          © 2024 Farvision LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
