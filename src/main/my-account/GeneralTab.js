import { Form, Input, Button } from "antd";

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

function GeneralTab() {
  return (
    <Form {...formLayout} layout="horizontal">
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Username">
        <Input />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password />
      </Form.Item>
      <Form.Item label="Password Confirm">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
        <Button htmlType="button">Reset</Button>
      </Form.Item>
    </Form>
  );
}

export default GeneralTab;
