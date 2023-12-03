import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export const renderWithReduxAndRouter = (component: ReactNode, initialRoute = '/') => {
  return render(
    <Provider store={store}>
      {" "}
      <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
    </Provider>
  );
};
