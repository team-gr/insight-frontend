import { Form, Switch, Button, Divider } from "antd";

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

function NotificationTab() {
  return (
    <Form {...formLayout} layout="horizontal">
      <span className="text-xl">Product</span>
      <Divider />
      <Form.Item label="Prices">
        <Switch />
      </Form.Item>
      <Form.Item label="Titles">
        <Switch />
      </Form.Item>
      <Form.Item label="Ratings">
        <Switch />
      </Form.Item>
      <Form.Item label="Images">
        <Switch />
      </Form.Item>

      <span className="text-xl">Store</span>
      <Divider />
      <Form.Item label="Vouchers">
        <Switch />
      </Form.Item>
      <Form.Item label="Products">
        <Switch />
      </Form.Item>

      <Divider />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
        <Button htmlType="button">Reset</Button>
      </Form.Item>
    </Form>
  );
}

export default NotificationTab;
