import { Table, Tag } from "antd";

import { vndFormatter, timestampFormatter } from "helpers";

function PricesTable({ data }) {
  return (
    <div className="mt-4">
      <Table
        className="gx-table-responsive"
        columns={columns}
        dataSource={data}
        rowKey="key"
      />
    </div>
  );
}

const columns = [
  {
    title: "DATE",
    dataIndex: "ts",
    render: timestampFormatter,
    sorter: (a, b) => a.ts - b.ts,
  },
  {
    title: "PRICE BEFORE DISCOUNT",
    dataIndex: "priceBeforeDiscount",
    key: "key",
    render: vndFormatter,
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "key",
    render: (value, record) => (
      <div>
        {vndFormatter(value)} <Tag color="green">-{record.discount} %</Tag>
      </div>
    ),
  },
];

export default PricesTable;
