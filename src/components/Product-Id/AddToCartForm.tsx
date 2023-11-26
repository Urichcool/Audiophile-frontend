import { FC } from "react";
import { Formik, Form, Field } from "formik";

interface IAddToCartFormValues {
  quantity: number;
}

const AddToCartForm: FC = () => {
  const initialValues: IAddToCartFormValues = { quantity: 1 };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IAddToCartFormValues) => {
        console.log(values);
      }}
    >
      <Form>
        <Field id="quantity" name="quantity" type="number" />
      </Form>
    </Formik>
  );
};

export default AddToCartForm;
