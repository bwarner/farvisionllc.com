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
    <ul>
      {menuItems.map((item, i) => (
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
