import React, { ReactNode } from "react";
import { Tabs } from "antd";

interface TabItemType {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

interface CardTabProps {
  type: "line" | "card" | "editable-card";
  items: TabItemType[];
  onChangeTab?: (key: string) => void;
}

const CardTabComponent: React.FC<CardTabProps> = (props) => {
  const { type, items, onChangeTab } = props;
  return <Tabs type={type} items={items} onChange={onChangeTab} />;
};

export default CardTabComponent;
