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
        ></div>
      </>
    );
};

export default CheckOutModal;
