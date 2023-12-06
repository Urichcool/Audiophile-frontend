import App from "../../App";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../../tests/helpers/RenderWithReduxAndRouter";

describe("mobile-menu-tests", () => {
    test("should-open-mobile-menu", () => {
        renderWithReduxAndRouter(<App />)
        const mobileMenuButton: HTMLElement =
            screen.getByTestId("mobile-menu-button");
        fireEvent.click(mobileMenuButton);
        const mobileMenu: HTMLElement = screen.getByTestId("mobile-menu");
        expect(mobileMenu).toHaveClass("mobile-menu-open");
    })

})