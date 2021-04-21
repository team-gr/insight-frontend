import { useState, useEffect } from "react";
import { Button, Table, Menu, Dropdown, notification, message } from "antd";

import {
  HistoryOutlined,
  LineChartOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import AppLink from "components/AppLink";

import { ItemServices } from "services";
import { vndFormatter, timestampFormatter } from "helpers";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    ItemServices.getAll({ page, limit })
      .then((resp) => {
        console.log(resp);
        if (mounted) {
          setProducts(resp.items);
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
        dataSource={products}
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
    title: "PRODUCT",
    dataIndex: "product",
    width: "30%",
    render: (_, record) => (
      <div className="w-full flex">
        <img
          alt=""
          className="w-1/2 xl:w-1/3 rounded-lg mr-2"
          src={`https://cf.shopee.vn/file/${record.image}`}
        />
        <span className="lg ml-1">{record.name}</span>
      </div>
    ),
  },
  {
    title: "Brand",
    width: "15%",
    dataIndex: "brand",
  },
  {
    title: "PRICE",
    dataIndex: "price",
    render: (price) => vndFormatter(price / 100000),
    width: "10%",
  },
  {
    title: "LAST CHANGED",
    dataIndex: "mtime",
    width: "20%",
    render: (ts) => timestampFormatter(ts),
  },
  {
    title: "LAST CHECKED",
    dataIndex: "last_checked",
    render: (ts) => timestampFormatter(ts),
    width: "20%",
  },
  {
    title: "ACTIONS",
    width: "5%",
    render: (_, record) => (
      <Dropdown
        overlay={<ActionMenu shopid={record.shopid} itemid={record.id} />}
      >
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

const ActionMenu = ({ itemid, shopid }) => {
  async function onUpdate() {
    const done = message.loading("updating product...");
    try {
      await ItemServices.update({ itemid, shopid });
      notification["success"]({
        message: "Update product done!",
        description: `Updated product id: ${itemid} | shopid: ${shopid}`,
      });
    } catch (error) {
      console.log(error);
      message.error("proxy error, please try again");
    } finally {
      done();
    }
  }

  return (
    <Menu>
      <Menu.Item icon={<HistoryOutlined />}>
        <AppLink href={`/competitor-products/tracking/${itemid}`}>
          Product Tracking
        </AppLink>
      </Menu.Item>
      <Menu.Item icon={<LineChartOutlined />}>
        <AppLink href={`/competitor-products/analytics/${itemid}`}>
          Product Analytics
        </AppLink>
      </Menu.Item>
      <Menu.Item onClick={onUpdate} icon={<SyncOutlined />}>
        Update
      </Menu.Item>
    </Menu>
  );
};

export default Products;
