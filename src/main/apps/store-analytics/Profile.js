import { useState, useEffect } from "react";

import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

import { StoreServices } from "services";

function Profile({ shopid }) {
  const [shop, setShop] = useState({});

  useEffect(() => {
    StoreServices.getShopByID(shopid).then(setShop).catch(console.log);
  }, []);

  useEffect(() => {
    console.log(shop);
  }, [shop]);

  return (
    <>
      <AppLink href="/competitor-products">
        <div className="flex items-center cursor-pointer">
          <CaretLeftOutlined />
          <span className="ml-1">Go Back</span>
        </div>
      </AppLink>
      <div className="gx-profileon-thumb gx-profileon-thumb-htctrcrop rounded-lg mb-3">
        <img src={`https://cf.shopee.vn/file/${shop.avatar}`} alt="" />
      </div>
      <div className="gx-follower gx-text-center">{shop.name}</div>
      <div className="gx-follower gx-text-center">
        <ul className="gx-follower-list">
          <li>
            <span className="gx-follower-title">
              {sumInts(shop.rating_count)}
            </span>
            <span>ratings</span>
          </li>
          <li>
            <span className="gx-follower-title">{shop.product_quantity}</span>
            <span>Products</span>
          </li>
          <li>
            <span className="gx-follower-title">{shop.follower_count}</span>
            <span>Followers</span>
          </li>
        </ul>
      </div>
    </>
  );
}

function sumInts(ints) {
  return ints.reduce((acc, curr) => acc + curr, 0);
}

export default Profile;
