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

import { vndFormatter, timestampFormatter } from "helpers";

function PricesChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <LineChart data={data} margin={{ top: 25 }}>
        <XAxis dataKey="ts" tickFormatter={timestampFormatter} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          formatter={(value) => vndFormatter(value)}
          labelFormatter={timestampFormatter}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#003366"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PricesChart;
