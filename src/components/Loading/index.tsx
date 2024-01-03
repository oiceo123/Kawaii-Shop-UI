import React from "react";
import "./Loading.scss";
import { Flex, Spin } from "antd";

const LoadingComponent: React.FC = () => (
  <Flex align="center" justify="center" className="web-loading">
    <Spin tip="Loading" size="large">
      <div className="web-loading-content" />
    </Spin>
  </Flex>
);

export default LoadingComponent;
