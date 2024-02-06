import { FormikProps } from "formik";
import { FC } from "react";
import { ICheckOutFormValues } from "./CheckoutForm";
import CheckOutField from "../Reusable-Components/CheckOutField";

interface IBillingDetailsFieldsProps {
  values: ICheckOutFormValues;
}

const BillingDetailsFields: FC<IBillingDetailsFieldsProps> = ({values}) => {
    return (
      <>
        <h6 className="Sub-title-manrope-bold checkout-page-fields-title">
          Billing details
        </h6>
            <CheckOutField name={"name"} id={"checkout-name"} value={values.name} label="Name" />
      </>
    );
};

export default BillingDetailsFields;
