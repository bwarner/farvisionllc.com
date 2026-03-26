"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ContactForm from "./contact-form";

interface ContactInfoProps {
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email }) => (
  <section>
    <ul className="contact">
      <li>
        <h3>Email</h3>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
      <li>
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="https://www.linkedin.com/company/112710249" className="icon brands fa-linkedin-in" target="_blank" rel="noopener noreferrer">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61566601373321" className="icon brands fa-facebook-f" target="_blank" rel="noopener noreferrer">
              <span className="label">Facebook</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
);

const GetInTouch: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      window.location.hash = "#contact";
    }
  }, [inView]);
  return (
    <section ref={ref} id="contact" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <p>
          Have a question about one of our products, or interested in working
          together? Drop us a message.
        </p>

        <div className="split style1">
          <ContactForm />
          <ContactInfo email="info@farvisionllc.com" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
