import { FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/reduxHooks/reduxHooks";
import {
  clearCart,
  getTotal,
  selectCartProducts,
  selectIsCartModalOpen,
  selectTotal,
  switchCartModal,
} from "../../redux/slices/cartSlice";
import { BsFillCartXFill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import CartItem from "./CartItem";
import { priceWithCommas } from "../../utils/priceWithCommas";

const Cart: FC = () => {
  const isCartModalOpen: boolean = useAppSelector(selectIsCartModalOpen);
  const cartProducts:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        picture: string;
      }[]
    | [] = useAppSelector(selectCartProducts);
  const total:number = useAppSelector(selectTotal)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getTotal(
        cartProducts.length !== 0
          ? [...cartProducts].reduce(
              (
                total: number,
                product: {
                  id: string;
                  name: string;
                  quantity: number;
                  price: number;
                  picture: string;
                }
              ) => (total += product.price),
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

  return (
    <>
      <div
        onClick={(): void => {
          dispatch(switchCartModal(!isCartModalOpen));
        }}
        className={`cart-backdrop cart-backdrop-${
          isCartModalOpen ? "open" : "close"
        }`}
      ></div>
      <div
        className={`cart-container cart-container-${
          isCartModalOpen ? "open" : "close"
        }`}
      >
        <div className="container">
          <div className="cart-content">
            <button
              className="cart-close-button"
              onClick={(): void => {
                dispatch(switchCartModal(!isCartModalOpen));
              }}
            >
              <IoIosClose />
            </button>
            {cartProducts.length === 0 ? (
              <div className="empty-cart-container">
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
                    onClick={(): void => {
                      dispatch(clearCart([]));
                    }}
                  >
                    Remove all
                  </button>
                </div>
                <ul className="cart-list">
                  {cartProducts.map(
                    ({ id, name, quantity, price, picture }) => (
                      <CartItem
                        key={id}
                        id={id}
                        name={name}
                        quantity={quantity}
                        price={price}
                        picture={picture}
                      />
                    )
                  )}
                </ul>
                <div className="cart-total-container">
                  <h6 className="cart-total-title">total</h6>
                  <p className="cart-total">{priceWithCommas(total)}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
