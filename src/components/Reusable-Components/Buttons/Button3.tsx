import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "../../../images/icons/ArrowRightIcon";

interface IButton3Props {
  to: "headphones" | "speakers" | "earphones";
}

const Button3: FC<IButton3Props> = ({ to }) => {
  const navigate = useNavigate();

  return (
    <button
      className="button3"
      onClick={() => {
        navigate(to);
      }}
    >
          <p>Shop</p>
          <ArrowRightIcon/>
    </button>
  );
};

export default Button3;
