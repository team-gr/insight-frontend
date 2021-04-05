import { useState } from "react";
import { Button, Input, Upload, Table, Dropdown, Menu, Popconfirm } from "antd";
import {
  UploadOutlined,
  ReloadOutlined,
  HistoryOutlined,
  LineChartOutlined,
  SyncOutlined,
  MoreOutlined,
} from "@ant-design/icons";

import AppLink from "components/AppLink";
import Widget from "components/Widget";

function CompetitorStores() {
  const [sids, setSids] = useState([]);

  return (
    <>
      <Widget>
        <h2>Track New Competitor Store</h2>
        <div className="w-full justify-between flex">
          <div className="flex-grow mr-4">
            <Input placeholder="Add Store URL" />
          </div>
          <div className="mr-4">
            <Upload fileList={[]} maxCount={1} listType="text">
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
          <span>Competitor Stores Being Tracked</span>
          <div className="flex-grow" />
          <Button type="default" icon={<ReloadOutlined />}></Button>
          {sids.length > 0 && (
            <Popconfirm title="Are you sure to delete!">
              <Button type="danger">DELETE</Button>
            </Popconfirm>
          )}
        </h2>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="shopid"
          pagination={{ pageSize: 10 }}
          rowSelection={{
            onChange: (selectedRowKeys, selectedRows) => {
              setSids(selectedRowKeys);
            },
          }}
        />
      </Widget>
    </>
  );
}

const columns = [
  {
    title: "SELLER NAME",
    dataIndex: "seller_name",
    width: "30%",
    render: (text, record) => (
      <div className="w-full flex items-center">
        <img
          alt=""
          className="w-1/3 rounded-lg mr-2 border border-dashed border-black"
          src={record.avatar}
        />
        <span className="w-2/3 lg text-sm lg:text-xl">{text}</span>
      </div>
    ),
  },
  { title: "PRODUCTS", dataIndex: "products" },
  { title: "ACTIVE VOUCHERS", dataIndex: "active_vouchers" },
  { title: "LAST CHECKED", dataIndex: "last_checked" },
  { title: "LAST CHANGED", dataIndex: "last_changed" },
  {
    title: "ACTIONS",
    render: (_, record) => (
      <Dropdown overlay={<ActionMenu shopid={record.shopid} />}>
        <Button type="primary" icon={<MoreOutlined />} size="medium" />
      </Dropdown>
    ),
  },
];

const ActionMenu = ({ shopid }) => {
  return (
    <Menu>
      <Menu.Item icon={<HistoryOutlined />}>
        <AppLink href={`/competitor-stores/tracking/${shopid}`}>
          Store Tracking
        </AppLink>
      </Menu.Item>
      <Menu.Item icon={<LineChartOutlined />}>
        <AppLink href={`/competitor-stores/analytics/${shopid}`}>
          Store Analytics
        </AppLink>
      </Menu.Item>
      <Menu.Item icon={<SyncOutlined />}>Update</Menu.Item>
    </Menu>
  );
};

const data = [
  {
    shopid: "2667411154",
    seller_name: "Coolmate",
    avatar: "https://cf.shopee.vn/file/22a19ce0cc7f2ef9e2aea85eb2e86cc1_tn",
    products: 62,
    active_vouchers: 32,
    last_checked: "4 minutes ago",
    last_changed: "5 days ago",
  },
];

export default CompetitorStores;
