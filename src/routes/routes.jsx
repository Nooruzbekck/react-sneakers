import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Orders } from "../pages/Orders";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

const localUserData = localStorage.getItem("auth") || "";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoutes
            Component={<Home />}
            fallBackPath="/login"
            isAllowed={!localUserData}
          />
        ),
      },
      {
        path: "favorites",
        element: (
          <ProtectedRoutes
            Component={<Favorites />}
            fallBackPath="/"
            isAllowed={!localUserData}
          />
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoutes
            Component={<Orders />}
            fallBackPath="/"
            isAllowed={!localUserData}
          />
        ),
      },
    ],
  },

  {
    path: "login",
    element: (
      <ProtectedRoutes
        Component={<LoginPage />}
        fallBackPath="/"
        isAllowed={localUserData}
      />
    ),
  },
  {
    path: "register",
    element: (
      <ProtectedRoutes
        Component={<RegisterPage />}
        fallBackPath="/"
        isAllowed={localUserData}
      />
    ),
  },
]);
