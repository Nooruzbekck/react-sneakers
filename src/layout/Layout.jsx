import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { CartModal } from "../components/cart/CartModal";

export const Layout = () => {
  return (
    <>
      <CartModal />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
