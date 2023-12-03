import MemoryRouter from "react-router-dom";
import { FC } from "react";
import App from "../../App";
import { render } from "@testing-library/react";

export const renderWithRouter = (component:FC, initialRoute = "/") => {
  return render(
<MemoryRouter>
  );
};
