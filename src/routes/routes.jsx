import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Orders } from "../pages/Orders";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const routes = createBrowserRouter([
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
              isAllowed={!isLoggedIn}
            />
          ),
        },
        {
          path: "favorites",
          element: (
            <ProtectedRoutes
              Component={<Favorites />}
              fallBackPath="/"
              isAllowed={!isLoggedIn}
            />
          ),
        },
        {
          path: "orders",
          element: (
            <ProtectedRoutes
              Component={<Orders />}
              fallBackPath="/"
              isAllowed={!isLoggedIn}
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
          isAllowed={isLoggedIn}
        />
      ),
    },
    {
      path: "register",
      element: (
        <ProtectedRoutes
          Component={<RegisterPage />}
          fallBackPath="/"
          isAllowed={isLoggedIn}
        />
      ),
    },
  ]);

  return <RouterProvider router={routes} />;
};
