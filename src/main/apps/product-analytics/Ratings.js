import { useState, useEffect } from "react";
import { Table } from "antd";
import { ItemServices } from "services";

const columns = [
  {
    title: "Comment",
    dataIndex: "comment",
    width: "80%",
    render: (comment) => <div className="break-all">{comment}</div>,
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

function RatingList({ itemid = "" }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, []);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    ItemServices.getItemRatings(itemid)
      .then((ratings) => ratings.map(mapper))
      .then((ratings) => mounted && setData(ratings))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Table
        loading={loading}
        className="mb-3"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

function mapper({ category, comment, sentiment }) {
  return {
    category: makeCategory(category),
    comment,
    sentiment: sentiment === 1 ? "positive" : "negative",
  };
}

function makeCategory(category) {
  switch (category) {
    case 0:
      return "Reliability";
    case 1:
      return "Usability";
    case 2:
      return "Functionality";
    case 3:
      return "Pricing";
    case 4:
      return "Pricing";
    default:
      return "General";
  }
}

export default RatingList;
