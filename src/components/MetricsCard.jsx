// card for User Engagement and so on
import React from "react";

export default function MetricsCard({
  title,
  subTitle,
  activeUser,
  avgPoint,
  totalPoints,
  engageScore,
}) {
  return (
    <>
      <div className={`card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="pb-4">
            <h2 className="font-semibold text-xl mb-2">{title}</h2>
            <p className="text-gray-500">{subTitle}</p>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Daily Active Users</p>
            <span className="text-lg text-blue-600 font-semibold">
              {activeUser}
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Avg Points Per User </p>
            <span className="text-lg text-purple-600 font-semibold">
              {avgPoint} mins
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Total Points </p>
            <span className="text-lg text-red-600 font-semibold">
              {totalPoints}{" "}
            </span>
          </div>
          <div className="flex justify-between items-center ">
            <p className="text-base">Engagement Score </p>
            <span className="text-lg text-primary-color font-semibold">
              {engageScore}{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
