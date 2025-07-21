import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import UserCard from "../components/UserCard";

export default function UserPage({className}) {
  return (
    <div className="">
          <div className={`${className} card bg-base-100 shadow-sm`}>
            <div className="card-body">
              <div className="pb-5 flex justify-between">
                <div>
                  <h2 className="font-semibold text-xl mb-2">User Database</h2>
                  <p className="text-gray-500">Manage and monitor user accounts</p>
                </div>
                <div className="w-[260px]">
                  <label className="input">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search" />
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 ">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
              </div>
            </div>
          </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
    </div>
  );
}
