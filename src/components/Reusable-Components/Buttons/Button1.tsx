import { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IButton1Props {
  id?: string ;
  testId?: string;
  category?: string
}

const Button1: FC<IButton1Props> = ({ id, testId, category }) => {
  const navigate: NavigateFunction = useNavigate();

  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate(`${category}/${id}`);
  };

  return (
    <button
      className="button1"
      data-testid={testId}
      onClick={buttonClickHandler}
    >
      See product
    </button>
  );
};

export default Button1;
