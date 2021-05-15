import { Table, Tag } from "antd";
import * as R from "ramda";

const columns = [
  {
    title: "Tags",
    dataIndex: "tag",
  },
  {
    title: "Stars",
    render: (_, { stars = [] }) => (
      <div>
        {stars.map(
          (count, index) =>
            count > 0 && (
              <Tag key={index}>
                <span className="flex items-center">
                  <span className="mr-2">{index + 1}⭑ </span>
                  {count}
                </span>
              </Tag>
            )
        )}
      </div>
    ),
  },
  {
    title: "Count",
    dataIndex: "count",
    sorter: (a, b) => a.count > b.count,
    sortOrder: "descend",
  },
];

const makeDataSource = (ratings = []) => {
  return R.pipe(
    R.filter((r) => r.tags.length > 0),
    R.map((r) => r.tags),
    R.flatten(),
    R.countBy(R.identity),
    Object.entries,
    R.map(([tag, count]) => ({
      tag,
      count,
      stars: countStarForTag(ratings, tag),
    })),
    R.tap(console.log)
  )(ratings);
};

const countStarForTag = (ratings = [], tag = "") => {
  const count = (star) =>
    R.pipe(
      R.filter((r) => r.tags.includes(tag) && r.star == star),
      R.length
    )(ratings);

  return R.map(count, [1, 2, 3, 4, 5]);
};

function TagAnalytics({ ratings = [] }) {
  return (
    <Table
      className="mb-3"
      columns={columns}
      dataSource={makeDataSource(ratings)}
      pagination={{ pageSize: 5 }}
      rowKey="tag"
    />
  );
}

export default TagAnalytics;
