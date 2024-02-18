import { createContext } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export const authContext = createContext({});

export const AuthProvider = ({ children }) => {
  const postUserRequest = async (userData) => {
    try {
      const { data } = await axiosInstance.post("register", userData);

      if (data.token) {
        localStorage.setItem("auth", data.token);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const postLoginUserRequest = async (userData) => {
    try {
      const { data } = await axiosInstance.post("auth", userData);
      console.log(data, "login");
      if (data.token) {
        localStorage.setItem("auth", data.token);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <authContext.Provider value={{ postUserRequest, postLoginUserRequest }}>
      {children}
    </authContext.Provider>
  );
};
