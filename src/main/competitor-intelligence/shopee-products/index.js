import { Button, Input, Table, Menu, Dropdown } from "antd";
import { DeleteOutlined, FullscreenOutlined } from "@ant-design/icons";

import Widget from "components/Widget";
import AppLink from "components/AppLink";

function ShopeeProducts() {
  return (
    <div>
      <Widget>
        <h2>Analyze New Competitor Product</h2>
        <div className="w-full justify-between flex">
          <div className="flex-grow mr-4">
            <Input placeholder="Add Product URL" />
          </div>
          <Button type="primary" className="gx-mb-0">
            Start
          </Button>
        </div>
      </Widget>

      <Widget>
        <h2>Competitor Products Being Analyzed</h2>
        <Table
          className="gx-table-responsive mt-4"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Widget>
    </div>
  );
}

const columns = [
  {
    title: "PRODUCT",
    dataIndex: "product",
    key: "product",
    width: "30%",
    render: (text, record) => (
      <AppLink href="/competitor-intelligence/shopee-products/1">
        <div className="lg:flex">
          <img alt="" className="lg:w-1/2 xl:w-1/3" src={record.imageUrl} />
          <span className="ml-1">{text}</span>
        </div>
      </AppLink>
    ),
  },
  {
    title: "SELLER NAME",
    width: "15%",
    dataIndex: "sellerName",
    key: "age",
  },
  {
    title: "PRICE",
    dataIndex: "price",
    width: "10%",
    key: "address",
  },
  {
    title: "LAST CHANGED",
    dataIndex: "lastChanged",
    width: "15%",
    key: "lastChanged",
  },
  {
    title: "LAST Checked",
    dataIndex: "lastChecked",
    key: "lastChecked",
    width: "15%",
  },
  {
    title: "PLATFORM",
    dataIndex: "platform",
    key: "platform",
    width: "10%",
  },
  {
    title: "actions",
    key: "action",
    width: "5%",
    render: () => (
      <Dropdown onClick={console.log} overlay={menu}>
        <Button
          type="primary"
          icon={
            <span className="pt-1">
              <i className="icon icon-ellipse-v" />
            </span>
          }
          size="medium"
        />
      </Dropdown>
    ),
  },
];

const data = [
  {
    key: "1",
    product: "Áo len nam cổ lọ màu mới nhất 2020",
    imageUrl: "https://cf.shopee.vn/file/8eb06a09fff6af941b613e3ec8bf2a35",
    price: "₫100.000",
    lastChanged: "3 days ago",
    lastChecked: "about an hour ago",
    platform: "Shopee",
    sellerName: "ccron0305",
  },
];

const menu = (
  <Menu onClick={console.log}>
    <Menu.Item key="1" icon={<FullscreenOutlined />}>
      Product Detail
    </Menu.Item>
    <Menu.Item key="2" icon={<DeleteOutlined />}>
      Delete
    </Menu.Item>
  </Menu>
);

export default ShopeeProducts;
