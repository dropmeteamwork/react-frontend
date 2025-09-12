import React, { useEffect, useState } from "react";
import MachineCard from "../components/MachineCard";
import axios from "axios";
import api from "../services/api";

export default function MachinePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("metrics/machines/");
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        setError(
          err.response?.data?.detail ||
            err.message ||
            "A network or server error occurred."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        <p className="text-lg font-medium">Error: {error.message} </p>
      </div>
    );
  }

  return (
    <>
      <div className={`card bg-base-100 shadow-sm `}>
        <div className="card-body">
          <div className="pb-5">
            <h2 className="font-semibold text-xl mb-2">Machine Status </h2>
            <p className="text-gray-500">
              Monitor and manage recycling machines
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
            {data.map((data, index) => (
              <MachineCard
                key={index}
                name={data.name}
                location={data.location_url}
                totalCollected={data.total_collected}
                dailyAvg={data.daily_average}
                efficiency={data.efficiency}
                status={data.status}
                bottlesCapacity={data.bottles_capacity}
                cansCapacity={data.cans_capacity}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
