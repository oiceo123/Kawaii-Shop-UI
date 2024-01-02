import React from "react";
import axios from "../../api";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../redux";
import { setUser } from "../../redux/slices/authSlice/authSlice";

import { Row, Col, Typography } from "antd";
import SignInComponent from "../../components/SignIn";
import Swal from "sweetalert2";

const { Text } = Typography;

export interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const onSignIn = async ({ email, password }: SignInForm) => {
    try {
      const res = await axios.post(
        "/users/signin",
        { email, password },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (res.data.user && res.data.token) {
        dispatch(setUser(res.data.user));
        localStorage.setItem("id", res.data.token.id);
        localStorage.setItem("access_token", res.data.token.access_token);
        localStorage.setItem("refresh_token", res.data.token.refresh_token);
        history.push("/");
      }
    } catch (error) {
      if (
        error.response.data.message === "password is invalid" ||
        error.response.data.message === "user not found"
      ) {
        Swal.fire({
          icon: "error",
          title: t("page.body.signin.email.or.password.invalid"),
        });
      } else {
        Swal.fire({
          icon: "error",
          title: t("message.error.internal.server.error"),
        });
      }
    }
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
