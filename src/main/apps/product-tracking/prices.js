import { useState, useEffect } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Select } from "antd";

import { vndFormatter, timestampFormatter } from "helpers";

import { HistoryServices, ItemServices } from "services";

function Prices({ itemid = "" }) {
  const [data, setData] = useState([]);
  const [similars, setSimilars] = useState([]);
  const [similarLoading, setSimilarLoading] = useState(false);
  const [ids, setIDs] = useState([itemid]);

  useEffect(() => {
    async function loadHistory() {
      try {
        const promises = ids.map(async (id) => {
          const data = await HistoryServices.getItemPriceHistory(id);

          const item = similars.find((s) => s.id == id);
          if (item) {
            return {
              name: item.name,
              history: data.map(itemPriceHistoryMapper),
            };
          }

          return { name: "current", history: data.map(itemPriceHistoryMapper) };
        });
        const series = await Promise.all(promises);
        setData(series);
        console.log(series);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    loadHistory();
  }, [ids]);

  useEffect(() => {
    setSimilarLoading(true);
    ItemServices.getItemSimilars(itemid)
      .then(setSimilars)
      .catch(console.log)
      .finally(() => setSimilarLoading(false));
  }, []);

  return (
    <div>
      <Select
        loading={similarLoading}
        style={{ width: "100%" }}
        mode="multiple"
        onChange={(selectValues) => setIDs([...selectValues, itemid])}
        optionLabelProp="label"
      >
        {similars.map((item) => (
          <Select.Option value={item.id} label={item.name} key={item.id}>
            <div className="flex items-center">
              <img
                className="w-8 rounded-lg mr-2"
                src={`https://cf.shopee.vn/file/${item.image}`}
              />
              {item.name}
            </div>
          </Select.Option>
        ))}
      </Select>

      {data.map((s) => (
        <ResponsiveContainer
          width="100%"
          height={data.length === 1 ? 380 : 200}
        >
          <LineChart data={data} margin={{ top: 25 }}>
            <XAxis dataKey="ts" tickFormatter={timestampFormatter} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line dataKey="price" data={s.history} name={s.name} key={s.name} />
          </LineChart>
        </ResponsiveContainer>
      ))}
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-200 p-2 rounded-lg">
        <p>{timestampFormatter(label)}</p>
        <p className="break-normals">{payload[0].name}</p>
        <p>{vndFormatter(payload[0].value)}</p>
      </div>
    );
  }

  return null;
};

export default Prices;
