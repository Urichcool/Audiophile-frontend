import { FC } from "react";
import { ICheckOutFormValues } from "./CheckoutForm";
import CheckOutField from "../Reusable-Components/CheckOutField";

interface IBillingDetailsFieldsProps {
  values: ICheckOutFormValues;
}

const ShippingInfoFields: FC<IBillingDetailsFieldsProps> = ({values}) => {
  return (
    <>
      <h6 className="Sub-title-manrope-bold checkout-page-fields-title">
        shipping info
      </h6>
      <div className="shipping-info-fields-container">
        <CheckOutField
          name={"adress"}
          id={"checkout-adress"}
          value={values.adress}
          label="Adress"
        />
        <CheckOutField
          name={"zip-code"}
          id={"checkout-zip-code"}
          value={values.zipCode}
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
