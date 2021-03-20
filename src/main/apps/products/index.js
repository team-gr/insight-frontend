import { useState } from "react";
import { Button, Input, Table, Menu, Dropdown, Upload, Popconfirm } from "antd";
import {
  DeleteOutlined,
  FullscreenOutlined,
  HistoryOutlined,
  LineChartOutlined,
  SyncOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import Widget from "components/Widget";
import AppLink from "components/AppLink";

function CompetitorProducts() {
  const [pids, setPids] = useState([]);

  return (
    <div>
      <Widget>
        <h2>Analyze New Competitor Product</h2>
        <div className="w-full justify-between flex">
          <div className="flex-grow mr-4">
            <Input placeholder="Product URL" />
          </div>
          <div className="mr-4">
            <Upload fileList={[]}>
              <Button icon={<UploadOutlined />}>Upload CSV</Button>
            </Upload>
          </div>

          <Button type="primary" className="gx-mb-0">
            Start
          </Button>
        </div>
      </Widget>

      <Widget>
        <h2 className="flex">
          <span>Competitor Products Being Analyzed</span>
          <div className="flex-grow" />

          {pids.length > 0 && (
            <Popconfirm title="Are you sure to delete!">
              <Button
                type="danger"
                style={{ marginBottom: 0 }}
                icon={<DeleteOutlined />}
                children="DELETE"
              />
            </Popconfirm>
          )}
        </h2>
        <Table
          className="gx-table-responsive mt-4 rounded-lg"
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey="id"
          rowSelection={{
            onChange: (selectedRowKeys, selectedRows) => {
              setPids(selectedRowKeys);
            },
          }}
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
      <AppLink href="/competitor-products/tracking/1">
        <div className="w-full flex">
          <img
            alt=""
            className="w-1/2 xl:w-1/3 rounded-lg mr-2"
            src={record.imageUrl}
          />
          <span className="lg ml-1">{text}</span>
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
    width: "20%",
    key: "lastChanged",
  },
  {
    title: "LAST CHECKED",
    dataIndex: "lastChecked",
    key: "lastChecked",
    width: "20%",
  },
  {
    title: "ACTIONS",
    width: "5%",
    render: () => (
      <Dropdown overlay={menu}>
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
    id: "1",
    product: "Áo len nam cổ lọ màu mới nhất 2020",
    imageUrl: "https://cf.shopee.vn/file/8eb06a09fff6af941b613e3ec8bf2a35",
    price: "₫100.000",
    lastChanged: "3 days ago",
    lastChecked: "about an hour ago",
    sellerName: "ccron0305",
  },
];

const menu = (
  <Menu>
    <Menu.Item icon={<FullscreenOutlined />}>Product Detail</Menu.Item>
    <Menu.Item icon={<HistoryOutlined />}>Product Tracking</Menu.Item>
    <Menu.Item icon={<LineChartOutlined />}>
      <AppLink href="/competitor-products/analytics/1">
        Product Analytics
      </AppLink>
    </Menu.Item>
    <Menu.Item icon={<SyncOutlined />}>Update</Menu.Item>
  </Menu>
);

export default CompetitorProducts;
