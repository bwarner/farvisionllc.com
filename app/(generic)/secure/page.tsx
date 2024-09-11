import Image from "next/image";
import Link from "next/link";
import infrastructureImg from "@/public/images/chainwide.jpg"; // Assuming the image is in the public folder

const InfrastructurePage = () => {
  return (
    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Secure and Scalable Infrastructure</h1>
          <span className="image fit">
            <Image
              src={infrastructureImg}
              alt="Security services image"
              layout="responsive"
              style={{ objectPosition: "25% 25%" }}
            />
          </span>
          <p>
            Security and scalability are at the core of what we build. Our
            e-commerce solutions are designed to grow with your business while
            ensuring the highest level of data protection.
          </p>
          <p>
            Whether it's protecting customer data, scaling with your business,
            or ensuring compliance with industry standards, we offer
            infrastructure that adapts to your needs without compromising
            security.
          </p>
          <ul className="actions">
            <li>
              <Link href="/generic" className="button">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;
