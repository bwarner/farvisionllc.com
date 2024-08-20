"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface NavProps {
  className?: string;
}

const linkClassNames =
  "first:mt-0 transform translate-y-0 transition-opacity transition-transform duration-150 ease-linear opacity-100 p-0 relative";
const anchorClassNames =
  "block font-bold text-xs leading-relaxed tracking-widest uppercase text-[rgba(255,255,255,0.35)] py-5 relative transition-colors duration-200 ease-linear border-0 hover:text-white/0.55";
const menuItems = [
  { id: "#intro", name: "Welcome" },
  { id: "#one", name: "Who we are" },
  { id: "#two", name: "What we do" },
  { id: "#three", name: "Get in touch" },
];
const sidebarClassNames = (className?: string) =>
  clsx(
    "text-xs lg:p-[2.5em] pt-[0.5em] bg-[#312450] cursor-default h-screen left-0 overflow-x-hidden overflow-y-auto fixed text-right top-0 w-[18em] z-[10000] md:line-height-[3.5em] md:overflow-hidden md:p-0 md:text-center md:w-full",
    className
  );

const Nav: React.FC<NavProps> = ({ className }: NavProps) => {
  const router = useRouter();

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

  return (
    <section id="sidebar" className={sidebarClassNames(className)}>
      <div className="inner flex flex-col justify-end translate-y-0 transition-opacity duration-1000 ease min-h-full w-full md:flex-row md:items-stretch md:h-inherit md:line-height-inherit">
        <nav>
          <ul className="list-none p-0 space-y-6">
            {menuItems.map((item, i) => (
              <li key={item.id} className={linkClassNames}>
                <a
                  href={item.id}
                  className={clsx(anchorClassNames, {
                    "text-white": currentHash === item.id,
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
