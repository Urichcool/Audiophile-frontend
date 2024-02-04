import { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IGoBackButtonProps {
  testId?: string;
}

const GoBackButton: FC<IGoBackButtonProps> = ({ testId }) => {
  const navigate: NavigateFunction = useNavigate();

  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate(-1);
  };

  return (
    <button
      data-testid={testId}
      className="Body-manrope-medium go-back-button"
      onClick={buttonClickHandler}
    >
      Go back
    </button>
  );
};

export default GoBackButton;
