import { Table } from "antd";
import { useSelector } from "react-redux";

import { vndFormatter } from "helpers";

function CompareTable() {
  const items = useSelector((state) => state.featurecompare.items);

  return (
    <Table
      title={() => `PRODUCT COMPARE (${items.length})`}
      className="mb-4 rounded-lg"
      columns={columns}
      dataSource={items}
      pagination={false}
      bordered
      scroll={{ x: 1900 }}
      rowKey="itemid"
    />
  );
}

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    width: 100,
    fixed: true,
  },
  {
    title: "IMAGE",
    dataIndex: "image",
    width: 40,
    render: (text, record) => (
      <a href={record.sourceUrl} target="_blank">
        <img
          src={`https://cf.shopee.vn/file/${text}`}
          className="rounded-lg"
          width="80"
        />
      </a>
    ),
  },
  {
    title: "BRAND",
    dataIndex: "brand",
    width: 40,
  },
  {
    title: "PRICE",
    dataIndex: "price",
    width: 40,
    render: vndFormatter,
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "PRICE BEFORE DISCOUNT",
    dataIndex: "price_before_discount",
    width: 80,
    render: vndFormatter,
    sorter: (a, b) => a.price_before_discount - b.price_before_discount,
  },
  {
    title: "DISCOUNT",
    dataIndex: "discount",
    width: 40,
    render: (text) => `${text}%`,
    sorter: (a, b) => a.discount - b.discount,
  },
  {
    title: "REVIEW",
    dataIndex: "review_count",
    width: 40,
    sorter: (a, b) => a.review_count - b.review_count,
  },
  {
    title: "RATING STAR",
    dataIndex: "rating_star",
    width: 60,
    sorter: (a, b) => a.rating_star - b.rating_star,
  },
  {
    title: "LIKED",
    dataIndex: "liked_count",
    width: 40,
    sorter: (a, b) => a.liked_count - b.liked_count,
  },
  {
    title: "SOLD",
    dataIndex: "sold",
    width: 40,
    sorter: (a, b) => a.sold - b.sold,
  },
  {
    title: "IN STOCK",
    dataIndex: "stock",
    width: 40,
    sorter: (a, b) => a.stock - b.stock,
  },
  {
    title: "SHOP LOCATION",
    dataIndex: "shop_location",
    width: 80,
  },
];

export default CompareTable;
