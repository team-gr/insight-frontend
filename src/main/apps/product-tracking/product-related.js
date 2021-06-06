import { useState, useEffect } from "react";
import { Radio, Table, Tag } from "antd";

import { ItemServices } from "services";
import { vndFormatter } from "helpers";
import ProductLastUpdate from "main/apps/product-tracking/ProductLastUpdate";
import { useItemRelated } from "hooks";

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

function ProductRelated({ itemid, shopid }) {
  const [data, loading, refresh] = useItemRelated(itemid);
  const [mode, setMode] = useState("sameshop");

  return (
    <div>
      <div className="flex items-center">
        <ProductLastUpdate
          itemid={itemid}
          shopid={shopid}
          onUpdateSuccess={refresh}
        />
        <div className="flex-grow" />
        <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
          <Radio.Button value="sameshop">Same Shop</Radio.Button>
          <Radio.Button value="similars">Similars</Radio.Button>
        </Radio.Group>
      </div>

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
