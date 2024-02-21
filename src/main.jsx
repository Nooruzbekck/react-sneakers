import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./routes/routes";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./context/auth-context";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { injectStore } from "./api/axiosInstance";

injectStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <AppRoutes />
    </Provider>
  </AuthProvider>
);
