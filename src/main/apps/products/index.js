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
} from "antd";

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

  useEffect(onLoadItems, []);

  async function onLoadItems() {
    try {
      const data = await ItemServices.getUserTrackingItems(userid);
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log(error);
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
          <span>Competitor Products Being Analyzed</span>
          <div className="flex-grow" />

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
          className="gx-table-responsive mt-4 rounded-lg"
          columns={columns}
          dataSource={items}
          pagination={{ pageSize: 10 }}
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
    dataIndex: "updated_at",
    width: "20%",
    render: (ts) => timestampFormatter(ts * 1000),
  },
  {
    title: "LAST CHECKED",
    dataIndex: "last_check_at",
    render: (ts) => timestampFormatter(ts * 1000),
    width: "20%",
  },
  {
    title: "ACTIONS",
    width: "5%",
    render: (_, record) => (
      <Dropdown overlay={<ActionMenu itemid={record.id} />}>
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

const ActionMenu = ({ itemid }) => (
  <Menu>
    <Menu.Item icon={<HistoryOutlined />}>
      <AppLink href={`/competitor-products/tracking/${itemid}`}>
        Product Tracking
      </AppLink>
    </Menu.Item>
    <Menu.Item icon={<LineChartOutlined />}>
      <AppLink href="/competitor-products/analytics/1">
        Product Analytics
      </AppLink>
    </Menu.Item>
    <Menu.Item icon={<SyncOutlined />}>Update</Menu.Item>
  </Menu>
);

export default CompetitorProducts;
