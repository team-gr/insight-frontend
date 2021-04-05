import { Table } from "antd";

import { timestampFormatter } from "helpers";

function ActiveVouchers() {
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 6 }} />
  );
}

const columns = [
  { title: "VOUCHER NAME", dataIndex: "name" },
  { title: "START DATE", dataIndex: "start", render: timestampFormatter },
  { title: "END DATE", dataIndex: "end", render: timestampFormatter },
  { title: "VOUCHER CODE", dataIndex: "code" },
  {
    title: "ACTIVE",
    dataIndex: "active",
    render: (active) => (active ? "ACTIVE" : "DISABLE"),
  },
];

const data = [
  {
    name: "Hoàn 15% xu Đơn Tối Thiểu 99K Tối Đa 50k xu",
    start: 1617609728000,
    end: 1619801948000,
    code: "FEAERMA4",
    active: true,
  },
  {
    name: "Giảm 50k Đơn Tối Thiểu 800k",
    start: 1617210004000,
    end: 1619801944000,
    code: "FEAERMA11",
    active: true,
  },
  {
    name: "Giẩm 300k Đơn Tối Thiểu 2tr",
    start: 1617210050000,
    end: 1619801990000,
    code: "FEAERMA4",
    active: true,
  },
];

export default ActiveVouchers;
