import React from "react";
import StatusCard from "../components/StatusCard";
import AnalyticsCard from "../components/AnalyticsCard";

export default function EnvironmentPage() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
    </div>
  );
}
