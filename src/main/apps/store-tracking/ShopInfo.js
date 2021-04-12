import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Divider } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

import { StoreServices } from "services";

import { numberFormatter } from "helpers";

function ShopStatistics() {
  const { query } = useRouter();
  const [shop, setShop] = useState({});

  useEffect(() => {
    console.log(shop);
  });

  useEffect(() => {
    StoreServices.getShopByID(query.id).then(setShop).catch(console.log);
  }, []);

  return (
    <>
      <AppLink href="/competitor-stores">
        <div className="flex items-center cursor-pointer">
          <CaretLeftOutlined />
          <span className="ml-1">Go Back</span>
        </div>
      </AppLink>

      <h4 className="mt-6 text-xl">{shop.name}</h4>

      <img
        className="max-h-48 rounded-lg mt-2"
        alt=""
        src={`https://cf.shopee.vn/file/${shop.avatar}`}
      />
      <Divider className="mt-0" />

      <Button type="dashed" size="large" className="w-full">
        <a href={`https://shopee.vn/${shop.username}`} target="_blank">
          Visit in Shopee
        </a>
      </Button>

      <div className="mt-6 mx-1">
        <div className="flex justify-between items-center text-lg">
          <span>Active Vouchers:</span>
          <span>{shop.active_vouchers ? shop.active_vouchers.length : 0}</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Followers:</span>
          <span>{numberFormatter(shop.follower_count)}</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Seller Rating:</span>
          <span>{shop.rating_star}</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Products Quantity:</span>
          <span>{shop.product_quantity}</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Chat Response Rate:</span>
          <span>{shop.response_rate}%</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Response Time:</span>
          <span>{shop.response_time}</span>
        </div>
      </div>
    </>
  );
}

export default ShopStatistics;
