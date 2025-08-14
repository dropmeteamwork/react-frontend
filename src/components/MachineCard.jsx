import React from "react";
import { Link } from "react-router";

export default function MachineCard({
  name,
  location,
  totalCollected,
  dailyAvg,
  efficiency,
  isFull,
}) {
  return (
    <div className="p-4 card shadow-md border-1 border-gray-200">
      <div className="flex justify-between items-start ">
        <div className="flex gap-4 items-center">
          <div>
            {location && ( 
              <Link
                to={location} 
                className="cursor-pointer hover:stroke-blue-500 transition-colors duration-200" // Add hover effect for visual feedback
                aria-label={`View ${name} on map`} 
                title={`View ${name} on map`} 
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke={"#7bab43"}
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </Link>
            )}
            {!location && ( // Render just the icon if no location URL
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={"#7bab43"}
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            )}
          </div>
          <div>
            <h3 className="text-lg mb-1">{name}</h3>
            <p className="text-gray-500">
              Total collected: {totalCollected} items{" "}
            </p>
            <p className="text-gray-500 ">
              Daily average: {dailyAvg} items • Efficiency: {efficiency} %
            </p>
          </div>
        </div>
        <div className="text-right ">
          <h3 className="mb-2 font-semibold">Efficiency</h3>
          <progress
            className="progress w-30 block mb-3"
            value={efficiency}
            max="10"
          ></progress>
          <div
            className={`badge text-white ${
              isFull ? "bg-red-600" : "bg-primary-color"
            }`}
          >
            {isFull ? "Warning" : "Normal"}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
