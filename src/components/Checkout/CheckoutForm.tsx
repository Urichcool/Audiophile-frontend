import { Formik, Form } from "formik";
import { FC } from "react";
import BillingDetailsFields from "./BillingDetailsFields";
import ShippingInfoFields from "./ShippingInfoFields";
import PaymentDetailsFields from "./PaymentDetailsFields";
import EMoneyFields from "./EMoneyFields";
import CashInfo from "./CashInfo";
import { PersistFormikValues } from "formik-persist-values";
import Summary from "./Summary";
import {
  CheckOutValidationSchema,
  ICheckOutFormValues,
  initialValues,
} from "./CheckoutFormData";

const CheckOutForm: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ICheckOutFormValues) => {
        console.log(values);
      }}
      validationSchema={CheckOutValidationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(props) => (
        <Form className="checkout-form">
          <div className="checkout-container">
            <h5 className="checkout-container-title">Checkout</h5>
            <BillingDetailsFields values={props.values} errors={props.errors} />
            <ShippingInfoFields values={props.values} errors={props.errors} />
            <PaymentDetailsFields
              values={props.values}
              onChangeRadioValue={props.setFieldValue}
            />
            {props.values.radioValue === "eMoney" ? (
              <EMoneyFields values={props.values} errors={props.errors} />
            ) : (
              <CashInfo />
            )}
          </div>
          <Summary errors={props.errors} />
          <PersistFormikValues name="checkout-form" />
        </Form>
      )}
    </Formik>
  );
};

export default CheckOutForm;
