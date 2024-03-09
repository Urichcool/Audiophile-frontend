import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";
import CategoriesList from "../../../components/Reusable-Components/CategoriesList";
import { screen } from "@testing-library/react";
import WebSiteDescription from "../../../components/Reusable-Components/WebSiteDescription";
import CategoriesProductsListItem from "../../../components/Reusable-Components/CategoriesProductsListItem";
import Picture from "../../../components/Reusable-Components/Picture";
import {
  categoriesProductListItemTestProps,
  pictureComponentTestProps,
} from "./components-props";
import Loader from "../../../components/Reusable-Components/Loader";
import Backdrop from "../../../components/Reusable-Components/Backdrop";

describe("reusable-components-snapshot-tests", () => {
  test("categories-list-component-should-match-snapshot", () => {
    renderWithReduxAndRouter(<CategoriesList isMobile={false} />);
    const categoriesList: HTMLUListElement =
      screen.getByTestId("categories-list");
    expect(categoriesList).toMatchSnapshot();
  });
  test("web-site-description-component-should-match-snapshot", () => {
    renderWithReduxAndRouter(<WebSiteDescription />);
    const webSiteDescription: HTMLDivElement = screen.getByTestId(
      "web-site-description"
    );
    expect(webSiteDescription).toMatchSnapshot();
  });
  test("categories-product-list-item-component-should-match-snapshot", () => {
    const {
      previewImage,
      isNew,
      name,
      description,
      isEven,
      id,
      category
    }: {
      previewImage: { mobile: string; tablet: string; desktop: string };
      isNew: boolean;
      name: string;
      description: string;
      isEven: boolean;
        id: string;
      category:string
    } = categoriesProductListItemTestProps;
    renderWithReduxAndRouter(
      <CategoriesProductsListItem
        previewImage={previewImage}
        isNew={isNew}
        name={name}
        description={description}
        isEven={isEven}
        id={id}
        category={category}
      />
    );
    const categoriesListItem: HTMLLIElement = screen.getByTestId(
      "categories-products-list-item"
    );
    expect(categoriesListItem).toMatchSnapshot();
  });
  test("picture-component-should-match-snapshot", () => {
    const { imageSrc, sizes, name, className } = pictureComponentTestProps;
    renderWithReduxAndRouter(
      <Picture
        imageSrc={imageSrc}
        sizes={sizes}
        name={name}
        className={className}
      />
    );
    const pictureComponent = screen.getByTestId("picture-component");
    expect(pictureComponent).toMatchSnapshot();
  });
  test("loader-component-should-match-snapshot", () => {
    renderWithReduxAndRouter(<Loader />);
    const loaderComponent: HTMLDivElement = screen.getByTestId("loader");
    expect(loaderComponent).toMatchSnapshot();
  });
  test("backdrop-component-should-match-snapshot", () => {
    renderWithReduxAndRouter(
      <Backdrop
        isModalOpen={true}
        clickHandler={() => {}}
        testId={"test-backdrop"}
      />
    );
    const backdropComponent: HTMLDivElement =
      screen.getByTestId("test-backdrop");
    expect(backdropComponent).toMatchSnapshot();
  });
});
