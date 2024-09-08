import React from "react";
import clsx from "clsx";
import "../app/menu-item.css";

interface MenuItemProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  selected?: boolean;
}

const linkClassNames = [
  "w-all",
  "text-right",
  "transform",
  "translate-y-0",
  "transition-opacity",
  "transition-transform",
  "duration-150",
  "ease-linear",
  "opacity-100",
  "p-0",
  "relative",
];

const anchorClassNames = [
  "menu-item-anchor",
  "font-bold",
  "text-xs",
  "md:h-full",
  "leading-relaxed",
  "tracking-widest",
  "uppercase",
  "text-[rgba(255,255,255,0.35)]",
  "py-5",
  "block",
  "relative",
  "transition-colors",
  "duration-200",
  "ease-linear",
  "border-0",
  "hover:text-white/0.55",
];

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  href,
  children,
  selected,
}) => {
  return (
    <li className={clsx(linkClassNames, className)}>
      <a
        href={href}
        className={clsx(anchorClassNames, {
          "text-white": selected,
          active: selected,
        })}
      >
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
