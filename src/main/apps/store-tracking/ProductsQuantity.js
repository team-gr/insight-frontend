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

import useSWR from "swr";

import { HistoryServices } from "services";
import { timestampFormatter } from "helpers";

function ProductQuantity({ shopid = "" }) {
  const { data } = useSWR(
    [shopid, "product_quantity"],
    HistoryServices.getShopProductQuantityHistory
  );

  return (
    <div>
      <ResponsiveContainer width="100%" height={380}>
        <LineChart data={data} margin={{ top: 25 }}>
          <XAxis dataKey="ctime" tickFormatter={timestampFormatter} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelFormatter={timestampFormatter} />
          <Legend />
          <Line
            type="monotone"
            dataKey="product_quantity"
            stroke="#003366"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductQuantity;
