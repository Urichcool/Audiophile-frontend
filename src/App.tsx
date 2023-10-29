import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<Home />} />
        <Route element={<div>headphones</div>} path="headphones" />
        <Route element={<div>speakers</div>} path="speakers" />
        <Route element={<div>earphones</div>} path="earphones" />
      </Route>
    </Routes>
  );
};

export default App;
