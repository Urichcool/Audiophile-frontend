import { FC } from "react";

interface IBackdropProps {
  isModalOpen: boolean;
  clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  testId?: string;
  isMobileMenu?:boolean
}

const Backdrop: FC<IBackdropProps> = ({
  isModalOpen,
  clickHandler,
  testId,
  isMobileMenu
}) => {
  return (
    <div
      onClick={clickHandler}
      className={`backdrop backdrop-${isModalOpen ? "open" : "close"} ${isMobileMenu && "backdrop-mobile-menu"}`}
      data-testid={testId}
    ></div>
  );
};

export default Backdrop;
