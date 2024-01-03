import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const accessToken = localStorage.getItem("access_token");
    if (apiKey) {
      config.headers["X-Api-Key"] = apiKey;
    }
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
