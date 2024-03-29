import { Dispatch, FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/reduxHooks/reduxHooks";
import {
  selectCartProducts,
  selectIsCartModalOpen,
  selectTotal,
} from "../../redux/slices/cart/selectors";
import {
  clearCart,
  getTotal,
  switchCartModal,
} from "../../redux/slices/cart/cartSlice";
import { BsFillCartXFill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import CartItem from "./CartItem";
import { priceWithCommas } from "../../utils/priceWithCommas";
import CheckoutButton from "../Reusable-Components/Buttons/CheckoutButton";
import Backdrop from "../Reusable-Components/Backdrop";
import { AnyAction } from "@reduxjs/toolkit";

const Cart: FC = () => {
  const isCartModalOpen: boolean = useAppSelector(selectIsCartModalOpen);
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
  const total: number = useAppSelector(selectTotal);
  const dispatch: Dispatch<AnyAction> = useAppDispatch();

  useEffect(() => {
    dispatch(
      getTotal(
        cartProducts.length !== 0
          ? [...cartProducts].reduce(
              (total, product) => (total += product.totalPrice),
              0
            )
          : 0
      )
    );
  }, [cartProducts, dispatch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.code === "Escape") {
        dispatch(switchCartModal(false));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return (): void => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isCartModalOpen]);

  const clickBackdropHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    dispatch(switchCartModal(!isCartModalOpen));
  };

  const closeCartButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    dispatch(switchCartModal(!isCartModalOpen));
  };

  const removeAllButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    dispatch(clearCart([]));
  };

  return (
    <>
      <Backdrop
        isModalOpen={isCartModalOpen}
        clickHandler={clickBackdropHandler}
        testId={"cart-modal-backdrop"}
      />
      <div
        className={`cart-container cart-container-${
          isCartModalOpen ? "open" : "close"
        }`}
        data-testid="cart-modal"
      >
        <div className="container">
          <div className="cart-content">
            <button
              className="cart-close-button"
              data-testid="cart-close-modal-button"
              onClick={closeCartButtonHandler}
            >
              <IoIosClose />
            </button>
            {cartProducts.length === 0 ? (
              <div
                className="empty-cart-container"
                data-testid="cart-modal-empty-container"
              >
                <h6 className="cart-title">Your cart is empty</h6>
                <BsFillCartXFill />
              </div>
            ) : (
              <>
                <div className="cart-head-container">
                  <h6 className="cart-title">
                    cart {`(${cartProducts.length})`}
                  </h6>
                  <button
                    className="cart-remove-all-button Body-manrope-medium"
                    data-testid="cart-remove-all-button"
                    onClick={removeAllButtonHandler}
                  >
                    Remove all
                  </button>
                </div>
                <ul className="cart-list">
                  {cartProducts.map(
                    ({ id, name, quantity, price, picture, totalPrice, category }) => (
                      <CartItem
                        key={id}
                        id={id}
                        name={name}
                        quantity={quantity}
                        price={price}
                        picture={picture}
                        totalPrice={totalPrice}
                        category={category}
                      />
                    )
                  )}
                </ul>
                <div className="cart-total-container">
                  <h6 className="cart-total-title">total</h6>
                  <p className="cart-total">{priceWithCommas(total)}</p>
                </div>
                <CheckoutButton />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
