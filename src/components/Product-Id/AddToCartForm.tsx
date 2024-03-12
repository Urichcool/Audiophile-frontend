import { FC } from "react";
import { Formik, Form, Field } from "formik";
import AddToCartButton from "../Reusable-Components/Buttons/AddToCartButton";
import { useAppDispatch } from "../../redux/reduxHooks/reduxHooks";
import { AppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/slices/cart/cartSlice";
import * as yup from "yup";

interface IAddToCartFormValues {
  quantity: number;
  productId: string | undefined;
  name: string | undefined;
  price: number | undefined;
  picture: string | undefined;
  category: string | undefined;
}

interface IAddToCartFormProps {
  productId: string | undefined;
  name: string | undefined;
  price: number | undefined;
  picture: string | undefined;
  category: string | undefined;
}

const addToCartValidationSchema: yup.ObjectSchema<
  {
    productId: string | undefined;
    name: string | undefined;
    price: number | undefined;
    picture: string | undefined;
    category: string | undefined;
    quantity: number | undefined;
  },
  yup.AnyObject,
  {
    productId: string | undefined;
    name: string | undefined;
    price: number | undefined;
    picture: string | undefined;
    category: string | undefined;
    quantity: number | undefined;
  },
  ""
> = yup.object().shape({
  productId: yup.string().required(),
  name: yup.string().required(),
  price: yup.number().required(),
  picture: yup.string().required(),
  category: yup.string().required(),
  quantity: yup.number().min(1),
});

const AddToCartForm: FC<IAddToCartFormProps> = ({
  productId,
  name,
  price,
  picture,
  category,
}) => {
  const dispatch: AppDispatch = useAppDispatch();
  const initialValues: IAddToCartFormValues = {
    quantity: 1,
    productId,
    name,
    price,
    picture,
    category,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addToCartValidationSchema}
      validateOnChange
      onSubmit={({
        productId,
        name,
        quantity,
        price,
        picture,
        category,
      }: IAddToCartFormValues) => {
        dispatch(
          addProduct({
            id: productId,
            name: name,
            quantity: quantity,
            price: price,
            picture: picture,
            totalPrice: price ? price * quantity : price,
            category: category,
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
            onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
              const stock = await fetch(`http://localhost:3000/stock/check/${props.values.productId}`);
              const data = await stock.json();
              console.log(data);
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
