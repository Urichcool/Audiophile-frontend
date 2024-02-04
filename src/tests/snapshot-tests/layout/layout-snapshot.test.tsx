import Footer from "../../../components/Layout/Footer/Footer";
import Header from "../../../components/Layout/Hero-Header/Header";
import HeroNewProductContainer from "../../../components/Layout/Hero-Header/HeroNewProductContainer";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";
import { screen } from "@testing-library/react";
import { heroNewProductTestProps } from "./hero-new-product-test-props";

describe("layout-snapshot-test", () => {
  test("header-should-match-snapshot", () => {
    renderWithReduxAndRouter(<Header />);
    const header: HTMLElement = screen.getByTestId("header");
    expect(header).toMatchSnapshot();
  });
  test("hero-new-product-container-should-match-snapshot", () => {
    const { name, description, productId, previewImage } =
      heroNewProductTestProps;
    renderWithReduxAndRouter(
      <HeroNewProductContainer
        name={name}
        description={description}
        productId={productId}
        previewImage={previewImage}
      />
    );
    const heroContainer: HTMLDivElement = screen.getByTestId("hero-container");
    expect(heroContainer).toMatchSnapshot();
  });
  test("footer-should-match-snapshot", () => {
    renderWithReduxAndRouter(<Footer />);
    const footer: HTMLElement = screen.getByTestId("footer");
    expect(footer).toMatchSnapshot();
  });
});
