import { Table, Tag } from "antd";
import { round } from "lodash";
import * as R from "ramda";

function RatingList({ ratings = [], loading = true }) {
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
      title: "Sentiment",
      render: renderSentimentCell,
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
        loading={loading}
        rowKey="id"
      />
    </div>
  );
}

function renderSentimentCell({ sentiment_probs: probs } = {}) {
  if (probs && probs.length === 2) {
    return (
      <div className="flex flex-row items-center">
        <Tag color="blue">{round(probs[0] * 100)}%</Tag>
        <Tag color="orange">{round(probs[1] * 100)}%</Tag>
      </div>
    );
  }

  return null;
}

export default RatingList;
