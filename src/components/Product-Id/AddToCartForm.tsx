import { FC, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import AddToCartButton from "../Reusable-Components/Buttons/AddToCartButton";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/reduxHooks/reduxHooks";
import { AppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/slices/cart/cartSlice";
import * as yup from "yup";
import { useGetGoodsStockQuery } from "../../redux/services/goods";
import { selectCartProducts } from "../../redux/slices/cart/selectors";
import outOfStockIcon from "../../images/icons/Out-of-stock.png";

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
  const [isNotEnoughStockError, setIsNotEnoughStockError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { data, refetch, isSuccess, isFetching } = useGetGoodsStockQuery(
    productId!
  );
  const dispatch: AppDispatch = useAppDispatch();
  const initialValues: IAddToCartFormValues = {
    quantity: 1,
    productId,
    name,
    price,
    picture,
    category,
  };
  const cartProducts:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        picture: string;
        totalPrice: number;
        category: string;
      }[]
    | [] = useAppSelector(selectCartProducts);
  
  useEffect(() => {
    refetch();
  },[refetch])
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
        const product:
          | {
              id: string;
              name: string;
              quantity: number;
              price: number;
              picture: string;
              totalPrice: number;
              category: string;
            }
          | undefined = cartProducts.find(({ id }) => productId === id);
        if (product) {
          refetch();
          if (isSuccess && product.quantity + quantity > data.stock) {
            setIsNotEnoughStockError(true);
            setTimeout(() => {
              setIsNotEnoughStockError(false);
            }, 3000);
            return;
          }
        }
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
        setAddedToCart(true);
        setTimeout(() => {
          setAddedToCart(false);
        }, 3000);
      }}
    >
      {(props) => (
        <>
          {data?.stock ? (
            <>
              <Form className="add-to-cart-form">
                <button
                  className={`${
                    props.values.quantity > 1
                      ? "add-to-cart-input-minus-button"
                      : "add-to-cart-input-button--disabled"
                  }`}
                  data-testid="add-to-cart-form-decrease-button"
                  disabled={
                    (isFetching && props.values.quantity < 2) || addedToCart
                  }
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (props.values.quantity !== 1) {
                      refetch();
                      props.setFieldValue(
                        "quantity",
                        (props.values.quantity -= 1)
                      );
                    }
                  }}
                  type="button"
                >
                  {props.values.quantity > 1 ? "-" : ""}
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
                  className={`${
                    isSuccess && data.stock === props.values.quantity
                      ? "add-to-cart-input-button--disabled"
                      : "add-to-cart-input-plus-button"
                  }`}
                  data-testid="add-to-cart-form-increase-button"
                  disabled={
                    isFetching ||
                    (isSuccess
                      ? data.stock === props.values.quantity
                      : false) ||
                    addedToCart
                  }
                  onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
                    refetch();
                    props.setFieldValue(
                      "quantity",
                      (props.values.quantity += 1)
                    );
                  }}
                  type="button"
                >
                  {isSuccess
                    ? data.stock === props.values.quantity
                      ? ""
                      : "+"
                    : null}
                </button>
                <AddToCartButton
                  testId={"add-to-cart-button"}
                  isFetching={isFetching}
                  isEnoughStock={
                    isSuccess ? isNotEnoughStockError || addedToCart : false
                  }
                />
              </Form>
              {isSuccess
                ? isNotEnoughStockError && (
                    <p className="add-to-cart-error-message">
                      There are not enough products in stock
                    </p>
                  )
                : null}
              {addedToCart ? (
                <p className="add-to-cart-success-message">
                  {`${name} ${props.values.quantity}x has been added to cart`}
                </p>
              ) : null}
            </>
          ) : (
            <div className="add-to-cart-form-out-of-stock-container">
              <p className="Body-manrope-medium add-to-cart-form-out-of-stock-text">
                Out of stock
              </p>
              <img
                src={outOfStockIcon}
                className="add-to-cart-form-out-of-stock-icon"
                alt="out-of-stock-icon"
              />
            </div>
          )}
        </>
      )}
    </Formik>
  );
};

export default AddToCartForm;
