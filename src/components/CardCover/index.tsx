import React from "react";
import { Card } from "antd";

interface CardCoverProps {
  style?: React.CSSProperties;
  cover: string;
  title: string;
  description?: string;
}

const { Meta } = Card;

const CardCoverComponent: React.FC<CardCoverProps> = (props) => {
  const { style, cover, title, description } = props;

  return (
    <Card
      hoverable
      style={style}
      cover={
        <img
          alt="example"
          src={cover}
          style={{
            borderRadius: 0,
            objectFit: "cover",
            width: "100%",
            height: "189px",
          }}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default CardCoverComponent;
