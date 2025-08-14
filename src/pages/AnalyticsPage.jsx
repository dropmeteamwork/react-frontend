import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import AiSystemMetricsCard from "../components/AiSystemMetricsCard";

export default function AnalyticsPage({ className }) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
      <div className={`${className} card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="pb-5">
            <h2 className="font-semibold text-xl mb-2">
              Comprehensive Analytics Dashboard{" "}
            </h2>
            <p className="text-gray-500">
              Key performance indicators and metrics{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border-1 border-gray-100 rounded-xl p-3">
              <AiSystemMetricsCard />
            </div>
            <div className="border-1 border-gray-100 rounded-xl p-3">
              <AiSystemMetricsCard />
            </div>
            <div className="border-1 border-gray-100 rounded-xl p-3">
              <AiSystemMetricsCard />
            </div>
            <div className="border-1 border-gray-100 rounded-xl p-3">
              <AiSystemMetricsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
