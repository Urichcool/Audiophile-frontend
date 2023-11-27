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
      {(props) => (
        <Form className="add-to-cart-form">
          <Field
            id="quantity"
            name="quantity"
            type="number"
            className="add-to-cart-input"
            readOnly="readonly"
            value={props.values.quantity}
          />
          <button
            className="add-to-cart-input-plus-button"
            onClick={() => {
              props.values.quantity += 1;
            }}
            type="button"
          >
            +
          </button>
          <button
            className="add-to-cart-input-minus-button"
            onClick={() => {
              props.values.quantity -= 1;
            }}
            type="button"
          >
            -
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddToCartForm;
