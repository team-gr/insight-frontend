import { Table } from "antd";

import { timestampFormatter } from "helpers";

const data = [
  ,
  { id: 1, ts: 1546139183000, title: "Áo len nam cổ lọ màu mới nhất 2020" },
  {
    id: 2,
    ts: 1546586457000,
    title: "[Giảm giá 20%] Áo len nam cổ lọ màu mới nhất 2020",
  },
  {
    id: 3,
    ts: 1547445508000,
    title: "Áo len nam cổ lọ màu mới nhất 2020 [Khuyến mãi]",
  },
];

function TitlesTable() {
  return (
    <div className="mt-4">
      <Table
        className="gx-table-responsive"
        columns={columns}
        dataSource={data}
        rowKey="id"
      />
    </div>
  );
}

const columns = [
  {
    title: "DATE",
    dataIndex: "ts",
    sorter: (a, b) => a.ts - b.ts,
    sortOrder: "descend",
    render: timestampFormatter,
  },
  {
    title: "TITLE",
    dataIndex: "title",
  },
];

export default TitlesTable;
