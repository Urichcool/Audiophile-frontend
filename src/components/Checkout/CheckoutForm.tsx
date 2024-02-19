import { Formik, Form } from "formik";
import { FC } from "react";
import BillingDetailsFields from "./BillingDetailsFields";
import ShippingInfoFields from "./ShippingInfoFields";
import PaymentDetailsFields from "./PaymentDetailsFields";
import EMoneyFields from "./EMoneyFields";
import CashInfo from "./CashInfo";
import { PersistFormikValues } from "formik-persist-values";
import Summary from "./Summary";
import * as Yup from "yup";

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

  const CheckOutValidationSchema: Yup.ObjectSchema<
    {
      name: string | undefined;
      email: string | undefined;
      phone: string | undefined;
      adress: string | undefined;
      zip: string | undefined;
      city: string | undefined;
      country: string | undefined;
      radioValue: string | undefined;
      eMoneyNumber: string | undefined;
      eMoneyPin: string | undefined;
    },
    Yup.AnyObject,
    {
      name: string | undefined;
      email: string | undefined;
      phone: string | undefined;
      adress: string | undefined;
      zip: string | undefined;
      city: string | undefined;
      country: string | undefined;
      radioValue: string | undefined;
      eMoneyNumber: string | undefined;
      eMoneyPin: string | undefined;
    },
    ""
  > = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    adress: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    radioValue: Yup.string().required("Required"),
    eMoneyNumber: Yup.string().required("Required"),
    eMoneyPin: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ICheckOutFormValues) => {
        console.log(values);
      }}
validationSchema={CheckOutValidationSchema}
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
