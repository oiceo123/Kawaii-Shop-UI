import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

interface CardCoverProps {
  style?: React.CSSProperties;
  id: string;
  cover: string;
  title: string;
  description?: string;
}

const { Meta } = Card;

const CardCoverComponent: React.FC<CardCoverProps> = (props) => {
  const { style, id, cover, title, description } = props;

  return (
    <Link to={`/product/${id}`}>
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
    </Link>
  );
};

export default CardCoverComponent;
