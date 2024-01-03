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
    <Provider store={store}>
      <BrowserRouter>
        <React.Suspense fallback={<LoadingComponent />}>
          <App />
        </React.Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
