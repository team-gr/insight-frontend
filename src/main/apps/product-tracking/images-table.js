import { Table } from "antd";
import { timestampFormatter } from "helpers";
const data = [
  ,
  {
    id: 1,
    ts: 1546139183000,
    imageUrl: "https://cf.shopee.vn/file/7f160561e2f588ddd73f76a1f87353f3",
  },
  {
    id: 2,
    ts: 1546586457000,
    imageUrl: "https://cf.shopee.vn/file/2359d2677f6239097da6fcbfcf66418d_tn",
  },
  {
    id: 3,
    ts: 1547445508000,
    imageUrl: "https://cf.shopee.vn/file/1b964a88be5eb1e9dbd41e84d079f4a3_tn",
  },
];

function ImagesTable() {
  return (
    <div className="mt-4">
      <Table
        className="gx-table-responsive"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

const columns = [
  {
    title: "DATE",
    dataIndex: "ts",
    key: "key",
    sorter: (a, b) => a.ts - b.ts,
    sortOrder: "descend",
    render: timestampFormatter,
  },
  {
    title: "Image",
    dataIndex: "imageUrl",
    key: "key",
    render: (imageUrl) => (
      <div>
        <img className="max-h-32 rounded-lg" src={imageUrl} alt="" />
      </div>
    ),
  },
];

export default ImagesTable;
