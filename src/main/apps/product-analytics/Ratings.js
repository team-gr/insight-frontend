import { Table, Tag } from "antd";
import * as R from "ramda";

function RatingList({ ratings = [] }) {
  console.log(ratings);

  const tagFilters = R.pipe(
    R.map((r) => r.tags),
    R.flatten(),
    R.countBy(R.identity),
    R.keys(),
    R.map((text) => ({ text, value: text }))
  )(ratings);

  const columns = [
    {
      title: "Comment",
      dataIndex: "comment",
      width: "80%",
      render: (comment) => <div className="break-all">{comment}</div>,
    },
    {
      title: "Star",
      dataIndex: "star",
      filters: [
        { text: 1, value: 1 },
        { text: 2, value: 2 },
        { text: 3, value: 3 },
        { text: 4, value: 4 },
        { text: 5, value: 5 },
      ],
      onFilter: (value, record) => record.star == value,
    },
    {
      title: "Tags",
      render: (_, record) => (
        <>
          {record.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </>
      ),
      filters: tagFilters,
      onFilter: (value, record) => record.tags.includes(value),
    },
  ];

  return (
    <div>
      <Table
        className="mb-3"
        columns={columns}
        dataSource={ratings.filter((r) => r.comment !== "")}
        pagination={{ pageSize: 5 }}
        bordered={true}
        rowKey="id"
      />
    </div>
  );
}

export default RatingList;
