"use client";
import React, { useState, useEffect } from "react";

import MenuItem from "./menu-item";

export interface MenuEntry {
  /** A same-page hash ("#contact") or a route ("/ecommerce"). */
  id: string;
  name: string;
}

export const HOME_MENU: MenuEntry[] = [
  { id: "#intro", name: "Welcome" },
  { id: "#products", name: "Products" },
  { id: "/ecommerce", name: "E-commerce" },
  { id: "#contact", name: "Contact" },
];

interface MenuProps {
  items?: MenuEntry[];
  /** Hash treated as current when the URL has none. */
  defaultHash?: string;
}

const Menu: React.FC<MenuProps> = ({
  items = HOME_MENU,
  defaultHash = "#intro",
}) => {
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash || defaultHash);
    };
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [defaultHash]);

  return (
    <ul>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          href={item.id}
          selected={item.id === currentHash}
        >
          {item.name}
        </MenuItem>
      ))}
    </ul>
  );
};

export default Menu;
