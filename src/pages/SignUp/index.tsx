import React from "react";
import axios from "../../api";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../redux";
import { Link, useHistory } from "react-router-dom";
import { setUser } from "../../redux/slices/authSlice/authSlice";

import { Row, Col, Typography } from "antd";
import SignUpComponent from "../../components/SignUp";
import Swal from "sweetalert2";

export interface SignUpForm {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

const { Text } = Typography;

const SignUpContainer: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onSignUp = async ({ username, email, password }: SignUpForm) => {
    try {
      const res = await axios.post(
        "/users/signup",
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      dispatch(setUser(res.data.user));

      if (res.data.user) {
        history.push("/signin");
      }
    } catch (error) {
      if (error.response.data.message === "username has been used") {
        Swal.fire({
          icon: "error",
          title: t("page.body.signup.username.message.has.been.used"),
        });
      } else if (error.response.data.message === "email has been used") {
        Swal.fire({
          icon: "error",
          title: t("page.body.signup.email.message.has.been.used"),
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
