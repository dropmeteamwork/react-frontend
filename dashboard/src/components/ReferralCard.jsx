import React from "react";
import AiSystemMetricsCard from "./AiSystemMetricsCard";

export default function ReferralCard({ className }) {
  return (
    <div className={`${className} card bg-base-100 shadow-sm`}>
      <div className="card-body">
        <div className="pb-5">
          <h2 className="font-semibold text-xl mb-2">
            Referral System Performance{" "}
          </h2>
          <p className="text-gray-500">User acquisition through referrals</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <AiSystemMetricsCard />
          <AiSystemMetricsCard />
        </div>
        <div>
          <h2 className="text-base font-medium mb-2">Top Referrers</h2>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="flex-1 font-light">Ahmed Hassan</h3>
            <p className="font-medium  text-right">45 referrals • 2250 pts</p>
          </div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="flex-1 font-light">Ahmed Hassan</h3>
            <p className="font-medium  text-right">45 referrals • 2250 pts</p>
          </div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="flex-1 font-light">Ahmed Hassan</h3>
            <p className="font-medium  text-right">45 referrals • 2250 pts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
