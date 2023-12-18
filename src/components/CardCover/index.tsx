import React from "react";
import { ReactNode } from "react";
import { Card } from "antd";

interface CardCoverProps {
  style?: React.CSSProperties;
  cover: ReactNode;
  title: string;
  description?: string;
}

const { Meta } = Card;

const CardCoverComponent: React.FC<CardCoverProps> = (props) => {
  const { style, cover, title, description } = props;

  return (
    <Card hoverable style={style} cover={cover}>
      <Meta title={title} description={description} />
    </Card>
  );
};

export default CardCoverComponent;
