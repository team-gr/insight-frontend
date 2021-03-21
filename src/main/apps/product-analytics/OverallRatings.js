import { Card } from "antd";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
  { name: "5", value: 1300 },
  { name: "4", value: 77 },
  { name: "3", value: 30 },
  { name: "2", value: 7 },
  { name: "1", value: 6 },
];

const RADIAN = Math.PI / 180;

function OverallRatingsStar() {
  return (
    <Card title="Overall Ratings Start" className="p-auto">
      <PieChart width={230} height={230}>
        <text x="50%" y="50%" className="h1" textAnchor="middle">
          1420
        </text>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          <Cell key="cell-1" fill="#34A853" />
          <Cell key="cell-2" fill="#4285F4" />
          <Cell key="cell-3" fill="#FBBC04" />
          <Cell key="cell-3" fill="#FFBB28" />
          <Cell key="cell-3" fill="#EA4335" />
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
  if (percent < 0.05) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default OverallRatingsStar;
