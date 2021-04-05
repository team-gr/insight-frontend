import { Table } from "antd";

function ActiveVouchers() {
  return <Table columns={columns} dataSource={[]} />;
}

const columns = [
  { title: "VOUCHER NAME", dataIndex: "name" },
  { title: "START DATE", dataIndex: "start" },
  { title: "END DATE", dataIndex: "end" },
  { title: "VOUCHER DETAIL", dataIndex: "detail" },
  { title: "ACTIVE", dataIndex: "active" },
];

export default ActiveVouchers;
