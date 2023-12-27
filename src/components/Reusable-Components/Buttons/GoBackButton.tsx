import { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IGoBackButtonProps{
  testId: string
}

const GoBackButton: FC<IGoBackButtonProps> = ({testId}) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <button
      data-testid={testId}
      className="Body-manrope-medium go-back-button"
      onClick={(): void => navigate(-1)}
    >
      Go back
    </button>
  );
};

export default GoBackButton;
