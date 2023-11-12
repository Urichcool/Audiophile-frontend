import { Outlet } from "react-router-dom";
import Header from "./Hero-Header/Header";
import { FC } from "react";
import Footer from "./Footer/Footer";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
