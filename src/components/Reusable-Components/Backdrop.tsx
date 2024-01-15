import { FC } from "react";

interface IBackdropProps {
  isModalOpen: boolean;
  clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  testId?: string;
}

const Backdrop: FC<IBackdropProps> = ({
  isModalOpen,
  clickHandler,
  testId,
}) => {
  return (
    <div
      onClick={clickHandler}
      className={`backdrop backdrop-${isModalOpen ? "open" : "close"}`}
      data-testid={testId}
    ></div>
  );
};

export default Backdrop;
