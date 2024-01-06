import { FC } from "react";
import { Formik, Form, Field } from "formik";
import AddToCartButton from "../Reusable-Components/Buttons/AddToCartButton";
import { useAppDispatch } from "../../redux/reduxHooks/reduxHooks";
import { AppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/slices/cartSlice";

interface IAddToCartFormValues {
  quantity: number;
}

interface IAddToCartFormProps {
  productId: string | undefined;
  name: string | undefined;
  price: number | undefined;
  picture: string | undefined;
}

const AddToCartForm: FC<IAddToCartFormProps> = ({
  productId,
  name,
  price,
  picture,
}) => {
  const dispatch: AppDispatch = useAppDispatch();
  const initialValues: IAddToCartFormValues = { quantity: 1 };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IAddToCartFormValues) => {
        dispatch(
          addProduct({
            id: productId,
            name: name,
            quantity: values.quantity,
            price: price ? price * values.quantity : price,
            picture: picture,
          })
        );
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
