import { useState, useEffect } from "react";

import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

import { ItemServices } from "services";

function Profile({ item = {} }) {
  return (
    <>
      <AppLink href="/competitor-products">
        <div className="flex items-center cursor-pointer">
          <CaretLeftOutlined />
          <span className="ml-1">Go Back</span>
        </div>
      </AppLink>
      <div className="gx-profileon-thumb gx-profileon-thumb-htctrcrop rounded-lg mb-3">
        <img src={`https://cf.shopee.vn/file/${item.image}`} alt="" />
      </div>
      <div className="gx-follower gx-text-center">{item.name}</div>
      <div className="gx-follower gx-text-center">
        <ul className="gx-follower-list">
          <li>
            <span className="gx-follower-title">{item.cmt_count}</span>
            <span>ratings</span>
          </li>
          <li>
            <span className="gx-follower-title">{item.liked_count}</span>
            <span>Liked</span>
          </li>
          <li>
            <span className="gx-follower-title">{item.view_count}</span>
            <span>Views</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
