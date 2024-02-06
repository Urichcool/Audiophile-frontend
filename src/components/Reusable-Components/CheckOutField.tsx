import { Field } from "formik";
import { FC } from "react";

interface ICheckOutFieldProps {
  value: string;
  id: string;
  name: string;
  testId?: string;
}

export const CheckOutField: FC<ICheckOutFieldProps> = ({
  value,
  id,
  name,
  testId,
}) => {
  return (
    <>
      <label>
        {name}
        <Field
          id={id}
          name={name}
          type="text"
          value={value}
          data-testid={testId}
        />
      </label>
    </>
  );
};

export default CheckOutField;
