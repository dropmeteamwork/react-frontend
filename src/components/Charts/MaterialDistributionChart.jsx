import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#82ca9d', '#8884d8']; 

const MaterialDistributionChart = ({ material_distribution_data }) => {
  const data = [
    { name: 'Bottles', value: parseFloat(material_distribution_data.bottles_percentage) },
    { name: 'Cans', value: parseFloat(material_distribution_data.cans_percentage) },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MaterialDistributionChart;