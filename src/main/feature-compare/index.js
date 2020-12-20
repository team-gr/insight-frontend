import { Input, Button, Table, Tag, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Widget from "components/Widget";

import { FeatureCompareActions as Actions } from "app-redux/featurecompare";

function FeatureCompare() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.featurecompare.items);

  function onRandomItem() {
    message.success("A new item added to compare !", 2);
    dispatch(Actions.randomItem());
    dispatch(Actions.setNotifying(true));
  }

  return (
    <div>
      <Widget>
        <h2>Compare New Competitor Product</h2>
        <div className="w-full justify-between flex">
          <div className="flex-grow mr-4">
            <Input placeholder="Add Product URL" />
          </div>
          <Button type="primary" onClick={onRandomItem} className="gx-mb-0">
            Compare
          </Button>
        </div>
      </Widget>

      <Table
        title={() => `PRODUCT COMPARE (${items.length})`}
        className="mb-4 rounded-lg"
        columns={columns}
        dataSource={items}
        pagination={false}
        bordered
        scroll={{ x: 1500 }}
      />
    </div>
  );
}

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    width: 150,
    fixed: true,
  },
  {
    title: "IMAGE",
    dataIndex: "image",
    width: 100,
    render: (text, record) => (
      <a href={record.sourceUrl} target="_blank">
        <img
          src={`https://cf.shopee.vn/file/${text}`}
          className="rounded-lg"
          width="150"
        />
      </a>
    ),
  },
  {
    title: "BRAND",
    dataIndex: "brand",
    width: 60,
  },
  {
    title: "PRICE",
    dataIndex: "price",
    width: 120,
    render: (text, record) => {
      return (
        <div className="">
          <div>
            <Tag>
              <span className="line-through">{record.price}</span>{" "}
            </Tag>
            <Tag color="green">{record.priceBeforeDiscount}</Tag>
            <Tag color="red">{record.discount}% GIẢM</Tag>
          </div>
        </div>
      );
    },
  },
  {
    title: "REVIEW and RANK",
    width: 200,
    render: (_, record) => (
      <div>
        <Tag color="cyan">Review: {record.review}</Tag>
        <Tag color="gold">Rating: {record.rating}</Tag>
        <Tag color="geekblue">View: 310</Tag>
        <Tag color="blue">Sold: 48</Tag>
        <Tag color="orange">Stock: 268</Tag>
      </div>
    ),
  },
];

export default FeatureCompare;
