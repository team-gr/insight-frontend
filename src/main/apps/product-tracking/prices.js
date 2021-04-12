import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Radio } from "antd";

import PricesChart from "main/apps/product-tracking/prices-chart";
import PricesTable from "main/apps/product-tracking/prices-table";

import { HistoryServices } from "services";

function Prices({ itemid = "" }) {
  const [viewStyle, setViewStyle] = useState("table");
  const [data, setData] = useState([]);

  useEffect(() => {
    HistoryServices.getItemPriceHistory(itemid)
      .then((history) => history.map(itemPriceHistoryMapper))
      .then(setData)
      .catch(console.log);
  }, []);

  function onViewStyleChange(e) {
    setViewStyle(e.target.value);
  }

  return (
    <div>
      <Radio.Group onChange={onViewStyleChange} defaultValue={viewStyle}>
        <Radio.Button value="chart">Chart view</Radio.Button>
        <Radio.Button value="table">Table view</Radio.Button>
      </Radio.Group>

      {viewStyle === "chart" && <PricesChart data={data} />}
      {viewStyle === "table" && <PricesTable data={data} />}
    </div>
  );
}

function itemPriceHistoryMapper({ discount, price, ctime } = {}, index) {
  return {
    key: `item-price-${index}`,
    ts: Date.parse(ctime),
    price: price / 100000,
    discount,
    priceBeforeDiscount: (price * (100 + discount)) / 10000000,
  };
}

export default Prices;
