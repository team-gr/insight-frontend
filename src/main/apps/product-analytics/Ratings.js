import { Table } from "antd";

const columns = [
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Category",
    dataIndex: "category",
    filters: [
      { text: "Reliability", value: "Reliability" },
      { text: "Usability", value: "Usability" },
      { text: "Functionality", value: "Functionality" },
      { text: "Pricing", value: "Pricing" },
      { text: "Support", value: "Support" },
      { text: "General", value: "General" },
    ],
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
  {
    title: "Sentiment",
    dataIndex: "sentiment",
    filters: [
      { text: "Positive", value: "positive" },
      { text: "Neutral", value: "neutral" },
      { text: "Negative", value: "Negative" },
    ],
    onFilter: (value, record) => record.sentiment.indexOf(value) === 0,
    filterMultiple: false,
  },
];

const tags = [
  { comment: "Love your api", category: "General", sentiment: "Positive" },
  { comment: "Love your api", category: "General", sentiment: "Positive" },
  { comment: "Love your api", category: "General", sentiment: "Positive" },
  { comment: "Love your api", category: "General", sentiment: "Positive" },
  { comment: "Love your api", category: "General", sentiment: "Positive" },
  { comment: "Love your api", category: "General", sentiment: "Positive" },
  { comment: "Love your api", category: "General", sentiment: "Positive" },
];

function RatingList() {
  return (
    <div>
      <Table
        className="mb-3"
        columns={columns}
        dataSource={tags}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default RatingList;
