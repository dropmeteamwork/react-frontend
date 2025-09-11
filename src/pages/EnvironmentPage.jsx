import React, { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import AnalyticsCard from "../components/AnalyticsCard";
import axios from "axios";
import EnvironmentalImpactChart from "../components/Charts/EnvironmentalImpactChart";

export default function EnvironmentPage() {
  const icons = [
    {
      pathD:
        "M12 2C8.134 2 4 6.134 4 10c0 3.866 3.582 7 8 7s8-3.134 8-7c0-3.866-3.582-7-8-7zM6 10c0-2.577 2.686-5 6-5s6 2.423 6 5c0 2.577-2.686 5-6 5s-6-2.423-6-5z",
      iconColor: "#7bab43",
    },
    {
      pathD:
        "M12 2C12 2 4 9.5 4 14.5C4 18.1 7.1 21 11 21C14.9 21 18 18.1 18 14.5C18 9.5 12 2 12 2Z",
      iconColor: "#0ECCF6",
    },
    {
      pathD:
        "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z",
      iconColor: "purple",
    },
    {
      pathD:
        "M6.2 9.7 4.3 6.6l-.3.3a.996.996 0 1 1-1.4-1.4l1.8-1.8c.4-.4 1-.4 1.4 0l1.8 1.8a.996.996 0 1 1-1.4 1.4l-.3-.3 1.9 3.1c.3.5.1 1.1-.4 1.4s-1.1.1-1.4-.4zm11.3 3.6 1.9 3.1.3-.3a.996.996 0 1 1 1.4 1.4l-1.8 1.8c-.4.4-1 .4-1.4 0l-1.8-1.8a.996.996 0 1 1 1.4-1.4l.3.3-1.9-3.1c-.3-.5-.1-1.1.4-1.4s1.1-.1 1.4.4zM8.3 18h3.9v-1h-3.9l.7-.7a.996.996 0 1 0-1.4-1.4L5.8 18l1.8 1.8a.996.996 0 1 0 1.4-1.4l-.7-.7zm6.1-12h-3.9v1h3.9l-.7.7a.996.996 0 1 0 1.4 1.4l2.8-2.8-1.8-1.8a.996.996 0 1 0-1.4 1.4l.7.7z",
      iconColor: "#FF6411",
    },
  ];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWithRetry = async () => {
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");

      if (!accessToken || !refreshToken) {
        setError("Please log in again. Tokens are missing.");
        setLoading(false);
        return;
      }

      const getApiData = async (token) => {
        return await axios.get(
          "https://web-testing-3a06.up.railway.app/dashboard/v2/metrics/environmental/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      };

      const refreshTokens = async () => {
        try {
          const response = await axios.post(
            "https://web-testing-3a06.up.railway.app/dashboard/v2/auth/token/refresh/",
            {
              refresh: refreshToken,
            }
          );
          const newAccessToken = response.data.access;
          localStorage.setItem("access_token", newAccessToken);
          return newAccessToken;
        } catch (refreshErr) {
          console.error("Failed to refresh token:", refreshErr);
          setError("Session expired. Please log in again.");
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          throw refreshErr;
        }
      };

      try {
        const response = await getApiData(accessToken);
        console.log(response.data);

        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 401) {
          try {
            const newAccessToken = await refreshTokens();
            const retryResponse = await getApiData(newAccessToken);
            setData(retryResponse.data);
          } catch (retryErr) {
            setLoading(false);
            return;
          }
        } else {
          setError(
            err.response?.data?.detail ||
              err.message ||
              "A network or server error occurred."
          );
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWithRetry();
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
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <StatusCard
          title="CO2 Emissions Saved"
          number={`${data.env_info.co2_emissions_saved.toFixed(2)} Kg`}
          subTitle="Network-wide impact"
          pathD={icons[0].pathD}
          iconColor={icons[0].iconColor}
        />
        <StatusCard
          title="Water Conserved"
          number={`${data.env_info.water_conserved.toFixed(2)} L`}
          subTitle="Total water saved"
          pathD={icons[1].pathD}
          iconColor={icons[1].iconColor}
        />
        <StatusCard
          title="Energy Saved"
          number={`${data.env_info.energy_saved.toFixed(2)} kWh`}
          subTitle="Energy conservation"
          pathD={icons[2].pathD}
          iconColor={icons[2].iconColor}
        />
        <StatusCard
          title="Items Recycled"
          number={data.env_info.total_recycled_items}
          subTitle="Total items processed"
          pathD={icons[3].pathD}
          iconColor={icons[3].iconColor}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 items-start lg:grid-cols-2 gap-4">
        <AnalyticsCard
          title="Environmental Impact Trends"
          subTitle="Monthly environmental impact metrics"
        >
          {data.monthly_env_impact ? (
            <EnvironmentalImpactChart
              monthly_env_impact={data.monthly_env_impact}
            />
          ) : (
            <p>No monthly data available</p>
          )}
        </AnalyticsCard>
        <AnalyticsCard
          title="Carbon Footprint Redcution"
          subTitle="Equivalent environmental benefits"
        >
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Tree Equivalent </p>
            <span className="text-lg text-primary-color font-semibold">
              {data.env_info.trees_equivalent}
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-base">Carbon Footprint Reduction </p>
            <span className="text-lg text-orange-500 font-semibold">
              {data.env_info.carbon_footprint_reduction_percentage} %
            </span>
          </div>
        </AnalyticsCard>
      </div>
    </div>
  );
}
