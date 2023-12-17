import React, { ReactNode } from "react";
import { Select } from "antd";

export interface Option {
  value: string;
  label: string | ReactNode;
}

interface Props {
  size: "large" | "middle" | "small";
  defaultValue: string;
  bordered: boolean;
  style: React.CSSProperties;
  options: Option[];
  onChange?: (value: string, option: Option | Option[]) => void;
}

const SelectComponent: React.FC<Props> = (props) => {
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

export const SelectItem = SelectComponent;
