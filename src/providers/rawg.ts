import axios from "axios";
const api = axios.create({
  baseURL: process.env.RAWG_API_URL,
  timeout: 3000,
});

api.interceptors.request.use(
  function (config) {
    if (config.params) {
      config.params.set("key", process.env.RAWG_API_KEY);
    } else {
      config.params = new URLSearchParams({
        key: process.env.RAWG_API_KEY || "",
      });
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
