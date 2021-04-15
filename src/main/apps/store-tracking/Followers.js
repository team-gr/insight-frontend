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
import { useEffect } from "react";
import useSWR from "swr";

import { HistoryServices } from "services";
import { timestampFormatter } from "helpers";

function Followers({ shopid = "" }) {
  const { data } = useSWR(
    [shopid, "follower"],
    HistoryServices.getShopFollowerCountHistory
  );

  useEffect(() => {
    console.log(data);
  });
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
            dataKey="follower_count"
            stroke="#003366"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Followers;
