import React from "react";
import ReportCard from "../components/ReportCard";

export default function ReportPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </div>
    </>
  );
}
