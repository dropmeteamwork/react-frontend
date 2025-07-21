import React from "react";
import MachineCard from "../components/MachineCard";

export default function MachinePage({className}) {
  return (
    <>
    <div className={`${className} card bg-base-100 shadow-sm `}>
      <div className="card-body">
        <div className="pb-5">
          <h2 className="font-semibold text-xl mb-2">Machine Status </h2>
          <p className="text-gray-500">
            Monitor and manage recycling machines{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <MachineCard />
          <MachineCard />
          <MachineCard />
        </div>
      </div>
    </div>
    </>
  );
}
