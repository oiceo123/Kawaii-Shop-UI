import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, Row, Col, Flex } from "antd";
import { SignInForm } from "../../pages/SignIn";

interface SignInProps {
  onSignIn: (value: SignInForm) => void;
}

const SignInComponent: React.FC<SignInProps> = (props) => {
  const { onSignIn } = props;
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={24}>
        <Form
          form={form}
          name="register"
          size="large"
          onFinish={onSignIn}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: t("page.body.signin.email.message.error"),
              },
              {
                required: true,
                message: t("page.body.signin.email.message.required"),
              },
            ]}
            style={{ marginBottom: "28px" }}
          >
            <Input placeholder={t("page.body.signin.email.placeholder")} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t("page.body.signin.password.message.required"),
              },
            ]}
            style={{ marginBottom: "32px" }}
          >
            <Input.Password
              placeholder={t("page.body.signin.password.placeholder")}
            />
          </Form.Item>

          <Form.Item>
            <Flex vertical gap="small" style={{ width: "100%" }}>
              <Button type="primary" size="large" htmlType="submit">
                {t("button.login")}
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignInComponent;
