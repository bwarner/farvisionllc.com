import React from "react";
import Menu from "./menu";

const Sidebar: React.FC = () => (
  <section id="sidebar">
    <div className="inner">
      <nav>
        <Menu />
      </nav>
    </div>
  </section>
);

export default Sidebar;
