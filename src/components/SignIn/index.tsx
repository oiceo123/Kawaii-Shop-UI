import React from "react";
import { Button, Form, Input, Row, Col, Flex } from "antd";
import { SignInForm } from "../../pages/SignIn";

interface SignInProps {
  onSignIn: (value: SignInForm) => void;
}

const SignInComponent: React.FC<SignInProps> = (props) => {
  const { onSignIn } = props;

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
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
            style={{marginBottom: "28px"}} 
          >
            <Input placeholder="Email"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            style={{marginBottom: "32px"}} 
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Flex vertical gap="small" style={{ width: "100%" }}>
              <Button type="primary" size="large" htmlType="submit">
                Login
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignInComponent;
