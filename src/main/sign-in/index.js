import React from "react";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";

import { AuthActions } from "app-redux/auth";

function SignIn() {
  const dispatch = useDispatch();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onFinish(values) {
    dispatch(AuthActions.login());
    console.log("finish", values);
  }

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src={"/images/appModule/neature.jpg"} alt="Neature" />
            </div>
            <div className="gx-app-logo-wid">
              <h1>Sign In</h1>
              <p>By Signing Up, you can avail full features of our services</p>
              <p>Get an account !!!</p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={"/images/logo.png"} />
            </div>
          </div>
          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0"
            >
              <Form.Item
                initialValue="demo@example.com"
                rules={[
                  { type: "email", message: "The input is not valid E-mail!" },
                  { required: true, message: "The input is not valid E-mail!" },
                ]}
                name="email"
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                initialValue="demo#123"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
                name="password"
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  className="gx-mb-0"
                  htmlType="submit"
                  children="Sign In"
                />
                <span>or </span>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
