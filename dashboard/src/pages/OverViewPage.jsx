import React from "react";
import StatusCard from "../components/StatusCard";
import MetricsCard from "../components/MetricsCard";
import AnalyticsCard from "../components/AnalyticsCard";
import AlertCard from "../components/AlertCard";

export default function OverViewPage() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </div>
      <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricsCard className />
        <MetricsCard className />
        <MetricsCard className="md:col-span-2 lg:col-span-1" />
      </div>
      <div className="mt-6 mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
      <div className="mt-6 card bg-base-100 shadow-sm ">
        <div className="card-body">
          <div className="pb-2">
            <h2 className="font-medium text-xl mb-2">Recent Alerts</h2>
            <p className="text-gray-500">
              Latest system notifications and alerts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <AlertCard />
            <AlertCard />
            <AlertCard />
          </div>
        </div>
      </div>
    </div>
  );
}
