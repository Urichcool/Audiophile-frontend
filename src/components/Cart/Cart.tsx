import { FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/reduxHooks/reduxHooks";
import {
  clearCart,
  selectCartProducts,
  selectIsCartModalOpen,
  switchCartModal,
} from "../../redux/slices/cartSlice";
import { BsFillCartXFill } from "react-icons/bs";

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
  const dispatch = useAppDispatch();

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
            {cartProducts.length === 0 ? (
              <div className="empty-cart-container">
                <h6 className="cart-title">Your cart is empty</h6>
                <BsFillCartXFill />
              </div>
            ) : (
              <div className="cart-head-container">
                <h6 className="cart-title">
                  cart {`(${cartProducts.length})`}
                </h6>
                  <button className="cart-remove-all-button Body-manrope-medium" onClick={(): void => {
                    dispatch(clearCart([]))
                }}>
                  Remove all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Cart;
