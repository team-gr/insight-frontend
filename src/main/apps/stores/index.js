import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Upload,
  Table,
  Dropdown,
  Menu,
  Popconfirm,
  message,
} from "antd";
import {
  UploadOutlined,
  ReloadOutlined,
  HistoryOutlined,
  LineChartOutlined,
  SyncOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

import AppLink from "components/AppLink";
import Widget from "components/Widget";

import { StoreServices } from "services";

import { timestampFormatter } from "helpers";

function CompetitorStores() {
  const userid = useSelector((state) => state.auth.user.id);
  const [shopLoading, setShopLoading] = useState(false);
  const [sids, setSids] = useState([]);
  const [shops, setShops] = useState([]);

  useEffect(onLoadShops, []);

  useEffect(() => {
    console.log(shops);
  }, [shops]);

  function onLoadShops() {
    setShopLoading(true);
    StoreServices.getUserTrackingStores(userid)
      .then(setShops)
      .catch(console.log)
      .finally(() => setShopLoading(false));
  }

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
          <Button
            type="default"
            icon={<ReloadOutlined />}
            onClick={onLoadShops}
          />
          {sids.length > 0 && (
            <Popconfirm title="Are you sure to delete!">
              <Button type="danger">DELETE</Button>
            </Popconfirm>
          )}
        </h2>
        <Table
          loading={shopLoading}
          columns={columns}
          dataSource={shops}
          rowKey="id"
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
    dataIndex: "username",
    width: "25%",
    render: (text, record) => (
      <div className="w-full flex items-center">
        <img
          alt=""
          className="w-1/3 rounded-lg mr-2 border border-dashed border-black"
          src={`https://cf.shopee.vn/file/${record.avatar}`}
        />
        <span className="w-2/3 lg text-sm lg:text-xl">{text}</span>
      </div>
    ),
  },
  { title: "PRODUCTS", dataIndex: "product_quantity" },
  {
    title: "VOUCHERS",
    render: (_, record) => record.active_vouchers.length,
  },
  {
    title: "LAST CHECKED",
    dataIndex: "last_checked",
    render: timestampFormatter,
  },
  {
    title: "LAST CHANGED",
    dataIndex: "mtime",
    render: timestampFormatter,
  },
  {
    title: "ACTIONS",
    render: (_, record) => (
      <Dropdown overlay={<ActionMenu shopid={record.id} />}>
        <Button type="primary" icon={<MoreOutlined />} size="medium" />
      </Dropdown>
    ),
  },
];

const ActionMenu = ({ shopid }) => {
  async function onUpdate() {
    const done = message.loading("updating store data...", 0);

    try {
      await StoreServices.updateStore(shopid);
    } catch (error) {
      console.log(error);
    } finally {
      done();
      message.success("update store data done!", 1);
    }
  }
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
      <Menu.Item icon={<SyncOutlined />} onClick={onUpdate}>
        Update
      </Menu.Item>
    </Menu>
  );
};

export default CompetitorStores;
