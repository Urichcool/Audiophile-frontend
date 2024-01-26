import { renderWithReduxAndRouter } from "../helpers/RenderWithReduxAndRouter";
import CategoriesList from "../../components/Reusable-Components/CategoriesList";
import { screen } from "@testing-library/react";
import WebSiteDescription from "../../components/Reusable-Components/WebSiteDescription";
import CategoriesProductsListItem from "../../components/Reusable-Components/CategoriesProductsListItem";

describe("reusable-components-render-tests", () => {
  test("categories-list-should-renders-correctly", () => {
    renderWithReduxAndRouter(<CategoriesList isMobile={false} />);
    const categoriesList: HTMLUListElement =
      screen.getByTestId("categories-list");
    expect(categoriesList).toMatchSnapshot();
  });
  test("web-site-description-should-renders-correctly", () => {
    renderWithReduxAndRouter(<WebSiteDescription />);
    const webSiteDescription: HTMLDivElement = screen.getByTestId(
      "web-site-description"
    );
    expect(webSiteDescription).toMatchSnapshot();
  });
  test("categories-product-list-item-should-renders-correctly", () => {
    const {
      previewImage,
      isNew,
      name,
      description,
      isEven,
      id,
    }: {
      previewImage: { mobile: string; tablet: string; desktop: string };
      isNew: boolean;
      name: string;
      description: string;
      isEven: boolean;
      id: string;
    } = {
      previewImage: {
        mobile:
          "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443154/audiophile/goods/product-xx99-mark-two-headphones/mobile/image-product-removebg-mobile-removebg-preview_e3ysuj.png",
        tablet:
          "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443187/audiophile/goods/product-xx99-mark-two-headphones/tablet/image-product-removebg-tablet-removebg-preview_wbyhs5.png",
        desktop:
          "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443139/audiophile/goods/product-xx99-mark-two-headphones/desktop/image-product-removebg-desktop-removebg-preview_myfyr1.png",
      },
      isNew: true,
      name: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      isEven: false,
      id: "652bdfecc2dd2dacebf6e267",
    };
    renderWithReduxAndRouter(
      <CategoriesProductsListItem
        previewImage={previewImage}
        isNew={isNew}
        name={name}
        description={description}
        isEven={isEven}
        id={id}
      />
    );
    const categoriesListItem: HTMLLIElement = screen.getByTestId(
      "categories-products-list-item"
    );
    expect(categoriesListItem).toMatchSnapshot();
  });
});
