import React from "react";
import { Select } from "antd";

interface Props {
  options:
    | {
        value: string;
        label: string | React.JSX.Element;
      }[]
    | undefined;
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectComponent: React.FC<Props> = ({ options }) => (
  <Select
    size="large"
    defaultValue="Thai"
    bordered={false}
    style={{ width: 120 }}
    onChange={handleChange}
    options={options}
  />
);

export const SelectItem = SelectComponent;
