import React from "react";
import Menu, { type MenuEntry } from "./menu";

interface SidebarProps {
  items?: MenuEntry[];
  defaultHash?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, defaultHash }) => (
  <section id="sidebar">
    <div className="inner">
      <nav>
        <Menu items={items} defaultHash={defaultHash} />
      </nav>
    </div>
  </section>
);

export default Sidebar;
