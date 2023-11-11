import  { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

const App: FC = () => {
//  useEffect(() => {
//    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//  }, []);


  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<Home />} />
        <Route element={<div></div>} path="headphones" />
        <Route element={<div></div>} path="speakers" />
        <Route element={<div></div>} path="earphones" />
      </Route>
    </Routes>
  );
};

export default App;
