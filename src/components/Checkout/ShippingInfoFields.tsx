import { FC } from "react";
import { ICheckOutFormValues } from "./CheckoutForm";
import CheckOutField from "../Reusable-Components/CheckOutField";
import { FormikErrors } from "formik";

interface IBillingDetailsFieldsProps {
  values: ICheckOutFormValues;
  errors: FormikErrors<ICheckOutFormValues>;
}

const ShippingInfoFields: FC<IBillingDetailsFieldsProps> = ({values, errors}) => {
  return (
    <>
      <h4 className="Sub-title-manrope-bold checkout-page-fields-title">
        shipping info
      </h4>
      <div className="shipping-info-fields-container">
        <CheckOutField
          name={"adress"}
          id={"checkout-adress"}
          value={values.adress}
          label="Adress"
          error={errors.adress}
        />
        <CheckOutField
          name={"zip"}
          id={"checkout-zip"}
          value={values.zip}
          label="ZIP Code"
          error={errors.zip}
        />
        <CheckOutField
          name={"city"}
          id={"checkout-city"}
          value={values.city}
          label="City"
          error={errors.city}
        />
        <CheckOutField
          name={"country"}
          id={"checkout-country"}
          value={values.country}
          label="Country"
          error={errors.country}
        />
      </div>
    </>
  );
};

export default ShippingInfoFields;
