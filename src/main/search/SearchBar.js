import React, { useState, useEffect, useContext } from "react";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { useDebounce } from "hooks";

import { ItemServices } from "services";
import { Context } from "main/search";

export default function SearchBar() {
  const { dispatch } = useContext(Context);
  const [options, setOptions] = useState([]);
  const [keyword, setKeyword] = useState("");
  const debounced = useDebounce(keyword, 1000);

  useEffect(() => {
    ItemServices.hints({ keyword: debounced, shopee: true })
      .then((hints) => {
        console.log({ hints });
        const opts = hints.map((hint) => ({
          label: renderTitle(hint.source),
          options: hint.keywords.map(renderItem),
        }));
        setOptions(opts);
      })
      .catch(console.log);
  }, [debounced]);

  function onSearch(keyword) {
    dispatch({ type: "set_loading", payload: true });
    ItemServices.items({ keyword })
      .then((items) => dispatch({ type: "set_items", payload: items }))
      .catch(console.log)
      .finally(() => dispatch({ type: "set_loading", payload: false }));
  }

  return (
    <div className="gx-module-box-header-inner">
      <AutoComplete
        className="certain-category-search w-full"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        options={options}
        placeholder="Search Keywords"
        onChange={setKeyword}
        onSelect={onSearch}
        onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
        children={<Input suffix={<SearchOutlined />} />}
      />
    </div>
  );
}

function renderTitle(title) {
  return <span>{title}</span>;
}

function renderItem(title) {
  return {
    value: title,
    label: <span>{title}</span>,
  };
}
