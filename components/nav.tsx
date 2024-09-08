"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface NavProps {
  className?: string;
}

const linkClassNames =
  "first:ml-0 ml-7 w-all md:h-full text-right transform translate-y-0 transition-opacity transition-transform duration-150 ease-linear opacity-100 p-0 relative";
const anchorClassNames =
  "font-bold text-xs md:h-full leading-relaxed tracking-widest uppercase text-[rgba(255,255,255,0.35)] py-5 block relative transition-colors duration-200 ease-linear border-0 hover:text-white/0.55";
const menuItems = [
  { id: "#intro", name: "Welcome" },
  { id: "#one", name: "Who we are" },
  { id: "#two", name: "What we do" },
  { id: "#three", name: "Get in touch" },
];
const sidebarClassNames = (className?: string) => {
  const classNames = clsx(
    "h-full md:h-12 lg:h-full text-xs md:p-0 lg:p-[2.5em] pt-[0.5em] bg-[#312450] cursor-default overflow-x-hidden overflow-y-auto text-right top-0  z-[10000] md:line-height-[3.5em] md:overflow-hidden md:text-center",
    className
  );
  return classNames;
};
//"min-w-[400px] text-xs lg:p-[2.5em] pt-[0.5em] bg-[#312450]  h-screen left-0",

const Nav: React.FC<NavProps> = ({ className }: NavProps) => {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    console.log("adding event listener");
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  console.log("className: ", className);
  const divClassNames = clsx(
    "inner translate-y-0 transition-opacity duration-1000 ease min-h-full md:h-12 min-h-full items-end md:items-stretch md:h-inherit md:line-height-inherit"
  );
  return (
    <section id="sidebar" className={sidebarClassNames(className)}>
      <div className={divClassNames}>
        <nav>
          <ul className="flex flex-col lg:flex-col md:flex-row items-end md:items-center lg:items-end list-none p-0 space-y-6 md:h-full">
            {menuItems.map((item, i) => (
              <li key={item.id} className={linkClassNames}>
                <a
                  href={item.id}
                  className={clsx(anchorClassNames, {
                    "text-white": currentHash === item.id,
                    active: currentHash === item.id,
                  })}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
