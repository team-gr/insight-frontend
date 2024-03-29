import { Table } from "antd";

import { timestampFormatter } from "helpers";
import ProductLastUpdate from "main/apps/product-tracking/ProductLastUpdate";
import { useItemTitleHistory } from "hooks";

function TitlesTable({ itemid, shopid }) {
  const [data, loading, refresh] = useItemTitleHistory(itemid);

  return (
    <div>
      <ProductLastUpdate
        itemid={itemid}
        shopid={shopid}
        onUpdateSuccess={refresh}
      />
      <Table
        loading={loading}
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
