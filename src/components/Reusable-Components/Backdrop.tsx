import { FC } from "react";

interface IBackdropProps {
  isModalOpen: boolean;
  clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  testId?: string;
  isMobileMenu?: boolean;
  isCheckOutModal?:boolean;
}

const Backdrop: FC<IBackdropProps> = ({
  isModalOpen,
  clickHandler,
  testId,
  isMobileMenu,
  isCheckOutModal
}) => {
  return (
    <div
      onClick={clickHandler}
      className={`backdrop backdrop-${isModalOpen ? "open" : "close"} ${
        isMobileMenu && "backdrop-mobile-menu"
      } ${isCheckOutModal && "backdrop-checkout-modal"}`}
      data-testid={testId}
    ></div>
  );
};

export default Backdrop;
