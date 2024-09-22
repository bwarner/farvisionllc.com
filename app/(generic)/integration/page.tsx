import Image from "next/image";
import type { Metadata } from "next";
import integrationImg from "@/public/images/infrastructure.jpg"; // Assuming the image is in the public folder

export const metadata: Metadata = {
  title: "Farvision LLC - Integration Services",
  description:
    "Farvision LLC offers seamless system integration services for e-commerce platforms. We connect your system with essential third-party tools to streamline operations.",
};

const IntegrationPage = () => {
  return (
    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Seamless System Integration</h1>
          <span className="image fit">
            <Image
              src={integrationImg}
              alt="Integration services image"
              layout="responsive"
            />
          </span>
          <p>
            We integrate your e-commerce platform with essential third-party
            tools such as payment gateways, inventory systems, and customer
            management software to streamline your operations.
          </p>
          <p>
            Our integrations ensure seamless connectivity between your
            e-commerce system and various services, improving efficiency and
            ensuring real-time data flow. Whether you&apos;re automating
            payments, managing inventory, or handling customer data, we ensure
            smooth and secure integrations tailored to your business needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IntegrationPage;
