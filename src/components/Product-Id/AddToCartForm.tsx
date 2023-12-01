import { FC } from "react";
import { Formik, Form, Field } from "formik";
import AddToCartButton from "../Reusable-Components/Buttons/AddToCartButton";

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
          <button
            className="add-to-cart-input-minus-button"
            onClick={() => {
              if (props.values.quantity !== 1) {
                props.setFieldValue("quantity", (props.values.quantity -= 1));
              }
            }}
            type="button"
          >
            -
          </button>
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
              if (props.values.quantity !== 99) {
                props.setFieldValue("quantity", (props.values.quantity += 1));
              }
            }}
            type="button"
          >
            +
          </button>
          <AddToCartButton />
        </Form>
      )}
    </Formik>
  );
};

export default AddToCartForm;
