import Image from "next/image";
import type { Metadata } from "next";
import ecommerce from "@/public/images/ecommerce.jpg"; // Assuming you have the image in the public/images folder

export const metadata: Metadata = {
  title: "Farvision LLC - Custom E-Commerce Solutions",
  description:
    "Farvision LLC offers custom e-commerce solutions tailored to your business needs. Our platforms are designed to enhance customer experience, streamline operations, and scale with your business.",
};

const Wrapper = () => {
  return (
    <div id="wrapper">
      {/* Main Section */}
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Custom E-Commerce Solutions</h1>
          <span className="image fit">
            <Image
              src={ecommerce}
              alt="E-commerce solutions image"
              layout="responsive"
            />
          </span>
          <p>
            At Farvision LLC, we create personalized e-commerce platforms that
            grow with your business. Our approach ensures that your platform
            scales seamlessly, adapting to increased traffic and sales without
            compromising performance.
          </p>
          <h2>Customer Experience</h2>
          <p>
            We prioritize user experience by offering responsive designs,
            personalized shopping flows, and intuitive navigation. Our custom
            solutions enhance engagement and optimize conversion rates, ensuring
            your customers enjoy a smooth journey from product discovery to
            checkout.
          </p>
          <h2>Powerful Backend Integrations</h2>
          <p>
            Our platforms integrate with key tools like payment gateways,
            inventory management systems, CRMs, and analytics platforms,
            allowing for efficient operations. Whether automating order
            processing, managing inventory, or delivering real-time customer
            data, we ensure your backend is robust and interconnected.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Wrapper;
