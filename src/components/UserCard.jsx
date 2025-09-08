import React from "react";

export default function UserCard({
  userName,
  userEmail,
  userNumber,
  active,
  userAge,
  userPoints,
  referral,
  totalItems,
  joined,
}) {
  return (
    <div className="border-l-3 border-orange-500 bg-secondary-color p-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-start">
        <div>
          <h3 className="text-lg mb-1">{userName}</h3>
          <p className="text-gray-500">{userEmail}</p>
          <p className="text-gray-500 mb-2">
            {userNumber ? userNumber : "N/A "}• Age:{" "}
            {userAge ? userAge : "unknown"}
          </p>
          <p className="text-gray-500 text-[12px] font-[300]">
            Joined:{" "}
            {joined
              ? new Date(joined).toLocaleString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "N/A"}
          </p>
        </div>
        <div className="sm:text-right">
          <h3 className="font-semibold text-xl mb-2">{userPoints} points</h3>
          <p className="text-gray-500 ">{referral} referrals</p>
          <p className="text-gray-500 mb-2">{totalItems} items recycled</p>
          <div
            className={`badge ${
              active ? "bg-primary-color text-white" : "bg-gray-400 text-white"
            }`}
          >
            {active ? "active" : "inactive"}
          </div>
        </div>
      </div>
    </div>
  );
}
