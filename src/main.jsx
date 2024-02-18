import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./routes/routes";
import { CartProvider } from "./context/cart-context";
import { FavoriteProvider } from "./context/favorites-context";
import { AuthProvider } from "./context/auth-context";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FavoriteProvider>
        <CartProvider>
          <Provider store={store}>
            <RouterProvider router={routes} />
          </Provider>
        </CartProvider>
      </FavoriteProvider>
    </AuthProvider>
  </React.StrictMode>
);
