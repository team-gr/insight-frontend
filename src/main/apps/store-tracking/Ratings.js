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

function Ratings({ shopid = "" }) {
  const { data } = useSWR(
    [shopid, "ratings"],
    HistoryServices.getShopRatingsHistory
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
            dataKey="positive_reviews"
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="negative_reviews"
            stroke="red"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Ratings;
