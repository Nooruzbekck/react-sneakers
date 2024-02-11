import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/HomePage";
import { FavoritePage } from "../pages/FavoritePage";
import { OrdersPage } from "../pages/OrdersPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "favorites",
        element: <FavoritePage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
    ],
  },
]);
