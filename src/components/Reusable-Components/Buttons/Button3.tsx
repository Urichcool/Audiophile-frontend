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
  isMobile: boolean | undefined;
  testId: string;
}

const Button3: FC<IButton3Props> = ({ to, isMobile, testId }) => {
  const dispatch: AppDispatch = useAppDispatch();
  const isMenuOpen: boolean = useAppSelector(selectIsMenuOpen);
  const navigate = useNavigate();

  return (
    <button
      className="button3"
      data-testid={testId}
      onClick={(): void => {
        navigate(to);
        if (isMobile) {
          dispatch(switchMenu(!isMenuOpen));
        }
      }}
    >
      <p>Shop</p>
      <ArrowRightIcon />
    </button>
  );
};

export default Button3;
