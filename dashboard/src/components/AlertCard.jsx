import React from "react";

export default function AlertCard({ className }) {
  return (
    <div className={`${className} card bg-secondary-color shadow-sm`}>
      <div className="card-body">
        <div className="pb-2 flex gap-5 items-center">
          <h2 className="font-medium text-lg">Machine name</h2>
          <span className="bg-red-500 text-white rounded-md px-2 py-1 text-xs">high</span>
        </div>
        <p>
        Machine at Dubai Mall (Level 2) requires immediate attention - 95% full
        </p>
        <span className="text-gray-500">6/30/2025, 1:30:00 PM</span>
      </div>
    </div>
  );
}
