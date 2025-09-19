import React, { useEffect, useState } from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import AiSystemMetricsCard from "../components/AiSystemMetricsCard";
import api from "../services/api";
import UserEngagementChart from "../components/Charts/UserEngagementChart";
import RecyclingTrendsChart from "../components/Charts/RecyclingTrendsChart";

export default function AnalyticsPage({ className }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("analytics/analytics-data/");
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
        <p className="text-lg font-medium">Error: {error} </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <AnalyticsCard
          title="User Engagement Trends"
          subTitle="Daily active users and session metrics"
        >
          {/* Display the chart component here */}
          {data && data.UserEngagement_Trends_section ? (
            <UserEngagementChart
              engagementData={data.UserEngagement_Trends_section}
            />
          ) : (
            <p>No user engagement data available.</p>
          )}
        </AnalyticsCard>
        <AnalyticsCard
          title="Recycling Trends"
          subTitle="Monthly recycling volume over time"
        >
          {data && data.Recycling_Trends_section ? (
            <RecyclingTrendsChart
              recyclingData={data.Recycling_Trends_section}
            />
          ) : (
            <p>No recycling data available.</p>
          )}
        </AnalyticsCard>
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
            <div className="border-1 border-gray-100 rounded-xl p-4">
              <AiSystemMetricsCard
                title={data.Comprehensive_Analytics_section.daily_active_users}
                subTitle="Daily Active Users"
              >
                <div className="flex items-center justify-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#155dfc"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </AiSystemMetricsCard>
            </div>
            <div className="border-1 border-gray-100 rounded-xl p-4">
              <AiSystemMetricsCard
                title={
                  data.Comprehensive_Analytics_section.avg_session_duration
                }
                subTitle="Avg Session Duration"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#00a63e"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </AiSystemMetricsCard>
            </div>
            <div className="border-1 border-gray-100 rounded-xl p-4">
              <AiSystemMetricsCard
                title={
                  data.Comprehensive_Analytics_section.average_points_per_user
                }
                subTitle="Avg Points Per User"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#9810fa"
                    className="size-6"
                  >
                    <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
                  </svg>
                </div>
              </AiSystemMetricsCard>
            </div>
            <div className="border-1 border-gray-100 rounded-xl p-4">
              <AiSystemMetricsCard
                title={data.Comprehensive_Analytics_section.engagement_score}
                subTitle="Engagement Score"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#e7000b"
                    className="size-6"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                </div>
              </AiSystemMetricsCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
