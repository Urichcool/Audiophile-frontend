import HomeProductsEarphone from "../../../components/Home/HomeProducts/HomeProductsEarphone";
import { IGoods } from "../../../interfaces/goods/goods";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";
import { screen } from "@testing-library/react";
import { homeProductSectionTestProps } from "./component-props";
import HomeProductsHeadphone from "../../../components/Home/HomeProducts/HomeProductsHeadphone";
import HomeProductsSpeaker from "../../../components/Home/HomeProducts/HomeProductsSpeaker";

describe("home-page-snapshot-tests", () => {
  test("home-products-earphone-section-should-match-snapshot", () => {
    const { data, isFetching }: { data: IGoods; isFetching: boolean } =
      homeProductSectionTestProps;
    renderWithReduxAndRouter(
      <HomeProductsEarphone data={data} isFetching={isFetching} />
    );
    const homeProductsEarphoneSection: HTMLDivElement = screen.getByTestId(
      "home-products-earphone-section"
    );
    expect(homeProductsEarphoneSection).toMatchSnapshot();
  });
  test("home-products-headphone-section-should-match-snapshot", () => {
    const { data, isFetching }: { data: IGoods; isFetching: boolean } =
      homeProductSectionTestProps;
    renderWithReduxAndRouter(
      <HomeProductsHeadphone data={data} isFetching={isFetching} />
    );
    const homeProductsHeadphoneSection: HTMLDivElement = screen.getByTestId(
      "home-products-headphone-section"
    );
    expect(homeProductsHeadphoneSection).toMatchSnapshot();
  });
  test("home-products-speaker-section-should-match-snapshot", () => {
    const { data, isFetching }: { data: IGoods; isFetching: boolean } =
      homeProductSectionTestProps;
    renderWithReduxAndRouter(
      <HomeProductsSpeaker data={data} isFetching={isFetching} />
    );
    const homeProductsSpeakerSection: HTMLDivElement = screen.getByTestId(
      "home-products-speaker-section"
    );
    expect(homeProductsSpeakerSection).toMatchSnapshot();
  });
});
