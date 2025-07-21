import React from "react";

export default function UserCard() {
  return (
    <div className="border-l-3 border-orange-500 bg-secondary-color p-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg mb-1">Ahmed Hassan</h3>
          <p className="text-gray-500">ahmed.hassan@email.com </p>
          <p className="text-gray-500 mb-2">+971-50-123-4567 • Age: 28 </p>
          <p className="text-gray-500 font-extralight text-xs">
            Joined: 3/15/2024 • Last active: 6/30/2025{" "}
          </p>
        </div>
        <div className="text-right ">
          <h3 className="font-semibold text-xl mb-2">2,450 points</h3>
          <p className="text-gray-500">145 items recycled</p>
          <p className="text-gray-500 mb-1" >5 referrals</p>
          {/* <button className="btn btn-xs cursor-auto bg-primary-color  border-0">active</button> */}
          <div className="badge bg-primary-color text-white">active</div>
        </div>
      </div>
    </div>
  );
}
