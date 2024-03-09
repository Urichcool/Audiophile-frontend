import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import HeadphonesPage from "./pages/HeadphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonesPage from "./pages/EarphonesPage";
import ProductIdPage from "./pages/ProductIdPage";
import CheckoutPage from "./pages/CheckoutPage";

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<HomePage />} />
        <Route element={<HeadphonesPage />} path="headphones" />
        <Route element={<ProductIdPage />} path="headphones/:productId" />
        <Route element={<SpeakersPage />} path="speakers" />
        <Route element={<ProductIdPage />} path="speakers/:productId" />
        <Route element={<EarphonesPage />} path="earphones" />
        <Route element={<ProductIdPage />} path="earphones/:productId" />
        <Route element={<CheckoutPage />} path="checkout" />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
