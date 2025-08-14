import React from "react";

export default function UserTransaction({
  name,
  machine,
  bottles,
  cans,
  date,
}) {
  const [onlyDate, onlyTime] = date?.split("T") || [];
  const cleanTime = onlyTime?.split(".")[0];

  return (
    <div className="border-l-3 border-orange-500 bg-secondary-color p-4 ">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg mb-1">{name || "Unknown"}</h3>
          <p className="text-gray-500 mb-2">{machine}</p>
          <p className="text-gray-500">Date: {onlyDate}</p>
          <p className="text-gray-500 mb-2">Time: {cleanTime}</p>
          <p className="text-gray-500 mb-2">Material: bottles and cans</p>
        </div>
        <div className="text-right">
          <h3 className="font-semibold text-lg mb-2 text-orange-500">{bottles} bottles</h3>
          <h3 className="font-semibold text-lg mb-2 text-primary-color">{cans} cans</h3>
        </div>
      </div>
    </div>
  );
}
