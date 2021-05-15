import { Table } from "antd";

import { timestampFormatter } from "helpers";
import ProductLastUpdate from "main/apps/product-tracking/ProductLastUpdate";
import { useItemTitleHistory } from "hooks";

function TitlesTable({ itemid = "" }) {
  const [data, loading, refresh] = useItemTitleHistory(itemid);

  if (loading) {
    return null;
  }

  return (
    <div>
      <ProductLastUpdate itemid={itemid} onUpdateSuccess={refresh} />
      <Table
        className="gx-table-responsive"
        columns={columns}
        dataSource={data.map(mapper)}
        bordered={true}
      />
    </div>
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
