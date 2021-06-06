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
import { Card } from "antd";
import ProductLastUpdate from "main/apps/product-tracking/ProductLastUpdate";
import { timestampFormatter } from "helpers";
import { useItemRatingsHistory } from "hooks";

function RatingsChart({ itemid, shopid }) {
  const [data, loading, refresh] = useItemRatingsHistory(itemid);

  if (loading) {
    return null;
  }

  return (
    <div>
      <ProductLastUpdate
        itemid={itemid}
        shopid={shopid}
        onUpdateSuccess={refresh}
      />
      <Card className="gx-card">
        <ResponsiveContainer width="100%" height={380}>
          <LineChart data={data.map(mapper)} margin={{ top: 25 }}>
            <XAxis dataKey="timestamp" tickFormatter={timestampFormatter} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip labelFormatter={timestampFormatter} />
            <Legend />
            <Line dataKey="positives" stroke="#34A853" activeDot={{ r: 8 }} />
            <Line dataKey="negatives" stroke="#EA4335" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

function mapper({ ctime, rating_star, rating_count }) {
  const positives = rating_count[5];
  const negatives =
    rating_count[1] + rating_count[2] + rating_count[3] + rating_count[4];
  return { timestamp: Date.parse(ctime), rating_star, negatives, positives };
}

export default RatingsChart;
