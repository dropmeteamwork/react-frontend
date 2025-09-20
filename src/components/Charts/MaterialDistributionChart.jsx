import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#82ca9d', '#8884d8'];

const MaterialDistributionChart = ({ material_distribution_data }) => {
  const data = [
    { name: 'Bottles', value: parseFloat(material_distribution_data.bottles_percentage) },
    { name: 'Cans', value: parseFloat(material_distribution_data.cans_percentage) },
  ];

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={2}
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

      <div className="flex gap-6 items-center">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-2 ">
            <span
              className="w-2 h-2 rounded-full "
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span className="text-lg font-medium">
              {entry.name}: {entry.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialDistributionChart;