import { FC } from "react";
import GoBackButton from "../components/Reusable-Components/Buttons/GoBackButton";
import CheckOutContainer from "../components/Checkout/CheckoutContainer";

const CheckoutPage: FC = () => {
  return (
    <section className="checkout-page">
      <div className="container">
        <GoBackButton />
        <CheckOutContainer/>
      </div>
    </section>
  );
};

export default CheckoutPage;
