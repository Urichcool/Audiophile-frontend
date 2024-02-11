import { Field } from "formik";
import { FC } from "react";

interface ICheckOutFieldProps {
  value: string;
  id: string;
  name: string;
  label:string
  testId?: string;
}

export const CheckOutField: FC<ICheckOutFieldProps> = ({
  value,
  id,
  name,
  label,
  testId,
}) => {
  return (
    <div className="checkout-field">
      <label className="checkout-field-label">{label}</label>
      <Field
        id={id}
        className="checkout-field-input"
        name={name}
        type="text"
        value={value}
        data-testid={testId}
      />
    </div>
  );
};

export default CheckOutField;
