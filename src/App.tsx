import  { FC } from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route element={<ProductIdPage/>} path="/:productId"/>
        <Route index element={<HomePage />} />
        <Route element={<HeadphonesPage/>} path="headphones" />
        <Route element={<SpeakersPage/>} path="speakers" />
       <Route element={<EarphonesPage />} path="earphones" />
       <Route element={<CheckoutPage/>} path="checkout"/> 
      </Route>
    </Routes>
  );
};

export default App;
