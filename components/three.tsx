"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ContactInfoProps {
  address: string;
  email: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ address, email, phone }) => (
  <section>
    <ul className="contact">
      <li>
        <h3>Address</h3>
        <span>{address}</span>
      </li>
      <li>
        <h3>Email</h3>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
      <li>
        <h3>Phone</h3>
        <span>{phone}</span>
      </li>
      <li>
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-linkedin-in">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
);

const ContactForm: React.FC = () => {
  return (
    <section>
      <form method="post" action="#">
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5}></textarea>
          </div>
        </div>
        <ul className="actions">
          <li>
            <button type="submit" className="button submit">
              Send Message
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
};

const GetInTouch: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });
  useEffect(() => {
    if (inView) {
      window.location.hash = "#three";
    }
  }, [inView]);
  return (
    <section ref={ref} id="three" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <p>
          If you're looking for a reliable partner to build your next e-commerce
          project, we'd love to hear from you. Contact us and let's discuss how
          we can help your business grow.
        </p>

        <div className="split style1">
          <ContactForm />
          <ContactInfo
            address="12345 Somewhere Road #654, Nashville, TN 00000-0000, USA"
            email="info@farvisonllc.com"
            phone="(415) 294-1325"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
