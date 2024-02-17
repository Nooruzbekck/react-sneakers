import { createContext } from "react";
import { axiosInstance } from "../api/axiosInstance";

export const authContext = createContext({});

export const AuthProvider = ({ children }) => {
  const postUserRequest = async (data) => {
    try {
      const { data } = await axiosInstance.post("register");
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <authContext.Provider value={{ postUserRequest }}>
      {children}
    </authContext.Provider>
  );
};
