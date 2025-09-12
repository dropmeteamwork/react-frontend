import React from "react";

export default function AiSystemMetricsCard({ title,subTitle,children }) {
  return (
    <div className={`text-center `}>
      {children}
      <h2 className="text-2xl font-semibold mt-3">{title}</h2>
      <p className="text-gray-500">{subTitle}</p>
    </div>
  );
}
