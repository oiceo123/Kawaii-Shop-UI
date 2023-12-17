import React from "react";
import { ReactNode } from "react";
import { Card } from "antd";

interface Props {
  style?: React.CSSProperties;
  cover: ReactNode;
  title: string;
  description?: string;
}

const { Meta } = Card;

const CardCoverComponent: React.FC<Props> = (props) => {
  const { style, cover, title, description } = props;

  return (
    <Card hoverable style={style} cover={cover}>
      <Meta title={title} description={description} />
    </Card>
  );
};

export const CardCover = CardCoverComponent;
