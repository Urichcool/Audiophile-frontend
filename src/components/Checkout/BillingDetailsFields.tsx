import { FormikProps } from "formik";
import { FC } from "react";
import { ICheckOutFormValues } from "./CheckoutForm";
import CheckOutField from "../Reusable-Components/CheckOutField";

interface IBillingDetailsFieldsProps {
  values: ICheckOutFormValues;
}

const BillingDetailsFields: FC<IBillingDetailsFieldsProps> = ({ values }) => {
  return (
    <>
      <h6 className="Sub-title-manrope-bold checkout-page-fields-title">
        Billing details
      </h6>
      <div className="billing-details-fields-container">
        <CheckOutField
          name={"name"}
          id={"checkout-name"}
          value={values.name}
          label="Name"
        />
        <CheckOutField
          name={"email"}
          id={"checkout-email"}
          value={values.email}
          label="Email Address"
        />
        <CheckOutField
          name={"phone"}
          id={"checkout-phone"}
          value={values.phone}
          label="Phone Number"
        />
      </div>
    </>
  );
};

export default BillingDetailsFields;
