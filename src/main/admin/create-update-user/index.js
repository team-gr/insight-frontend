import { useState, useEffect } from "react";
import { Card, Form, Input, Button, Select, Upload, notification } from "antd";
import { useRouter } from "next/router";

import AppLink from "components/AppLink";
import Avatar from "main/admin/create-update-user/Avatar";

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
  const { query, push } = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(init, []);

  async function init() {
    if (query.id == "create") {
      form.resetFields();
      return;
    }

    try {
      const user = await UserServices.getUserById(query.id);
      form.setFieldsValue(user);
      if (user.avatar) {
        setAvatar(user.avatar);
      }
    } catch (error) {
      notification["error"]({
        title: "Error",
        description: error.message,
      });
    }
  }

  async function onSubmit(values) {
    try {
      setLoading(true);
      if (query.id == "create") {
        await UserServices.register(values);
      } else {
        await UserServices.updateUser({ ...values, id: query.id, avatar });
      }
      notification["success"]({
        message: `${query.id == "create" ? "Create" : "Update"} user success!`,
        description: `${values.username} ${
          query.id == "create" ? "Create" : "Update"
        }`,
      });
      form.resetFields();
      push("/users");
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
    <Card title={`Users / ${query.id == "create" ? "create" : "update"}`}>
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

        <Form.Item label="Avatar">
          <Avatar avatar={avatar} setAvatar={setAvatar} />
        </Form.Item>

        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true }]}
          children={
            <Select placeholder="Select role">
              <Select.Option value="user">USER</Select.Option>
              <Select.Option value="admin">ADMIN</Select.Option>
            </Select>
          }
        />

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: query.id == "create" }]}
          children={<Input.Password />}
        />

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            { required: query.id == "create" },
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
