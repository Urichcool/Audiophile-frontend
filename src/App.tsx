import { FC } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import HeadphonesPage from "./pages/HeadphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonesPage from "./pages/EarphonesPage";
import ProductIdPage from "./pages/ProductIdPage";
import CheckoutPage from "./pages/CheckoutPage";
import { useAppSelector } from "./redux/reduxHooks/reduxHooks";
import { selectCartProducts } from "./redux/slices/cart/selectors";

const App: FC = () => {
  const cartProducts:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        picture: string;
        totalPrice: number;
      }[]
    | [] = useAppSelector(selectCartProducts);
  
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route element={<ProductIdPage />} path="/:productId" />
        <Route index element={<HomePage />} />
        <Route element={<HeadphonesPage />} path="headphones" />
        <Route element={<SpeakersPage />} path="speakers" />
        <Route element={<EarphonesPage />} path="earphones" />
        <Route
          element={
            cartProducts.length !== 0 ? (
              <CheckoutPage />
            ) : (
                <Navigate replace to={'/'} />
            )
          }
          path="checkout"
        />
      </Route>
    </Routes>
  );
};

export default App;
