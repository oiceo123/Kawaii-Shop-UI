import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import "./i18n";
import { store } from "./redux";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
