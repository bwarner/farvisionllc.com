"use client";
import React, { useState, useEffect, useCallback } from "react";

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

  return (
    <ul onClick={handleClick}>
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
  );
};

export default Menu;
