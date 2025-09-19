import React from "react";

export default function UserTransaction({
  name,
  points,
  productName,
  // machine,
  couponValue,
  code,
  // bottles,
  // cans,
  date,
}) {
  const [onlyDate, onlyTime] = date?.split("T") || [];
  const cleanTime = onlyTime?.split(".")[0];

  return (
    <div className="border-l-3 border-orange-500 bg-secondary-color p-4 ">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg mb-1">{name || "Unknown"}</h3>
          {/* <p className="text-gray-500 mb-2">{machine}</p> */}
          <p className="text-gray-500">Date: {onlyDate}</p>
          <p className="text-gray-500 mb-2">Time: {cleanTime}</p>
          <p className="text-gray-500 mb-2">Material: bottles and cans</p>
        </div>
        <div className="text-right">
          <h3 className="font-semibold text-lg mb-1 text-orange-500">{points} Points</h3>
          <h3 className="font-semibold text-md mb-1 text-primary-color">{productName}</h3>
          <p className="font-medium text-md mb-1 text-gray-500">{couponValue} pounds</p>
          <div className="badge badge-sm  bg-primary-color text-white">{code}</div>
        </div>
      </div>
    </div>
  );
}
