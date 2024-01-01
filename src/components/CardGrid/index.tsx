import React from "react";
import { Card } from "antd";

interface CardGridProps<T> {
  data: T[];
  title: string;
  bordered: boolean;
  style: React.CSSProperties;
  renderItem: (item: T) => React.ReactNode;
}

// eslint-disable-next-line
const CardGridComponent: React.FC<CardGridProps<any>> = (props) => {
  const { data, title, bordered, style, renderItem } = props;

  return (
    <Card title={title} bordered={bordered}>
      {data.map((item, index) => (
        <Card.Grid key={index} style={style}>
          {renderItem(item)}
        </Card.Grid>
      ))}
    </Card>
  );
};

export default CardGridComponent;
