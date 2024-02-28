import { Dispatch, FC } from "react";
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

const CheckOutModal:FC = () => {
  const isCheckOutModalOpen: boolean = useAppSelector(
    selectIsCheckOutModalOpen
  );
  const dispatch: Dispatch<AnyAction> = useAppDispatch();
  const onBackdropClickHandler = (): void => {
    dispatch(switchCheckOutModal(!isCheckOutModalOpen));
  };
    return (
      <>
        <Backdrop
          isModalOpen={isCheckOutModalOpen}
          clickHandler={onBackdropClickHandler}
          isCheckOutModal={true}
        />
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
        </div>
      </>
    );
};

export default CheckOutModal;
