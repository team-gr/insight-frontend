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

function Ratings() {
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

const data = [
  {
    positive_reviews: 1567,
    negative_reviews: 45,
    ctime: "2021-04-12 09:23:09.779853 +0700 +07",
  },
  {
    positive_reviews: 1620,
    negative_reviews: 98,
    ctime: "2021-04-11 09:23:09.779996 +0700 +07",
  },
  {
    positive_reviews: 1372,
    negative_reviews: 80,
    ctime: "2021-04-10 09:23:09.78 +0700 +07",
  },
  {
    positive_reviews: 1672,
    negative_reviews: 102,
    ctime: "2021-04-09 09:23:09.780002 +0700 +07",
  },
  {
    positive_reviews: 1780,
    negative_reviews: 123,
    ctime: "2021-04-08 09:23:09.780005 +0700 +07",
  },
  {
    positive_reviews: 1832,
    negative_reviews: 142,
    ctime: "2021-04-07 09:23:09.779853 +0700 +07",
  },
  {
    positive_reviews: 1934,
    negative_reviews: 153,
    ctime: "2021-04-06 09:23:09.779853 +0700 +07",
  },
  {
    positive_reviews: 2042,
    negative_reviews: 176,
    ctime: "2021-04-05 09:23:09.779853 +0700 +07",
  },
  {
    positive_reviews: 1982,
    negative_reviews: 134,
    ctime: "2021-04-04 09:23:09.779853 +0700 +07",
  },
  {
    positive_reviews: 2061,
    negative_reviews: 131,
    ctime: "2021-04-03 09:23:09.779853 +0700 +07",
  },
];

export default Ratings;
