import { FC } from "react";
import { selectIsMenuOpen } from "../../redux/slices/mobileMenuSlice";
import { useAppSelector } from "../../redux/reduxHooks/reduxHooks";
import CategoriesList from "../Reusable-Components/CategoriesList";

const MobileMenu: FC = () => {
  const isMenuOpen: boolean = useAppSelector(selectIsMenuOpen);
  const menuClassName: " mobile-menu-open" | " mobile-menu-close" = isMenuOpen
    ? " mobile-menu-open"
    : " mobile-menu-close";
  const backdropClassName:" mobile-menu-backdrop-open" | " mobile-menu-backdrop-close" = isMenuOpen
    ? " mobile-menu-backdrop-open"
    : " mobile-menu-backdrop-close";

  return (
    <>
      <div className={"mobile-menu" + menuClassName}>
        <div className="container">
          <div className="mobile-menu-categories-container">
            <CategoriesList />
          </div>
        </div>
      </div>
      <div className={"mobile-menu-backdrop" + backdropClassName}> </div>
    </>
  );
};

export default MobileMenu;
