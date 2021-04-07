import { useState, useEffect } from "react";
import { Table } from "antd";

import { StoreServices } from "services";

import { timestampFormatter } from "helpers";

function ActiveVouchers({ shopid }) {
  const [shop, setShop] = useState({});

  useEffect(() => {
    console.log(shop);
  });

  useEffect(() => {
    StoreServices.getShopByID(shopid).then(setShop).catch(console.log);
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={shop.active_vouchers ? shop.active_vouchers : []}
      pagination={{ pageSize: 6 }}
      rowKey="code"
    />
  );
}

const columns = [
  {
    title: "VOUCHER NAME",
    render: (_, v) => makeVoucherName(v),
  },
  {
    title: "START DATE",
    dataIndex: "start_time",
    render: (t) => timestampFormatter(t * 1000),
  },
  {
    title: "END DATE",
    dataIndex: "end_time",
    render: (t) => timestampFormatter(t * 1000),
  },
  { title: "VOUCHER CODE", dataIndex: "code" },
];

function makeVoucherName(voucher) {
  if (voucher.reward_type === 1) {
    return `Hoàn ${voucher.coin_percentage}% xu Đơn Tối Thiểu ${
      voucher.min_spend / 100000000
    }K Tối Đa ${voucher.coin_cap / 1000}K xu`;
  }

  if (voucher.discount_value == 0) {
    return `Giảm 50% Đơn Tối Thiểu 10K Giảm Tối Đa 5K`;
  }

  return `Giảm ${voucher.discount_value / 10000000}K Đơn Tối Thiểu ${
    voucher.min_spend / 100000000
  }K`;
}

export default ActiveVouchers;
