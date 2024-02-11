import { Formik, Form } from "formik";
import { FC } from "react";
import BillingDetailsFields from "./BillingDetailsFields";
import ShippingInfoFields from "./ShippingInfoFields";
import PaymentDetailsFields from "./PaymentDetailsFields";

export interface ICheckOutFormValues {
  name: string;
  email: string;
  phone: string;
  adress: string;
  zip: string;
  city: string;
  country: string;
}

const CheckOutForm: FC = () => {
  const initialValues: ICheckOutFormValues = {
    name: "",
    email: "",
    phone: "",
    adress: "",
    zip: "",
    city: "",
    country: "",
  };
  return (
    <div className="checkout-container">
      <h5 className="checkout-container-title">Checkout</h5>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          console.log(initialValues);
        }}
      >
        {(props) => (
          <Form>
            <BillingDetailsFields values={props.values} />
            <ShippingInfoFields values={props.values} />
            <PaymentDetailsFields/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckOutForm;
