import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

interface Props {
  items: MenuProps["items"];
}

const MenuBarComponent: React.FC<Props> = ({ items }) => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export const MenuBar = MenuBarComponent;
