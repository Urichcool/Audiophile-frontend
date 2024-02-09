import { Formik, Form } from "formik";
import { FC } from "react";
import BillingDetailsFields from "./BillingDetailsFields";
import ShippingInfoFields from "./ShippingInfoFields";

export interface ICheckOutFormValues {
  name: string;
  email: string;
  phone: string;
  adress: string;
  zipCode: string;
  city: string;
  country: string;
}

const CheckOutForm: FC = () => {
  const initialValues: ICheckOutFormValues = {
    name: "",
    email: "",
    phone: "",
    adress: "",
    zipCode: "",
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckOutForm;
