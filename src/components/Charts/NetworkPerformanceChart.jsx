import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const NetworkPerformanceChart = ({ performanceData }) => {
  const chartData = performanceData.month_labels.map((month, index) => ({
    name: month,
    "Recycled Items": performanceData.recycled_items[index],
    Revenue: performanceData.revenue[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />{" "}
        <Line
          type="monotone"
          dataKey="Recycled Items"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />{" "}
        <Line
          type="monotone"
          dataKey="Revenue"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NetworkPerformanceChart;
