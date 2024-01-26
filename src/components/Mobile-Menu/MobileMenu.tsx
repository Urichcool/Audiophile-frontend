import { FC, useEffect } from "react";
import { selectIsMenuOpen } from "../../redux/slices/mobile-menu/mobileMenuSlice";
import { useAppSelector } from "../../redux/reduxHooks/reduxHooks";
import CategoriesList from "../Reusable-Components/CategoriesList";
import { useAppDispatch } from "../../redux/reduxHooks/reduxHooks";
import { AppDispatch } from "../../redux/store";
import { switchMenu } from "../../redux/slices/mobile-menu/mobileMenuSlice";
import Backdrop from "../Reusable-Components/Backdrop";

const MobileMenu: FC = () => {
  const isMenuOpen: boolean = useAppSelector(selectIsMenuOpen);
  const dispatch: AppDispatch = useAppDispatch();

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

  const clickBackdropHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    dispatch(switchMenu(!isMenuOpen));
  };

  return (
    <>
      <div
        className={`mobile-menu mobile-menu-${isMenuOpen ? "open" : "close"}`}
        data-testid="mobile-menu"
      >
        <div className="container">
          <div className="mobile-menu-categories-container">
            <CategoriesList isMobile={true} />
          </div>
        </div>
      </div>
      <Backdrop
        isModalOpen={isMenuOpen}
        isMobileMenu={true}
        clickHandler={clickBackdropHandler}
        testId={"mobile-menu-backdrop"}
      />
    </>
  );
};

export default MobileMenu;
