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

import { HistoryServices } from "services";
import { timestampFormatter } from "helpers";

function RatingsChart({ itemid }) {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    HistoryServices.getItemRatingsHistory(itemid)
      .then((items) => items.map(mapper))
      .then(setHistories)
      .catch(console.log);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={380}>
      <LineChart data={histories} margin={{ top: 25 }}>
        <XAxis dataKey="timestamp" tickFormatter={timestampFormatter} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip labelFormatter={timestampFormatter} />
        <Legend />
        <Line dataKey="positives" stroke="#34A853" activeDot={{ r: 8 }} />
        <Line dataKey="negatives" stroke="#EA4335" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

function mapper({ timestamp, rating_star, rating_count }) {
  const positives = rating_count[5];
  const negatives =
    rating_count[1] + rating_count[2] + rating_count[3] + rating_count[4];
  return { timestamp, rating_star, negatives, positives };
}

export default RatingsChart;
