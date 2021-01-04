import { useState } from "react";
import { Card, Form, Input, Button, Select, notification } from "antd";

import AppLink from "components/AppLink";

import { UserServices } from "services";

const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

function CreateUserPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values) {
    try {
      setLoading(true);
      await UserServices.register(values);
      notification["success"]({
        message: "Create user success!",
        description: `${values.username} created`,
      });
      form.resetFields();
    } catch (error) {
      notification["error"]({
        message: "Create user error!",
        description: error.toString(),
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <Card title="Users / create">
      <Form form={form} {...formLayout} onFinish={onSubmit}>
        <Form.Item
          name="email"
          label="E-mail"
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
          children={<Input />}
        />
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true }]}
          children={<Input />}
        />
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true }]}
          children={
            <Select>
              <Select.Option value="user">USER</Select.Option>
              <Select.Option value="admin">ADMIN</Select.Option>
            </Select>
          }
        />
        <Form.Item
          name="avatar"
          label="Avatar"
          rules={[{ type: "url" }]}
          children={<Input />}
        />
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
          children={<Input.Password />}
        />
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("confirm password is not match!");
              },
            }),
          ]}
          children={<Input.Password />}
        />

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
          <Button>
            <AppLink href="/users">Cancel</AppLink>
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default CreateUserPage;
