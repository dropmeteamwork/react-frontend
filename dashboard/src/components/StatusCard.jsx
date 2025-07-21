// card for Total Users and so on
import React from "react";

export default function StatusCard({className}) {
  return (
    <>
      <div className= {`${className} card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-lg capitalize">Total users</h2>
            <span className="text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <span className="text-2xl font-semibold">45,678</span>
            </li>
            <li>
              <span className="text-gray-500">3,456 active today</span>
            </li>
            <li>
              <span className="text-green-500">+12.5% from last week</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
