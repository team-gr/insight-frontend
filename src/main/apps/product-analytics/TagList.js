import { Table } from "antd";

const columns = [
  {
    title: "Tag",
    dataIndex: "tag",
  },
  {
    title: "#",
    dataIndex: "count",
  },
];

const tags = [
  { tag: "Shop phục vụ rất tốt", count: 10 },
  { tag: "Chất lượng sản phẩm tuyệt vời", count: 10 },
  { tag: "Rất đáng tiền", count: 10 },
  { tag: "Thời gian giao hàng nhanh", count: 10 },
  { tag: "Chất lượng sản phẩm kém", count: 10 },
  { tag: "Shop phục vụ khá tốt", count: 10 },
];

function TagList() {
  return (
    <Table columns={columns} dataSource={tags} pagination={{ pageSize: 5 }} />
  );
}

export default TagList;
