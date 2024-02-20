import { Field } from "formik";
import { FC } from "react";

interface ICheckOutFieldProps {
  value: string;
  id: string;
  name: string;
  label: string;
  testId?: string;
  error: string | undefined;
}

export const CheckOutField: FC<ICheckOutFieldProps> = ({
  value,
  id,
  name,
  label,
  testId,
  error,
}) => {
  return (
    <div className="checkout-field">
      {error ? <p className="checkout-field-error-message">{error}</p> : null}
      <label
        className={`${
          error ? "checkout-field-label--error" : "checkout-field-label"
        }`}
      >
        {label}
      </label>
      <Field
        id={id}
        className={`${
          error ? "checkout-field-input--error" : "checkout-field-input"
        }`}
        name={name}
        type="text"
        value={value}
        data-testid={testId}
      />
    </div>
  );
};

export default CheckOutField;
