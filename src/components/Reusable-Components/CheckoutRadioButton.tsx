import { Field, FormikErrors } from "formik";
import { FC } from "react";
import { ICheckOutFormValues } from "../Checkout/CheckoutForm";

interface ICheckoutRadioButton {
  radioId: string;
  radioValue: string;
  value: string;
  radioName: string;
  onChangeRadioValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<ICheckOutFormValues>>;
}

const CheckoutRadioButton: FC<ICheckoutRadioButton> = ({
  radioId,
  radioValue,
  onChangeRadioValue,
  radioName,
  value,
}) => {
    return (
      <label
        className={`${
          radioValue === value
            ? "checkout-radio-button-label-checked"
            : "checkout-radio-button-label"
        }`}
        htmlFor={radioId}
      >
        <Field
          className="checkout-radio-button"
          type="radio"
          id={radioId}
          value={value}
          checked={radioValue === value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeRadioValue("radioValue", (value = e.target.value));
          }}
        />
        {radioName}
      </label>
    );
};

export default CheckoutRadioButton;
