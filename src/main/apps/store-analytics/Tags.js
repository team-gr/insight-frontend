import { useState, useEffect } from "react";
import { Table } from "antd";
import { StoreServices } from "services";

const columns = [
  {
    title: "Tags",
    dataIndex: "tag",
  },
  {
    title: "#",
    dataIndex: "count",
    sorter: (a, b) => a.count - b.count,
    sortDirections: ["descend"],
  },
];

function TagList({ shopid = "" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;

    StoreServices.tagCount(shopid)
      .then((result) => Object.entries(result))
      .then((entries) => entries.map((e) => ({ tag: e[0], count: e[1] })))
      .then((entries) => mounted && setData(entries))
      .catch(console.log);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Table
      className="mb-3"
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
    />
  );
}

export default TagList;
