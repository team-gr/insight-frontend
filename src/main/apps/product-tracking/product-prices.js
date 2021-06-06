import { useRouter } from "next/router";
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
import { Card } from "antd";

import { vndFormatter, timestampFormatter } from "helpers";

import ProductLastUpdate from "main/apps/product-tracking/ProductLastUpdate";

import { useItemPriceHistory } from "hooks";

function Prices({ itemid, shopid }) {
  const [data, loading, refresh] = useItemPriceHistory(itemid);

  return (
    <div>
      <ProductLastUpdate
        onUpdateSuccess={refresh}
        itemid={itemid}
        shopid={shopid}
      />

      <Card className="gx-card" loading={loading}>
        <ResponsiveContainer width="100%" height={380}>
          <LineChart margin={{ top: 25 }}>
            <XAxis dataKey="ts" tickFormatter={timestampFormatter} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />

            <Legend />
            <Line dataKey="price" data={data.map(mapper)} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

function mapper({ discount, price, ctime } = {}, index) {
  return {
    key: `item-price-${index}`,
    ts: Date.parse(ctime),
    price: price / 100000,
    discount,
  };
}

function CustomTooltip({ active, payload, label }) {
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
}

export default Prices;
