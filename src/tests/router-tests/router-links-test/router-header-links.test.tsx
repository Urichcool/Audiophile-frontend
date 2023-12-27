import App from "../../../App";
import { screen, fireEvent} from "@testing-library/react";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";

describe("router-header-links-test", () => {
  test("header-logo-home-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const headerLogoHomeLink: HTMLElement = screen.getByTestId(
      "header-logo-home-link"
    );
    fireEvent.click(headerLogoHomeLink);
    const homePage: HTMLElement = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
  test("header-home-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const headerHomeLink: HTMLElement = screen.getByTestId("header-home-link");
    fireEvent.click(headerHomeLink);
    const homePage: HTMLElement = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
  test("header-headphones-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const headerHeadphonesLink: HTMLElement = screen.getByTestId(
      "header-headphones-link"
    );
    fireEvent.click(headerHeadphonesLink);
    const headphonesPage: HTMLElement = screen.getByTestId("headphones-page");
    expect(headphonesPage).toBeInTheDocument();
  });
  test("header-speakers-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const headerSpeakersLink: HTMLElement = screen.getByTestId(
      "header-speakers-link"
    );
    fireEvent.click(headerSpeakersLink);
    const speakersPage: HTMLElement = screen.getByTestId("speakers-page");
    expect(speakersPage).toBeInTheDocument();
  });
  test("header-earphones-link-test", () => {
    renderWithReduxAndRouter(<App />);
    const headerEarphonesLink: HTMLElement = screen.getByTestId(
      "header-earphones-link"
    );
    fireEvent.click(headerEarphonesLink);
    const earphonesPage: HTMLElement = screen.getByTestId("earphones-page");
    expect(earphonesPage).toBeInTheDocument();
  });
});
