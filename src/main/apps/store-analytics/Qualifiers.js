import { Table } from "antd";

const columns = [
  {
    title: "Qualifiers",
    dataIndex: "name",
  },
  {
    title: "#",
    dataIndex: "count",
  },
];

const tags = [
  { name: "dễ sử dụng", count: 4212 },
  { name: "rất ưng", count: 2123 },
  { name: "Rất đáng tiền", count: 2000 },
  { name: "Chắc chắn", count: 1992 },
  { name: "khá ổn", count: 1321 },
  { name: "hơi kì kì", count: 992 },
];

function Qualifiers() {
  return (
    <Table
      className="mb-3"
      columns={columns}
      dataSource={tags}
      pagination={{ pageSize: 5 }}
    />
  );
}

export default Qualifiers;
