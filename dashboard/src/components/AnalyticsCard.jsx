import React, { Children } from "react";

export default function AnalyticsCard({ title, subTitle,children }) {
  return (
    <>
      <div className={`card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="pb-5">
            <h2 className="font-medium text-xl mb-2">{title}</h2>
            <p className="text-gray-500">
              {subTitle}
            </p>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
