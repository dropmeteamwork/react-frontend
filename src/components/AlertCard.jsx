import React from "react";

export default function AlertCard({ machine, condition }) {
  return (
    <div className={`card bg-secondary-color shadow-sm`}>
      <div className="card-body">
        <div className="pb-2 flex gap-5 items-center">
          <h2 className="font-medium text-lg">{machine}</h2>

           {/* Dummy data for machine alerts */}
          <span
            className={`${
              condition === "high" ? "bg-red-500" : "bg-primary-color"
            } text-white rounded-md px-2 py-1 text-xs`}
          >
            {condition}
          </span>{" "}
        </div>
        <p>
          {condition == "low"
            ? `Low condition detected at ${machine}`
            : `Significant increase in usage at ${machine}`}
        </p>
        <span className="text-gray-500">6/30/2025, 1:30:00 PM</span>
      </div>
    </div>
  );
}
