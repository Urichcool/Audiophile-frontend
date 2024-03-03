import { Dispatch, FC, useState } from "react";
import Backdrop from "../Reusable-Components/Backdrop";
import {
  selectIsCheckOutModalOpen,
  switchCheckOutModal,
} from "../../redux/slices/checkout-modal/checkOutModalSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/reduxHooks/reduxHooks";
import { AnyAction } from "@reduxjs/toolkit";
import CheckOutOkIcon from "../../images/icons/CheckOutOkIcon";
import { selectCartProducts, selectTotal } from "../../redux/slices/cart/selectors";
import CheckoutModalListItem from "./CheckoutModalListItem";
import { priceWithCommas } from "../../utils/priceWithCommas";

const CheckOutModal: FC = () => {
  const [isOtherItemsOpen, setIsOtherItemsOpen] = useState<boolean>(false);

  const isCheckOutModalOpen: boolean = useAppSelector(
    selectIsCheckOutModalOpen
  );
  const dispatch: Dispatch<AnyAction> = useAppDispatch();

  const onBackdropClickHandler = (): void => {
    dispatch(switchCheckOutModal(!isCheckOutModalOpen));
  };

  const cartProducts:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        picture: string;
        totalPrice: number;
      }[]
    | [] = useAppSelector(selectCartProducts);

  const handleOtherItemsButton = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    setIsOtherItemsOpen(!isOtherItemsOpen);
  };

   const total: number = useAppSelector(selectTotal);
   const shipping: number = 50;
   const grandTotal: number = total + shipping;

  return (
    <>
      <Backdrop
        isModalOpen={isCheckOutModalOpen}
        clickHandler={onBackdropClickHandler}
        isCheckOutModal={true}
      />
      {cartProducts.length !== 0 && (
        <div
          className={
            isCheckOutModalOpen
              ? "checkout-modal-container-open"
              : "checkout-modal-container-close"
          }
        >
          <div className="checkout-modal-container-ok-circle">
            <CheckOutOkIcon />
          </div>
          <h2 className="checkout-modal-container-title">
            THANK YOU
            <br />
            FOR YOUR ORDER
          </h2>
          <p className="checkout-modal-container-email-text">
            You will receive an email confirmation shortly.
          </p>
          <div className="checkout-modal-order-container">
            <div className="checkout-modal-order-list-container">
              <ul className="checkout-modal-order-list">
                <CheckoutModalListItem
                  key={cartProducts[0].id}
                  picture={cartProducts[0].picture}
                  name={cartProducts[0].name}
                  totalPrice={cartProducts[0].totalPrice}
                  quantity={cartProducts[0].quantity}
                />
              </ul>
              <ul
                className={`${
                  isOtherItemsOpen
                    ? "checkout-modal-order-other-list-open"
                    : "checkout-modal-order-other-list-close"
                }`}
              >
                {[...cartProducts]
                  .slice(1, cartProducts.length)
                  .map(({ id, picture, name, totalPrice, quantity }) => (
                    <CheckoutModalListItem
                      key={id}
                      picture={picture}
                      name={name}
                      totalPrice={totalPrice}
                      quantity={quantity}
                    />
                  ))}
              </ul>

              {cartProducts.length > 1 && (
                <>
                  <div className="checkout-modal-order-line" />
                  <button
                    onClick={handleOtherItemsButton}
                    className="checkout-modal-order-button"
                  >
                    {isOtherItemsOpen
                      ? "View less"
                      : `and ${cartProducts.length - 1} other item(s)`}
                  </button>
                </>
              )}
            </div>
            <div className="checkout-modal-total-container">
              <div className="checkout-modal-total-text-container">
                <p className="checkout-modal-total-container-text">
                  GRAND TOTAL
                </p>
                <p className="checkout-modal-total-container-grand-total-text">
                  {priceWithCommas(grandTotal)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOutModal;
