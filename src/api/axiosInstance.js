import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

let customStore;

export const injectStore = (store) => {
  customStore = store;
};

axiosInstance.interceptors.request.use(
  (config) => {
    const updateConfig = { ...config };

    const { token } = customStore.getState().auth;
    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }

    return updateConfig;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },

  (error) => {
    return Promise.reject(error);
  }
);
