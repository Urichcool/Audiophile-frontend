import { Formik, Form } from "formik";
import { FC } from "react";
import BillingDetailsFields from "./BillingDetailsFields";
import ShippingInfoFields from "./ShippingInfoFields";
import PaymentDetailsFields from "./PaymentDetailsFields";
import EMoneyFields from "./EMoneyFields";
import CashInfo from "./CashInfo";
import { PersistFormikValues } from "formik-persist-values";
import Summary from "./Summary";

export interface ICheckOutFormValues {
  name: string;
  email: string;
  phone: string;
  adress: string;
  zip: string;
  city: string;
  country: string;
  radioValue: string;
  eMoneyNumber: string;
  eMoneyPin: string;
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
    radioValue: "eMoney",
    eMoneyNumber: "",
    eMoneyPin: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        console.log(initialValues);
      }}
    >
      {(props) => (
        <Form className="checkout-form">
          <div className="checkout-container">
            <h5 className="checkout-container-title">Checkout</h5>
            <BillingDetailsFields values={props.values} />
            <ShippingInfoFields values={props.values} />
            <PaymentDetailsFields
              values={props.values}
              onChangeRadioValue={props.setFieldValue}
            />
            {props.values.radioValue === "eMoney" ? (
              <EMoneyFields values={props.values} />
            ) : (
              <CashInfo />
            )}
          </div>
          <Summary />
          <PersistFormikValues name="checkout-form" />
        </Form>
      )}
    </Formik>
  );
};

export default CheckOutForm;
