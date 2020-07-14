import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Spin } from "antd";
import { sendLoginRequest } from "../services/auth";
import { openNotificationWithIcon } from "../helpers/notifications";
import { TOKEN_KEY } from "../config/constants";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const Login = ({ history }) => {
  const { setUser } = useCurrentUser();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);
    sendLoginRequest(values)
      .then((response) => {
        let token = response.data.token;
        let user = response.data.user;
        localStorage.setItem(TOKEN_KEY, token);
        setUser(user);
        history.push("/"); // go to home after login
        window.location.reload();
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        openNotificationWithIcon(
          "error",
          "Error at login",
          err.response.data.error
        );
      });
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
            {loading ? (
              <div className={"spin-container"}>
                <Spin size={"large"} />
              </div>
            ) : (
              <Button htmlType="submit" className={"auth-submit"}>
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
