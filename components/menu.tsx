"use client";
import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { FaXmark, FaBars } from "react-icons/fa6";

import MenuItem from "./menu-item";

const menuItems = [
  { id: "#intro", name: "Welcome" },
  { id: "#one", name: "Who we are" },
  { id: "#two", name: "What we do" },
  { id: "#three", name: "Get in touch" },
];

interface NavProps {
  className?: string;
}

const Menu: React.FC = () => {
  const [currentHash, setCurrentHash] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleClick = (e: React.MouseEvent) => {
    let target = e.target as HTMLElement | null;
    if (!target) return;

    // Traverse up the DOM tree to check if an ancestor is an anchor with href starting with '#'
    while (target && target !== e.currentTarget) {
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href) {
          setSelectedItem(href);
          break;
        }
      }
      target = target.parentElement;
    }
  };

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    // window.scrollTo(0, 0);
    if (isMenuOpen) {
      window.history.back();
    } else {
      window.location.hash = "menuOpen";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const menuClasses = clsx(
    "flex",
    "flex-col",
    "lg:flex-col",
    "md:flex-row",
    "items-end",
    "md:items-center",
    "lg:items-end",
    "list-none",
    "p-0",
    "space-y-6",
    "md:h-full"
  );

  return (
    <div className="menuWrapper">
      <div id="menu-opened" className="menu-opened">
        <a
          className="menu-open-btn h-6 w-6 text-right md:hidden"
          onClick={handleMenuClick}
          href="#menu-closer"
          aria-label="Close menu"
        >
          Xdfsf
        </a>
        <a
          className="menu-close-btn h-6 w-6 text-right md:hidden"
          onClick={handleMenuClick}
          href="#"
          aria-label={"Open menu"}
        >
          <FaBars className="text-white h-6 w-6 md:hidden" />
        </a>
      </div>
      <ul className={clsx(menuClasses, "menu")} onClick={handleClick}>
        {menuItems.map((item, i) => (
          <MenuItem
            key={item.id}
            href={item.id}
            selected={selectedItem === item.id || item.id === currentHash}
          >
            {item.name}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
