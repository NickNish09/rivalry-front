import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={"auth-container"}>
      <Card className={"auth-card"}>
        <h1 className={"auth-title"}>Login</h1>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              type={"email"}
              placeholder={"email"}
              className={"auth-input"}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder={"password"} className={"auth-input"} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              <span className={"text-light"}>Remember me</span>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className={"auth-submit"}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
