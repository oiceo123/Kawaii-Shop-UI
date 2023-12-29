import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, Row, Col, Flex } from "antd";
import { SignUpForm } from "../../pages/SignUp";

interface SignUpProps {
  onSignUp: (value: SignUpForm) => void;
}

const SignUpComponent: React.FC<SignUpProps> = (props) => {
  const { t } = useTranslation();
  const { onSignUp } = props;

  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={24}>
        <Form
          form={form}
          name="register"
          size="large"
          onFinish={onSignUp}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: t("page.body.signup.username.message.required"),
              },
            ]}
            style={{ marginBottom: "28px" }}
          >
            <Input placeholder={t("page.body.signup.username.placeholder")} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t("page.body.signup.password.message.required"),
              },
            ]}
            style={{ marginBottom: "28px" }}
          >
            <Input.Password
              placeholder={t("page.body.signup.password.placeholder")}
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: t(
                  "page.body.signup.confirm.password.message.required"
                ),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      t("page.body.signup.confirm.password.message.error")
                    )
                  );
                },
              }),
            ]}
            style={{ marginBottom: "28px" }}
          >
            <Input.Password
              placeholder={t("page.body.signup.confirm.password.placeholder")}
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: t("page.body.signup.email.message.error"),
              },
              {
                required: true,
                message: t("page.body.signup.email.message.required"),
              },
            ]}
            style={{ marginBottom: "32px" }}
          >
            <Input placeholder={t("page.body.signup.email.placeholder")} />
          </Form.Item>

          <Form.Item>
            <Flex vertical gap="small" style={{ width: "100%" }}>
              <Button type="primary" size="large" htmlType="submit">
                {t("message.signup")}
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUpComponent;
