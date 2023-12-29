import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import SignUpComponent from "../../components/SignUp";

export interface SignUpForm {
  email: string;
  password: string;
  confirm: string;
}

const { Text } = Typography;

const SignUpContainer: React.FC = () => {
  const { t } = useTranslation();

  function onSignUp(value: SignUpForm) {
    console.log("SignUp value: ", value);
  }

  return (
    <Row className="web-signin-signup-row-b6ec84c8">
      <Col span={10}>
        <div className="web-logo-text">Kawaii Shop</div>
      </Col>
      <Col span={8} className="web-signin-signup-col-0f1d06da">
        <div>
          <div className="web-signin-signup-title-cad17028">
            {t("message.signup")}
          </div>
          <SignUpComponent onSignUp={onSignUp} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Text type="secondary">
            {t("page.footer.signup.message.question")}{" "}
          </Text>
          <Link to={"/signin"}>{t("message.login")}</Link>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpContainer;
