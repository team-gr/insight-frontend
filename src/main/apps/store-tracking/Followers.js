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

import { timestampFormatter } from "helpers";

function Followers() {
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

const data = [
  { follower_count: 13200, ctime: "2021-04-12 09:23:09.779853 +0700 +07" },
  { follower_count: 143000, ctime: "2021-04-11 09:23:09.779996 +0700 +07" },
  { follower_count: 98000, ctime: "2021-04-10 09:23:09.78 +0700 +07" },
  { follower_count: 127000, ctime: "2021-04-09 09:23:09.780002 +0700 +07" },
  { follower_count: 90000, ctime: "2021-04-08 09:23:09.780005 +0700 +07" },
  { follower_count: 162000, ctime: "2021-04-07 09:23:09.779853 +0700 +07" },
  { follower_count: 172000, ctime: "2021-04-06 09:23:09.779853 +0700 +07" },
  { follower_count: 185000, ctime: "2021-04-05 09:23:09.779853 +0700 +07" },
  { follower_count: 62000, ctime: "2021-04-04 09:23:09.779853 +0700 +07" },
  { follower_count: 174000, ctime: "2021-04-03 09:23:09.779853 +0700 +07" },
];

export default Followers;
