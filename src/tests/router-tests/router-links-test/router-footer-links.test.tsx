import App from "../../../App";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";

describe("router-footer-links-test", () => {
  test("footer-logo-home-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const footerLogoHomeLink: HTMLElement = screen.getByTestId(
      "footer-logo-home-link"
    );
    fireEvent.click(footerLogoHomeLink);
    const homePage: HTMLElement = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
  test("footer-home-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const footerHomeLink: HTMLElement = screen.getByTestId("footer-home-link");
    fireEvent.click(footerHomeLink);
    const homePage: HTMLElement = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
  test("footer-headphones-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const footerHeadphonesLink: HTMLElement = screen.getByTestId(
      "footer-headphones-link"
    );
    fireEvent.click(footerHeadphonesLink);
    const headphonesPage: HTMLElement = screen.getByTestId("headphones-page");
    expect(headphonesPage).toBeInTheDocument();
  });
  test("footer-speakers-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const footerSpeakersLink: HTMLElement = screen.getByTestId(
      "footer-speakers-link"
    );
    fireEvent.click(footerSpeakersLink);
    const speakersPage: HTMLElement = screen.getByTestId("speakers-page");
    expect(speakersPage).toBeInTheDocument();
  });
  test("footer-earphones-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const footerEarphonesLink: HTMLElement = screen.getByTestId(
      "footer-earphones-link"
    );
    fireEvent.click(footerEarphonesLink);
    const earphonesPage: HTMLElement = screen.getByTestId("earphones-page");
    expect(earphonesPage).toBeInTheDocument();
  });
});
