import React from "react";

export default function AiSystemMetricsCard({ className }) {
  return (
    <div className={`${className} text-center`}>
      <h2 className="text-2xl font-semibold text-blue-600">2,456,789</h2>
      <p className="text-gray-500">Total Items Processed</p>
    </div>
  );
}
