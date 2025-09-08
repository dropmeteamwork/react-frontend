import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserRetentionChart = ({ user_retension_data }) => {
  const chartData = user_retension_data.weeks.map((week, index) => ({
    name: week,
    retention: user_retension_data.retention_rates[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="retention"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserRetentionChart;
