import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { Card } from "antd";

const data = [
  {
    name: "Reliability",
    count: 4492,
  },
  {
    name: "Usability",
    count: 3502,
  },
  {
    name: "Functionality",
    count: 2155,
  },
  {
    name: "Pricing",
    count: 1356,
  },
  {
    name: "Support",
    count: 618,
  },
  {
    name: "General",
    count: 102,
  },
];

function Categories() {
  return (
    <Card className="gx-card-widget gx-card-full">
      <div className="ant-row-flex gx-px-4 gx-pt-4">
        <h2 className="h4 gx-mb-3">Categories</h2>
      </div>

      <ResponsiveContainer width="96%" height={295}>
        <BarChart width={400} height={250} data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="count" type="number" />
          <YAxis dataKey="name" type="category" axisLine={false} width={100} />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#8884d8"
            shape={shape}
            label={{ position: "right", fill: "#8884d8" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

function shape({ x, y, width, height, fill, payload }) {
  return (
    <path
      fill={getFillCollor(payload)}
      width={width}
      height={height}
      x={x}
      y={y}
      radius="0"
      class="recharts-rectangle"
      d={`M ${x},${y} h ${width} v ${height} h -${width} Z`}
    ></path>
  );
}

function getFillCollor(payload) {
  switch (payload.name) {
    case "Reliability":
      return "#0088FF";
    case "Usability":
      return "#AF66F9";
    case "Functionality":
      return "#FF5ABF";
    case "Pricing":
      return "#FF961A";
    case "Support":
      return "#0FCBD0";
    case "General":
      return "#11BA5D";
    default:
      return "#FFFFFF";
  }
}

export default Categories;
