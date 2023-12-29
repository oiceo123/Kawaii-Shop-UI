import React from "react";
import "./Signin.scss";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import SignInComponent from "../../components/SignIn";

const { Text } = Typography;

export interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const onSignIn = (value: SignInForm) => {
    console.log("SignIn value: ", value);
  };

  return (
    <Row className="web-signin-row-b6ec84c8">
      <Col span={10}>
        <div className="web-logo-text">Kawaii Shop</div>
      </Col>
      <Col span={8} className="web-signin-col-0f1d06da">
        <div>
          <div className="web-signin-title-cad17028">เข้าสู่ระบบ</div>
          <SignInComponent onSignIn={onSignIn} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Text type="secondary">เพิ่งเคยเข้ามาใน Kawaii Shop ใช่หรือไม่ </Text>
          <Link to={"/signup"}>สมัครสมาชิก</Link>
        </div>
      </Col>
    </Row>
  );
};

export default SignIn;
