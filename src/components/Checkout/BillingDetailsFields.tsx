import { FC } from "react";
import { ICheckOutFormValues } from "./CheckoutFormData";
import CheckOutField from "../Reusable-Components/CheckOutField";
import { FormikErrors } from "formik";

interface IBillingDetailsFieldsProps {
  values: ICheckOutFormValues;
  errors: FormikErrors<ICheckOutFormValues>;
}

const BillingDetailsFields: FC<IBillingDetailsFieldsProps> = ({
  values,
  errors,
}) => {
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
          label="Name *"
          error={errors.name}
        />
        <CheckOutField
          name={"email"}
          id={"checkout-email"}
          value={values.email}
          label="Email Address *"
          error={errors.email}
        />
        <CheckOutField
          name={"phone"}
          id={"checkout-phone"}
          value={values.phone}
          label="Phone Number *"
          error={errors.phone}
        />
      </div>
    </>
  );
};

export default BillingDetailsFields;
