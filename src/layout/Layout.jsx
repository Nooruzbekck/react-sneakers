import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
