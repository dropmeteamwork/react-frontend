import React, { useEffect, useState } from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import UserCard from "../components/UserCard";
import axios from "axios";
import UserRetentionChart from "../components/Charts/UserRetentionChart";
import api from "../services/api";

export default function UserPage({ className }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
    const [months, setMonths] = useState(6);
  

  // useEffect(() => {
  //   const fetchWithRetry = async () => {
  //     const accessToken = localStorage.getItem("access_token");
  //     const refreshToken = localStorage.getItem("refresh_token");

  //     if (!accessToken || !refreshToken) {
  //       setError("Please log in again. Tokens are missing.");
  //       setLoading(false);
  //       return;
  //     }

  //     const getApiData = async (token) => {
  //       return await axios.get(
  //         "https://web-testing-3a06.up.railway.app/dashboard/v2/analytics/user-data/",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //     };

  //     const refreshTokens = async () => {
  //       try {
  //         const response = await axios.post(
  //           "https://web-testing-3a06.up.railway.app/dashboard/v2/auth/token/refresh/",
  //           {
  //             refresh: refreshToken,
  //           }
  //         );
  //         const newAccessToken = response.data.access;
  //         localStorage.setItem("access_token", newAccessToken);
  //         return newAccessToken;
  //       } catch (refreshErr) {
  //         console.error("Failed to refresh token:", refreshErr);
  //         setError("Session expired. Please log in again.");
  //         localStorage.removeItem("access_token");
  //         localStorage.removeItem("refresh_token");
  //         throw refreshErr;
  //       }
  //     };

  //     try {
  //       const response = await getApiData(accessToken);
  //       console.log(response.data);

  //       setData(response.data);
  //     } catch (err) {
  //       if (axios.isAxiosError(err) && err.response?.status === 401) {
  //         try {
  //           const newAccessToken = await refreshTokens();
  //           const retryResponse = await getApiData(newAccessToken);
  //           setData(retryResponse.data);
  //         } catch (retryErr) {
  //           setLoading(false);
  //           return;
  //         }
  //       } else {
  //         setError(
  //           err.response?.data?.detail ||
  //             err.message ||
  //             "A network or server error occurred."
  //         );
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchWithRetry();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`analytics/user-data/?weeks=${months}`);
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
  }, [months]);

  // Effect to filter users whenever the search term or data changes
  useEffect(() => {
    if (data) {
      const filtered = data.user_details.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, data]);

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
      <div className={`${className} card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="pb-5 flex flex-col md:flex-row gap-4 md:justify-between">
            <div>
              <h2 className="font-semibold text-xl mb-2">User Database</h2>
              <p className="text-gray-500">Manage and monitor user accounts</p>
            </div>
            <div className="max-w-[260px] self-end ">
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
                <input
                  type="search"
                  className="grow"
                  placeholder="Search by username"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 ">
            {/* Display filtered users instead of all users */}
            {filteredUsers.length > 0 ? (
              filteredUsers.map((data, index) => (
                <UserCard
                  key={index}
                  userName={data.username}
                  userEmail={data.email}
                  userNumber={data.phone}
                  active={data.active}
                  userAge={data.age}
                  userPoints={data.total_points}
                  referral={data.referrals}
                  totalItems={data.total_items}
                  joined={data.joined}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No users found.</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 items-start lg:grid-cols-2 gap-4">
        <AnalyticsCard
          title="User Retention Trends"
          subTitle="Weekly retention rate over time"
        >
           <div className="flex gap-4 mb-4">
            <button
              onClick={() => setMonths(6)}
              className={`px-3 py-1 cursor-pointer rounded ${
                months === 6 ? "bg-primary-color  text-white" : "bg-gray-200"
              }`}
            >
              Last 6 Months
            </button>
            <button
              onClick={() => setMonths(12)}
              className={`px-3 py-1 cursor-pointer rounded ${
                months === 12 ? "bg-primary-color  text-white" : "bg-gray-200"
              }`}
            >
              Last 12 Months
            </button>
          </div>
          {data.user_retension_data ? (
            <UserRetentionChart
              user_retension_data={data.user_retension_data}
            />
          ) : (
            <p>No data saved</p>
          )}{" "}
        </AnalyticsCard>
      </div>
    </div>
  );
}
