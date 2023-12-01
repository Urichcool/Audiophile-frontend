import  { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage";
import HeadphonesPage from "./pages/HeadphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonesPage from "./pages/EarphonesPage";
import ProductIdPage from "./pages/ProductIdPage";

const App: FC = () => {
 return (
    <Routes>
     <Route element={<Layout />} path="/">
        <Route element={<ProductIdPage/>} path="/:productId"></Route>
        <Route index element={<Home />} />
        <Route element={<HeadphonesPage/>} path="headphones" />
        <Route element={<SpeakersPage/>} path="speakers" />
        <Route element={<EarphonesPage/>} path="earphones" />
      </Route>
    </Routes>
  );
};

export default App;
