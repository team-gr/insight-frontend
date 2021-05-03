import { useState, useEffect } from "react";
import { Radio, Table, Tag } from "antd";

import { ItemServices } from "services";

import { vndFormatter } from "helpers";

const columns = [
  {
    title: "PRODUCT",
    dataIndex: "product",
    width: "50%",
    render: (_, record) => (
      <div className="w-full flex">
        <img
          alt=""
          className="w-1/2 xl:w-1/3 rounded-lg mr-2"
          src={`https://cf.shopee.vn/file/${record.image}`}
        />
        <span className="lg ml-1">{record.name}</span>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "price_before_discount",
    render: (price) => vndFormatter(price / 100000),
  },
  {
    title: "Sale Price",
    dataIndex: "price",
    render: (_, record) => (
      <div>
        <span className="mr-2">{vndFormatter(record.price / 100000)}</span>
        <Tag color="green">-{record.discount}%</Tag>
      </div>
    ),
  },
];

function ProductRelated({ itemid }) {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("sameshop");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ItemServices.getRelatedItems(itemid)
      .then(setData)
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
        <Radio.Button value="sameshop">Same Shop</Radio.Button>
        <Radio.Button value="similars">Similars</Radio.Button>
      </Radio.Group>
      <Table
        className="py-2"
        loading={loading}
        bordered={true}
        columns={columns}
        dataSource={data[mode]}
        rowKey="id"
      />
    </div>
  );
}

export default ProductRelated;
