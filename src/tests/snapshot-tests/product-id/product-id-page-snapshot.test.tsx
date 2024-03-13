import ProductIdContentDescription from "../../../components/Product-Id/ProductIdContentDescription";
import ProductIdContentFeatures from "../../../components/Product-Id/ProductIdContentFeatures";
import ProductIdContentGallery from "../../../components/Product-Id/ProductIdContentGallery";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";
import {
  productIdContentDescriptionTestProps,
  productIdContentFeaturesTestProps,
  productIdContentGalleryTestProps,
} from "./product-id-page-test-props";
import { screen } from "@testing-library/react";

describe("product-id-page-snapshot-tests", () => {
  test("product-id-page-description-should-match-snapshot", () => {
    const {
      pictureSrc,
      name,
      isNew,
      description,
      price,
      productId,
      previewImage,
      category
    }: {
      pictureSrc: { desktop: string; tablet: string; mobile: string };
      name: string;
      isNew: boolean;
      description: string;
      price: number;
      productId: string;
        previewImage: string;
        category: string;
    } = productIdContentDescriptionTestProps;
    renderWithReduxAndRouter(
      <ProductIdContentDescription
        pictureSrc={pictureSrc}
        name={name}
        isNew={isNew}
        description={description}
        price={price}
        productId={productId}
        previewImage={previewImage}
        category={category}
      />
    );
    const productIdDescription: HTMLDivElement = screen.getByTestId(
      "product-id-page-picture-and-description-container"
    );
    expect(productIdDescription).toMatchSnapshot();
  });
  test("product-id-page-features-should-match-snapshot", () => {
    const { features, includes } = productIdContentFeaturesTestProps;
    renderWithReduxAndRouter(
      <ProductIdContentFeatures features={features} includes={includes} />
    );
    const productIdFeatures: HTMLDivElement = screen.getByTestId(
      "product-id-page-features-and-includes"
    );
    expect(productIdFeatures).toMatchSnapshot();
  });
  test("product-id-page-gallery-should-match-snapshot", () => {
    const { gallery, name } = productIdContentGalleryTestProps;
    renderWithReduxAndRouter(
      <ProductIdContentGallery gallery={gallery} name={name} />
    );
    const productIdGallery: HTMLDivElement = screen.getByTestId(
      "product-id-page-gallery"
    );
    expect(productIdGallery).toMatchSnapshot();
  });
});
