import { useState, useEffect } from "react";
import { Table } from "antd";

import { HistoryServices } from "services";

import { timestampFormatter } from "helpers";

function TitlesTable({ itemid = "" }) {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    HistoryServices.getItemNameHistory(itemid)
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
    dataIndex: "histories",
  },
];

export default TitlesTable;
