import React, { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import MetricsCard from "../components/MetricsCard";
import AnalyticsCard from "../components/AnalyticsCard";
import AlertCard from "../components/AlertCard";
import axios from "axios";

export default function OverViewPage() {
  const icons = [
    {
      pathD:
        "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
      iconColor: "#7bab43",
    },
    {
      pathD:
        "M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z",
      iconColor: "#FF6411",
    },
    {
      pathD:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
      iconColor: "#0065A3",
    },
  ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dropme.up.railway.app/dashboard/metrics/overview/"
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
      {/* total status card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <StatusCard
          title="Total Users"
          number={data.total_users}
          pathD={icons[0].pathD}
          iconColor={icons[0].iconColor}
          // Dummy data for additional metrics
          changeFromLastWeek="+12.5% from last week"
        />
        <StatusCard
          title="Active Partners"
          number={data.active_partners}
          pathD={icons[1].pathD}
          iconColor={icons[1].iconColor}
          // Dummy data for additional metrics
          changeFromLastWeek="+8.2% from last week"
        />
        <StatusCard
          title="Total Revenue"
          number={data.total_revenue}
          pathD={icons[2].pathD}
          iconColor={icons[2].iconColor}
          // Dummy data for additional metrics
          changeFromLastWeek="+5.1% from last week"
        />
      </div>

      {/* User Engagement Card */}
      <div className="mt-6 mb-6 grid grid-cols-1 gap-4">
        <MetricsCard
          title="User Engagement"
          subTitle="Daily active users and engagement metrics"
          activeUser={data.active_users}
          avgPoint={data.average_points_per_user}
          totalPoints={data.total_points}
        />
      </div>

      {/* <div className="mt-6 mb-6 grid grid-cols-1 gap-4">
        <AnalyticsCard
          title="Material Distribution"
          subTitle="Breakdown by material type"
        />
      </div> */}

      <div className="mt-6 card bg-base-100 shadow-sm ">
        <div className="card-body">
          <div className="pb-2">
            <h2 className="font-medium text-xl mb-2">Recent Alerts</h2>
            <p className="text-gray-500">
              Latest system notifications and alerts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <AlertCard machine="Cairo - Maadi" condition="medium"/>
            <AlertCard machine="Cairo - 10th Of Ramdan" condition="low"/>
          </div>
        </div>
      </div>
    </div>
  );
}
