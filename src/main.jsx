import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./routes/routes";
import { CartProvider } from "./context/cart-context";
import { FavoriteProvider } from "./context/favorites-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoriteProvider>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </FavoriteProvider>
  </React.StrictMode>
);
