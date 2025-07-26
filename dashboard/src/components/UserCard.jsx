import React from "react";

export default function UserCard({
  userName,
  userEmail,
  userNumber,
  active,
  userAge,
  userPoints,
  referral,
}) {
  return (
    <div className="border-l-3 border-orange-500 bg-secondary-color p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg mb-1">{userName}</h3>
          <p className="text-gray-500">{userEmail}</p>
          <p className="text-gray-500 mb-2">
            {userNumber} {userAge && ` • Age: ${userAge}`}
          </p>
        </div>
        <div className="text-right ">
          <h3 className="font-semibold text-xl mb-2">{userPoints} points</h3>
          <p className="text-gray-500 mb-1">{referral} referrals</p>
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
