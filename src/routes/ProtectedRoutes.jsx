import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ Component, fallBackPath, isAllowed }) => {
  if (!!isAllowed) {
    return <Navigate to={fallBackPath} replace />;
  }
  return Component;
};
