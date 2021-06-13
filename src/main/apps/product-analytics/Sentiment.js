import { Card } from "antd";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

import * as R from "ramda";

function Sentiment({ ratings = [], loading = true }) {
  return (
    <Card className="p-auto" loading={loading}>
      <h2 className="text-center w-full">Sentiment</h2>
      <PieChart width={230} height={230}>
        <Pie
          data={makeChartData(ratings)}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          <Cell key="cell-1" fill="#0088FE" />
          <Cell key="cell-2" fill="#FF8042" />
        </Pie>
        <Tooltip />
        <Legend layout="horizontal" align="center" />
      </PieChart>
    </Card>
  );
}

function makeChartData(data = []) {
  return R.pipe(
    R.countBy((r) => (r.sentiment == 0 ? "positives" : "negatives")),
    ({ positives, negatives }) => [
      { name: "positives", value: positives },
      { name: "negatives", value: negatives },
    ]
  )(data);
}

const RADIAN = Math.PI / 180;
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
