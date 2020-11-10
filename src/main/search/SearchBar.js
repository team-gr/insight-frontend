import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar() {
  return (
    <div className="gx-module-box-header-inner">
      <AutoComplete
        className="certain-category-search w-full"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        options={options}
        placeholder="Search Keywords"
        onChange={(update) => console.log("[on change]", update)}
        onSelect={(selected) => console.log("[on select]", selected)}
      >
        <Input suffix={<SearchOutlined />} />
      </AutoComplete>
    </div>
  );
}

const options = [
  {
    label: renderTitle("Shopee"),
    options: [
      renderItem("Áo Khoác Kaki"),
      renderItem("Áo Khoác hoodie"),
      renderItem("Áo Khoác cho bé"),
      renderItem("Áo Khoác dạ"),
      renderItem("Áo Khoác bé trai"),
    ],
  },
  {
    label: renderTitle("Tiki"),
    options: [
      renderItem("Áo Khoác nam"),
      renderItem("Áo Khoác nữ"),
      renderItem("Áo Khoác form rộng"),
    ],
  },
  {
    label: renderTitle("Lazada"),
    options: [
      renderItem("Áo khoác nam"),
      renderItem("Áo khoác nữ"),
      renderItem("Áo khoác hot trend 2020"),
      renderItem("Áo khoác nữ form rộng đi học"),
    ],
  },
];

function renderTitle(title) {
  return <span>{title}</span>;
}

function renderItem(title) {
  return {
    value: title,
    label: <span>{title}</span>,
  };
}
