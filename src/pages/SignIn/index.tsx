import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import SignInComponent from "../../components/SignIn";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

export interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  const onSignIn = (value: SignInForm) => {
    console.log("SignIn value: ", value);
  };

  return (
    <Row className="web-signin-signup-row-b6ec84c8">
      <Col span={10}>
        <div className="web-logo-text">Kawaii Shop</div>
      </Col>
      <Col span={8} className="web-signin-signup-col-0f1d06da">
        <div>
          <div className="web-signin-signup-title-cad17028">
            {t("message.login")}
          </div>
          <SignInComponent onSignIn={onSignIn} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Text type="secondary">
            {t("page.footer.sigin.message.question")}{" "}
          </Text>
          <Link to={"/signup"}>{t("message.signup")}</Link>
        </div>
      </Col>
    </Row>
  );
};

export default SignIn;
