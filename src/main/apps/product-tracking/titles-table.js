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
    <div className="mt-4">
      <Table
        className="gx-table-responsive"
        columns={columns}
        dataSource={histories}
      />
    </div>
  );
}

function mapper({ name, timestamp }) {
  return { name, timestamp };
}

const columns = [
  {
    title: "DATE",
    dataIndex: "timestamp",
    sorter: (a, b) => a.ts - b.ts,
    render: timestampFormatter,
  },
  {
    title: "TITLE",
    dataIndex: "name",
  },
];

export default TitlesTable;
