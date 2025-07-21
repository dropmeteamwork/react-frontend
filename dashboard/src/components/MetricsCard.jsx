// card for User Engagement and so on
import React from "react";

export default function MetricsCard({className}) {
  return (
    <>
      <div className={`${className} card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="pb-5">
            <h2 className="font-semibold text-xl mb-2">User Engagement</h2>
            <p className="text-gray-500">
              Daily active users and engagement metrics{" "}
            </p>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Daily Active Users</p>
            <span className="text-lg text-blue-600 font-semibold">2,874</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Avg Session Duration </p>
            <span className="text-lg text-green-600 font-semibold">
              51.3 mins
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Avg Points Per User </p>
            <span className="text-lg text-purple-600 font-semibold">1,247</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Engagement Score </p>
            <span className="text-lg text-red-600 font-semibold">8.4/10 </span>
          </div>
        </div>
      </div>
    </>
  );
}
