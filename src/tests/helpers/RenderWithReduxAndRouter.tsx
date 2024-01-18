import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../../redux/store";

export const renderWithReduxAndRouter = (component: ReactNode, initialRoute = '/') => {
  return render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
      </PersistGate>
    </Provider>
  );
};
