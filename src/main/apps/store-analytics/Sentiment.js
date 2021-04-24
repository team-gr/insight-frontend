import { useState, useEffect } from "react";
import { Card } from "antd";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

import { StoreServices } from "services";

const RADIAN = Math.PI / 180;

function Sentiment({ shopid = "" }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    StoreServices.getShopByID(shopid)
      .then((resp) => {
        const ratings = resp.rating_count;
        setData([
          { name: "positives", value: ratings[4] },
          {
            name: "negatives",
            value: ratings[0] + ratings[1] + ratings[2] + ratings[3],
          },
        ]);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);
  return (
    <Card className="p-auto" loading={loading}>
      <h2 className="text-center w-full">Sentiment</h2>
      <PieChart width={230} height={230}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          <Cell key="cell-1" fill="#0088FE" />
          <Cell key="cell-2" fill="#00C49F" />
        </Pie>
        <Tooltip />
        <Legend layout="horizontal" align="center" />
      </PieChart>
    </Card>
  );
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default Sentiment;
