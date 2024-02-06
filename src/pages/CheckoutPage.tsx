import { FC } from "react";
import GoBackButton from "../components/Reusable-Components/Buttons/GoBackButton";
import CheckOutForm from "../components/Checkout/CheckoutForm";

const CheckoutPage: FC = () => {
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
