import React, { useEffect, useState } from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import UserCard from "../components/UserCard";
import axios from "axios";

export default function UserPage({ className }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dropme.up.railway.app/dashboard/top-users/"
        );
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        setError(err);
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
    <div className="">
      <div className={`${className} card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="pb-5 flex justify-between">
            <div>
              <h2 className="font-semibold text-xl mb-2">User Database</h2>
              <p className="text-gray-500">Manage and monitor user accounts</p>
            </div>
            <div className="w-[260px]">
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 ">
            {data.map((data, index) => (
              <UserCard
                key={index}
                userName={data.username}
                userEmail={data.email}
                userNumber={data.phone_number}
                active={data.is_active}
                userAge={data.age}
                userPoints={data.points}
                referral={data.referral_usage_count}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
