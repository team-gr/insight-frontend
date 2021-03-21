import { Table } from "antd";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Tags",
    dataIndex: "tags",
  },
  {
    title: "Sentiment",
    dataIndex: "sentiment",
  },
];

const tags = [];

function RatingList() {
  return (
    <div>
      <Table columns={columns} dataSource={tags} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default RatingList;
