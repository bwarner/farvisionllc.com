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
    // e.preventDefault();
    // const href = (e.target as HTMLElement).getAttribute("href");
    // console.log("click", e.target);
    // console.log("href ", href);
    // if (href) {
    //   window.location.hash = href; // Set the window location to the anchor's href
    // }
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
