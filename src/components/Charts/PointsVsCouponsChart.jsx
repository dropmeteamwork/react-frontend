import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PointsVsCouponsChart = ({ pointsCouponsData }) => {
  const chartData = pointsCouponsData.month_labels.map((month, index) => ({
    name: month,
    "Points Earned": pointsCouponsData.points[index],
    "Coupons Redeemed": pointsCouponsData.coupons_redeemed[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Points Earned" fill="#413ea0" />
        <Bar dataKey="Coupons Redeemed" fill="#ff7300" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PointsVsCouponsChart;
