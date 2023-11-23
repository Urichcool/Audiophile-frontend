import { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const GoBackButton: FC = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <button
      className="Body-manrope-medium go-back-button"
      onClick={(): void => navigate(-1)}
    >
      Go back
    </button>
  );
};

export default GoBackButton;
