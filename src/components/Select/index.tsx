import React, { ReactNode } from "react";
import { Select } from "antd";

interface Option {
  value: string;
  label: string | ReactNode;
}

interface SelectProps {
  size: "large" | "middle" | "small";
  defaultValue: string;
  bordered: boolean;
  style: React.CSSProperties;
  options: Option[];
  onChange?: (value: string, option: Option | Option[]) => void;
}

const SelectComponent: React.FC<SelectProps> = (props) => {
  const { size, defaultValue, bordered, style, options, onChange } = props;
  return (
    <Select
      size={size}
      defaultValue={defaultValue}
      bordered={bordered}
      style={style}
      options={options}
      onChange={onChange}
    />
  );
};

export default SelectComponent;
