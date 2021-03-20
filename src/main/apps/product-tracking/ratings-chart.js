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

const data = [
  { ts: "2/2/2020", positive: 10, negative: 6, neutral: 8 },
  { ts: "3/2/2020", positive: 14, negative: 8, neutral: 12 },
  { ts: "4/2/2020", positive: 30, negative: 15, neutral: 14 },
];

function RatingsChart() {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <LineChart data={data} margin={{ top: 25 }}>
        <XAxis dataKey="ts" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="positive"
          stroke="#34A853"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="negative"
          stroke="#EA4335"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="neutral"
          stroke="#FBBC04"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RatingsChart;
