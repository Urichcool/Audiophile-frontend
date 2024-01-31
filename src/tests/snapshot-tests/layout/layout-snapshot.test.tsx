import Footer from "../../../components/Layout/Footer/Footer";
import Header from "../../../components/Layout/Hero-Header/Header";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { store } from "../../../redux/store";
import { goodsApi } from "../../../redux/services/goods";

describe("layout-snapshot-test", () => {
  beforeAll(() => {
    store.dispatch(goodsApi.util.resetApiState());
  });
  test("header-should-match-snapshot", async () => {
    renderWithReduxAndRouter(<Header />);
    const heroLoader: HTMLDivElement = screen.getByTestId("hero-loader");
    await waitForElementToBeRemoved(heroLoader, {
      timeout: 300000,
    });
    const header: HTMLElement = screen.getByTestId("header");
    expect(header).toMatchSnapshot();
  });
  test("footer-should-match-snapshot", () => {
    renderWithReduxAndRouter(<Footer />);
    const footer: HTMLElement = screen.getByTestId("footer");
    expect(footer).toMatchSnapshot();
  });
});
