import { useState, useEffect } from "react";
import { Table } from "antd";

import { HistoryServices } from "services";

import { timestampFormatter } from "helpers";

function TitlesTable({ itemid = "" }) {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    console.log(histories);
  });

  useEffect(() => {
    HistoryServices.getItemNameHistory(itemid)
      .then((items) => items.map(mapper))
      .then(setHistories)
      .catch(console.log);
  }, []);

  return (
    <Table
      className="gx-table-responsive"
      columns={columns}
      dataSource={histories}
      bordered={true}
    />
  );
}

function mapper({ name, ctime }) {
  return { name, timestamp: Date.parse(ctime) };
}

const columns = [
  {
    title: "DATE",
    dataIndex: "timestamp",
    sorter: (a, b) => a.timestamp - b.timestamp,
    render: timestampFormatter,
  },
  {
    title: "TITLE",
    dataIndex: "name",
  },
];

export default TitlesTable;
