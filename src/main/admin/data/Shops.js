import { useState, useEffect } from "react";
import { Button, Table, Menu, Dropdown, notification, message } from "antd";

import {
  HistoryOutlined,
  LineChartOutlined,
  SyncOutlined,
  MoreOutlined,
} from "@ant-design/icons";

import AppLink from "components/AppLink";

import { StoreServices } from "services";
import { timestampFormatter } from "helpers";

function Shops() {
  const [shops, setShops] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    StoreServices.getAll({ page, limit })
      .then((resp) => {
        console.log(resp);
        if (mounted) {
          setShops(resp.shops);
          setTotal(resp.totalCount);
        }
      })
      .catch(console.log)
      .finally(() => setLoading(false));

    return () => {
      mounted = false;
    };
  }, [limit, page]);

  return (
    <div>
      <Table
        bordered={true}
        loading={loading}
        columns={columns}
        dataSource={shops}
        pagination={{
          onChange: setPage,
          pageSize: limit,
          current: page,
          total,
        }}
      />
    </div>
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

export default Shops;
