import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const UserEngagementChart = ({ engagementData }) => {
  const chartData = engagementData.date_labels.map((date, index) => ({
    name: date,
    'Daily Active Users': engagementData.daily_active_users[index],
    'Avg Session Duration': engagementData.avg_session_duration[index],
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
        <Legend />
        <Line
          type="monotone"
          dataKey="Daily Active Users"
          stroke="#155dfc" 
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Avg Session Duration"
          stroke="#00a63e" 
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserEngagementChart;