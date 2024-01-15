import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "./sass/index.scss";
import "animate.css/animate.min.css";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from "./redux/store"


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}></PersistGate>
      <App />
    </BrowserRouter>
  </Provider>
);
