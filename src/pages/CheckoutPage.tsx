import { FC, useEffect } from "react";
import GoBackButton from "../components/Reusable-Components/Buttons/GoBackButton";
import CheckOutForm from "../components/Checkout/CheckoutForm";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { selectCartProducts } from "../redux/slices/cart/selectors";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";

const CheckoutPage: FC = () => {
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
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
      if (cartProducts.length === 0) {
        navigate(-1);
      }
    }, [cartProducts.length, navigate]);
  return (
    <section className="checkout-page">
      <div className="container">
        <GoBackButton />
        <CheckOutForm/>
      </div>
    </section>
  );
};

export default CheckoutPage;
