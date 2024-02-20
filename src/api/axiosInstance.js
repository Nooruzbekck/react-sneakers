import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    Accept: "Content-Type",
  },
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});
