import React from "react";
import AiSystemMetricsCard from "./AiSystemMetricsCard";

export default function VoucherCard({ className }) {
  return (
    <div className={`${className} card bg-base-100 shadow-sm`}>
      <div className="card-body">
        <div className="pb-5">
          <h2 className="font-semibold text-xl mb-2">
            Voucher System Performance
          </h2>
          <p className="text-gray-500">Points vs coupons redemption </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <AiSystemMetricsCard />
          <AiSystemMetricsCard />
          <AiSystemMetricsCard className="col-span-2 bg-red" />
        </div>
      </div>
    </div>
  );
}
