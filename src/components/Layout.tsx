import { Outlet } from "react-router-dom";
import Header from "./Hero-Header/Header";
import { FC } from "react";

const Layout:FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            
        </>
    );
}

export default Layout;