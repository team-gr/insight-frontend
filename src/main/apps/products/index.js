import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Input,
  Table,
  Menu,
  Dropdown,
  Upload,
  Popconfirm,
  notification,
  message,
} from "antd";

import {
  DeleteOutlined,
  HistoryOutlined,
  LineChartOutlined,
  SyncOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import Widget from "components/Widget";
import AppLink from "components/AppLink";

import { vndFormatter, timestampFormatter } from "helpers";

import { ItemServices } from "services";

function CompetitorProducts() {
  const userid = useSelector((state) => state.auth.user.id);
  const [items, setItems] = useState([]);
  const [pids, setPids] = useState([]);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [itemUrl, setItemUrl] = useState("");
  const [trackLoading, setTrackLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  useEffect(onLoadItems, []);

  async function onLoadItems() {
    try {
      setTableLoading(true);
      const data = await ItemServices.getUserTrackingItems(userid);
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTableLoading(false);
    }
  }

  async function onDelete() {
    try {
      setDeleteLoading(true);
      await ItemServices.removeItemFromTrackList({ userid, itemIds: pids });
      notification["success"]({
        message: "Operation success",
        description: "Remove products from tracking list success ",
      });
      await onLoadItems();
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteLoading(false);
    }
  }

  function onUploadChange({ fileList }) {
    console.log(fileList);
    setFiles(fileList);
  }

  async function onSubmit() {
    try {
      setTrackLoading(true);
      if (itemUrl) {
        await ItemServices.trackNewItemByUrl({ userid, itemUrl });
      }

      if (files.length > 0) {
        await ItemServices.trackNewItemsByFile({
          userid,
          file: files[0].originFileObj,
        });
      }

      setItemUrl("");
      setFiles([]);
      notification["success"]({
        message: "Tracking Done",
        description: "Tracking operation success!",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTrackLoading(false);
      onLoadItems();
    }
  }

  return (
    <div>
      <Widget>
        <h2>Analyze New Competitor Product</h2>
        <div className="w-full justify-between flex">
          <div className="flex-grow mr-4">
            <Input
              placeholder="Product URL"
              value={itemUrl}
              onChange={(e) => setItemUrl(e.target.value)}
            />
          </div>
          <div className="mr-4">
            <Upload
              fileList={files}
              maxCount={1}
              listType="text"
              onChange={onUploadChange}
            >
              <Button icon={<UploadOutlined />}>Upload CSV</Button>
            </Upload>
          </div>

          <Button
            type="primary"
            className="gx-mb-0"
            loading={trackLoading}
            onClick={onSubmit}
          >
            Start
          </Button>
        </div>
      </Widget>

      <Widget>
        <h2 className="flex">
          <span>Competitor Products Being Tracked</span>
          <div className="flex-grow" />
          <Button
            onClick={onLoadItems}
            type="default"
            icon={<SyncOutlined />}
          />
          {pids.length > 0 && (
            <Popconfirm title="Are you sure to delete!" onConfirm={onDelete}>
              <Button
                loading={deleteLoading}
                type="danger"
                style={{ marginBottom: 0 }}
                icon={<DeleteOutlined />}
                children="DELETE"
              />
            </Popconfirm>
          )}
        </h2>
        <Table
          loading={tableLoading}
          className="gx-table-responsive mt-4 rounded-lg"
          columns={columns}
          dataSource={items}
          pagination={{ pageSize: 6 }}
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
        <AppLink
          href={`/competitor-products/tracking/${itemid}?shopid=${shopid}`}
        >
          Product Tracking
        </AppLink>
      </Menu.Item>
      <Menu.Item icon={<LineChartOutlined />}>
        <AppLink
          href={`/competitor-products/analytics/${itemid}?shopid=${shopid}`}
        >
          Product Analytics
        </AppLink>
      </Menu.Item>
      <Menu.Item onClick={onUpdate} icon={<SyncOutlined />}>
        Update
      </Menu.Item>
    </Menu>
  );
};

export default CompetitorProducts;
