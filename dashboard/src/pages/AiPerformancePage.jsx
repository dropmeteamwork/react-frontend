import React from "react";
import StatusCard from "../components/StatusCard";
import AnalyticsCard from "../components/AnalyticsCard";
import AiSystemMetricsCard from "../components/AiSystemMetricsCard";

export default function AiPerformancePage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
      <div>
        <div className={`card bg-base-100 shadow-sm`}>
          <div className="card-body">
            <div className="pb-5">
              <h2 className="font-medium text-xl mb-2">AI System Metrics</h2>
              <p className="text-gray-500">
                Detailed AI performance statistics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <AiSystemMetricsCard />
              <AiSystemMetricsCard />
              <AiSystemMetricsCard />
              <AiSystemMetricsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
