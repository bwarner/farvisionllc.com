import React from "react";
import clsx from "clsx";
import "../app/menu-item.css";

interface MenuItemProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  selected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  href,
  children,
  selected,
}) => {
  return (
    <li className={clsx(className)}>
      <a
        href={href}
        className={clsx({
          active: selected,
        })}
      >
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
