import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "../../../images/icons/ArrowRightIcon";
import { AppDispatch } from "../../../redux/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/reduxHooks/reduxHooks";
import {
  selectIsMenuOpen,
  switchMenu,
} from "../../../redux/slices/mobile-menu/mobileMenuSlice";

interface IButton3Props {
  to: "/headphones" | "/speakers" | "/earphones";
  isMobile?: boolean;
  testId?: string;
}

const Button3: FC<IButton3Props> = ({ to, isMobile, testId }) => {
  const dispatch: AppDispatch = useAppDispatch();
  const isMenuOpen: boolean = useAppSelector(selectIsMenuOpen);
  const navigate = useNavigate();

  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate(to);
    if (isMobile) {
      dispatch(switchMenu(!isMenuOpen));
    }
  };

  return (
    <button
      className="button3"
      data-testid={testId}
      onClick={buttonClickHandler}
    >
      <p>Shop</p>
      <ArrowRightIcon />
    </button>
  );
};

export default Button3;
