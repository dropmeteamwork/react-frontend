import React, { Children } from "react";

export default function AnalyticsCard({ className, children }) {
  return (
    <>
      <div className={`${className} card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="pb-5">
            <h2 className="font-medium text-xl mb-2">Network Performance</h2>
            <p className="text-gray-500">
              Daily recycling volume and revenue trends{" "}
            </p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
