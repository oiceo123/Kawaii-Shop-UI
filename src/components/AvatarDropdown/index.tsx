import React from "react";
import "./AvatarDropdown.scss";
import { Dropdown, Avatar } from "antd";
import type { MenuProps } from "antd";

interface Props {
  size: number;
  icon: React.ReactNode;
  placement:
    | "bottomRight"
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "top"
    | "bottom"
    | undefined;
  items: MenuProps["items"];
}

const AvatarDropdownComponent: React.FC<Props> = (props) => {
  const { items, placement, size, icon } = props;
  return (
    <Dropdown
      menu={{ items }}
      placement={placement}
      trigger={["click"]}
      overlayClassName="web-avatar-dropdown-dropdown-1005a631"
    >
      <Avatar
        size={size}
        icon={icon}
        className="web-avatar-dropdown-avatar-c8c76591"
      />
    </Dropdown>
  );
};

export default AvatarDropdownComponent;
