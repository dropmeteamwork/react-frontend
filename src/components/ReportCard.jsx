import React from "react";
import SvgIcon from "./SvgIcon";

export default function ReportCard({ className }) {
  return (
    <div className={`${className} card bg-base-100 shadow-sm`}>
      <div className="card-body">
        <div className="mb-4">
          <div className="pb-2 flex gap-2 items-center">
            <SvgIcon
              pathD="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              className="size-5"
            />
            <h2 className="font-medium text-lg">Weekly Reports</h2>
          </div>
          <p className="text-gray-500">
            Monitor and manage recycling machines{" "}
          </p>
        </div>
        <button className="btn bg-primary-color text-white font-medium text-base">Generate Weekly Report</button>
      </div>
    </div>
  );
}
