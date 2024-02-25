import { FC } from "react";
import CheckOutField from "../Reusable-Components/CheckOutField";
import { ICheckOutFormValues } from "./CheckoutForm";
import { FormikErrors } from "formik";

interface IEMoneyFieldsProps {
  values: ICheckOutFormValues;
  errors: FormikErrors<ICheckOutFormValues>;
}

const EMoneyFields: FC<IEMoneyFieldsProps> = ({ values, errors }) => {
  return (
    <div className="e-money-fields-container">
      <CheckOutField
        name={"eMoneyNumber"}
        id={"checkout-e-Money-Number"}
        value={values.eMoneyNumber}
        label="e-Money Number *"
        error={errors.eMoneyNumber}
      />
      <CheckOutField
        name={"eMoneyPin"}
        id={"checkout-e-Money-PIN"}
        value={values.eMoneyPin}
        label="e-Money PIN *"
        error={errors.eMoneyPin}
      />
    </div>
  );
};

export default EMoneyFields;
