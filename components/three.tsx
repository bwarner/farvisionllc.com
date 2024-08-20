import React from "react";
import clsx from "clsx";

interface ContactProps {
  className?: string;
}

const ContactSection: React.FC<ContactProps> = ({
  className,
}: ContactProps) => {
  return (
    <section
      id="three"
      className={clsx("wrapper style1 fade-up py-16", className)}
    >
      <div className="inner max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Get in touch
        </h2>
        <p className="text-gray-600 mb-12">
          Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
          mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
          hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
          quis lorem.
        </p>
        <div className="split md:flex space-y-12 md:space-y-0 md:space-x-12">
          <section>
            <form method="post" action="#" className="space-y-6">
              <div className="fields grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
                  />
                </div>
                <div className="field">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
                  />
                </div>
                <div className="field col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
                  ></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <button
                    type="submit"
                    className="button submit bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </li>
              </ul>
            </form>
          </section>
          <section>
            <ul className="contact space-y-8">
              <li>
                <h3 className="text-gray-700 font-bold">Address</h3>
                <p className="text-gray-600">
                  12345 Somewhere Road #654
                  <br />
                  Nashville, TN 00000-0000
                  <br />
                  USA
                </p>
              </li>
              <li>
                <h3 className="text-gray-700 font-bold">Email</h3>
                <a
                  href="mailto:user@untitled.tld"
                  className="text-blue-600 hover:text-blue-800"
                >
                  user@untitled.tld
                </a>
              </li>
              <li>
                <h3 className="text-gray-700 font-bold">Phone</h3>
                <p className="text-gray-600">(000) 000-0000</p>
              </li>
              <li>
                <h3 className="text-gray-700 font-bold">Social</h3>
                <ul className="icons flex space-x-4">
                  <li>
                    <a
                      href="#"
                      className="icon brands fa-twitter text-blue-600 hover:text-blue-800"
                    >
                      <span className="sr-only">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="icon brands fa-facebook-f text-blue-600 hover:text-blue-800"
                    >
                      <span className="sr-only">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="icon brands fa-github text-blue-600 hover:text-blue-800"
                    >
                      <span className="sr-only">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="icon brands fa-instagram text-blue-600 hover:text-blue-800"
                    >
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="icon brands fa-linkedin-in text-blue-600 hover:text-blue-800"
                    >
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
