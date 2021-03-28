import { Table } from "antd";

const columns = [
  {
    title: "Tags",
    dataIndex: "tag",
  },
  {
    title: "#",
    dataIndex: "count",
  },
];

const tags = [
  { tag: "Shop phục vụ rất tốt", count: 64 },
  { tag: "Chất lượng sản phẩm tốt", count: 18 },
  { tag: "Rất đáng tiền", count: 27 },
  { tag: "Thời gian giao hàng nhanh", count: 36 },
  { tag: "Chất lượng sản phẩm kém", count: 25 },
];

function TagList() {
  return (
    <Table
      className="mb-3"
      columns={columns}
      dataSource={tags}
      pagination={{ pageSize: 5 }}
    />
  );
}

export default TagList;
