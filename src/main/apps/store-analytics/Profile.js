import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

function Profile({ shop = {} }) {
  return (
    <>
      <AppLink href="/competitor-stores">
        <div className="flex items-center cursor-pointer mb-4">
          <CaretLeftOutlined />
          <span className="ml-1">Go Back</span>
        </div>
      </AppLink>
      <div className="gx-profileon-thumb gx-profileon-thumb-htctrcrop rounded-lg mb-3">
        <img src={`https://cf.shopee.vn/file/${shop.avatar}`} alt="" />
      </div>
      <a target="_blank" href={`https://shopee.vn/${shop.name}`}>
        <div className="gx-follower gx-text-center">{shop.username}</div>
      </a>

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
  console.log(typeof ints);
  if (typeof ints === "object") {
    return ints.reduce((acc, curr) => acc + curr, 0);
  }

  return 0;
}

export default Profile;
