import axios from "axios";

const api = axios.create({
  baseURL: "https://web-testing-3a06.up.railway.app/dashboard/v2/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) {
        window.location.href = "/"; 
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(
          "https://web-testing-3a06.up.railway.app/dashboard/v2/auth/refresh/",
          { refresh: refreshToken }
        );

        const newAccess = res.data.access;
        localStorage.setItem("access_token", newAccess);

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
