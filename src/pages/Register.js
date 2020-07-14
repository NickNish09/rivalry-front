import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Spin } from "antd";
import { sendRegisterRequest } from "../services/auth";
import { openNotificationWithIcon } from "../helpers/notifications";
import { TOKEN_KEY } from "../config/constants";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

const Register = ({ history }) => {
  const { setUser } = useCurrentUser();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);
    sendRegisterRequest(values)
      .then((response) => {
        let token = response.data.token;
        let user = response.data.user;
        localStorage.setItem(TOKEN_KEY, token);
        setUser(user);
        history.push("/"); // go to home after Register
        window.location.reload();
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        openNotificationWithIcon(
          "error",
          "Error at Register",
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
        <h1 className={"auth-title"}>Register</h1>
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
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              type={"text"}
              placeholder={"name"}
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

          <Link to={"/login"} className={"text-light"}>
            Already registered? Login
          </Link>

          <Form.Item className={"mt-15"}>
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

export default Register;
