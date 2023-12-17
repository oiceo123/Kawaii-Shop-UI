import React from "react";
import { Card } from "antd";

interface Props {
  title: string;
  bordered: boolean;
  style: React.CSSProperties;
}

const CardGridComponent: React.FC<Props> = (props) => {
  const { title, bordered, style } = props;

  return (
    <Card title={title} bordered={bordered}>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
      <Card.Grid style={style}>Content</Card.Grid>
    </Card>
  );
};

export const CardGrid = CardGridComponent;
