import { FC } from "react";
import { ICheckOutFormValues } from "./CheckoutForm";
import CheckOutField from "../Reusable-Components/CheckOutField";

interface IBillingDetailsFieldsProps {
  values: ICheckOutFormValues;
}

const ShippingInfoFields: FC<IBillingDetailsFieldsProps> = ({values}) => {
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
        />
        <CheckOutField
          name={"zip"}
          id={"checkout-zip"}
          value={values.zip}
          label="ZIP Code"
        />
        <CheckOutField
          name={"city"}
          id={"checkout-city"}
          value={values.city}
          label="City"
        />
        <CheckOutField
          name={"country"}
          id={"checkout-country"}
          value={values.country}
          label="Country"
        />
      </div>
    </>
  );
};

export default ShippingInfoFields;
