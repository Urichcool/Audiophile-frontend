import { FC } from "react";
import CheckOutField from "../Reusable-Components/CheckOutField";
import { ICheckOutFormValues } from "./CheckoutForm";

interface IEMoneyFieldsProps {
  values: ICheckOutFormValues;
}

const EMoneyFields: FC<IEMoneyFieldsProps> = ({ values }) => {
  return (
    <div className="e-money-fields-container">
      <CheckOutField
        name={"e-Money Number"}
        id={"checkout-e-Money Number"}
        value={values.eMoneyNumber}
        label="e-Money Number"
      />
      <CheckOutField
        name={"e-Money-PIN"}
        id={"checkout-e-Money-PIN"}
        value={values.eMoneyPin}
        label="e-Money PIN"
      />
    </div>
  );
};

export default EMoneyFields;
