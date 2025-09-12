import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const RecyclingTrendsChart = ({ recyclingData }) => {
  const chartData = recyclingData.month_labels.map((month, index) => ({
    name: month,
    'Recycled Items': recyclingData.recycled_items[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Recycled Items"
          stroke="#00a63e"
          fill="#00a63e"
          fillOpacity={0.6}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RecyclingTrendsChart;