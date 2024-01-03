import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks/reduxHooks";
import { selectIsCartModalOpen, switchCartModal } from "../../redux/slices/cartSlice";

const Cart: FC = () => {
  const isCartModalOpen = useAppSelector(selectIsCartModalOpen);
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
        onClick={():void => {dispatch(switchCartModal(!isCartModalOpen))}}
        className={`cart-backdrop cart-backdrop-${
          isCartModalOpen ? "open" : "close"
        }`}
      >
        <div className="container">
          <div className="cart-content">123</div>
        </div>
      </div>
      ;
    </>
  );
};

export default Cart;
