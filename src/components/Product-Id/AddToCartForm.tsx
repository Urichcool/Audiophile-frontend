import { FC } from "react";
import { Formik, Form, Field } from "formik";
import AddToCartButton from "../Reusable-Components/Buttons/AddToCartButton";
import { useAppDispatch } from "../../redux/reduxHooks/reduxHooks";
import { AppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/slices/cart/cartSlice";

interface IAddToCartFormValues {
  quantity: number;
}

interface IAddToCartFormProps {
  productId?: string ;
  name?: string ;
  price?: number ;
  picture?: string ;
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
            price: price,
            picture: picture,
            totalPrice: price ? price * values.quantity : price,
          })
        );
      }}
    >
      {(props) => (
        <Form className="add-to-cart-form">
          <button
            className="add-to-cart-input-minus-button"
            data-testid="add-to-cart-form-decrease-button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
            data-testid="add-to-cart-form-quantity"
          />

          <button
            className="add-to-cart-input-plus-button"
            data-testid="add-to-cart-form-increase-button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (props.values.quantity !== 99) {
                props.setFieldValue("quantity", (props.values.quantity += 1));
              }
            }}
            type="button"
          >
            +
          </button>
          <AddToCartButton testId={"add-to-cart-button"} />
        </Form>
      )}
    </Formik>
  );
};

export default AddToCartForm;
