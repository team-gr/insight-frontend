import { Table, Tag } from "antd";

import { vndFormatter } from "helpers";

function PricesTable({ data }) {
  return (
    <div className="mt-4">
      <Table
        className="gx-table-responsive"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

const columns = [
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => a.ts - b.ts,
    sortOrder: "descend",
  },
  {
    title: "PRICE BEFORE DISCOUNT",
    dataIndex: "priceBeforeDiscount",
    key: "priceBeforeDiscount",
    render: vndFormatter,
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "price",
    render: (value, record) => (
      <div>
        {vndFormatter(value)} <Tag color="green">-{record.discount} %</Tag>
      </div>
    ),
  },
];

export default PricesTable;
