import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import "./i18n";
import { store } from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoadingComponent from "./components/Loading";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<LoadingComponent />}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
