import { FC, useEffect } from "react";
import GoBackButton from "../components/Reusable-Components/Buttons/GoBackButton";
import CheckOutForm from "../components/Checkout/CheckoutForm";
import CheckOutModal from "../components/Checkout/CheckOutModal";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { selectCartProducts } from "../redux/slices/cart/selectors";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (cartProducts.length === 0) {
        navigate(-1);
      }
    }, 200);
  }, [cartProducts.length, navigate]);

  return (
    <section className="checkout-page">
      <div className="container">
        <GoBackButton />
        <CheckOutForm />
        <CheckOutModal />
      </div>
    </section>
  );
};

export default CheckoutPage;
