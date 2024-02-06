import { Field, Formik, Form } from "formik";
import { FC } from "react";
import BillingDetailsFields from "./BillingDetailsFields";

export interface ICheckOutFormValues {
  name: string;
  email: string;
  phone: string;
}

const CheckOutForm: FC = () => {
  const initialValues: ICheckOutFormValues = { name: "", email: "", phone: "" };
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckOutForm;
