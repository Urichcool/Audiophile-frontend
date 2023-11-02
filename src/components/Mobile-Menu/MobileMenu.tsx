import { FC, useEffect } from "react";
import { selectIsMenuOpen } from "../../redux/slices/mobileMenuSlice";
import { useAppSelector } from "../../redux/reduxHooks/reduxHooks";
import CategoriesList from "../Reusable-Components/CategoriesList";
import { useAppDispatch } from "../../redux/reduxHooks/reduxHooks";
import { AppDispatch } from "../../redux/store";
import { switchMenu } from "../../redux/slices/mobileMenuSlice";

const MobileMenu: FC = () => {
  const isMenuOpen: boolean = useAppSelector(selectIsMenuOpen);
  const dispatch: AppDispatch = useAppDispatch();
  const menuClassName: " mobile-menu-open" | " mobile-menu-close" = isMenuOpen
    ? " mobile-menu-open"
    : " mobile-menu-close";
  const backdropClassName:
    | " mobile-menu-backdrop-open"
    | " mobile-menu-backdrop-close" = isMenuOpen
    ? " mobile-menu-backdrop-open"
    : " mobile-menu-backdrop-close";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.code === "Escape") {
        dispatch(switchMenu(false));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return (): void => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isMenuOpen]);

  return (
    <>
      <div className={"mobile-menu" + menuClassName}>
        <div className="container">
          <div className="mobile-menu-categories-container">
            <CategoriesList isMobile={true} />
          </div>
        </div>
      </div>
      <div
        className={"mobile-menu-backdrop" + backdropClassName}
        onClick={(): void => {
          dispatch(switchMenu(!isMenuOpen));
        }}
        onKeyDown={(e) => {}}
      />
    </>
  );
};

export default MobileMenu;
