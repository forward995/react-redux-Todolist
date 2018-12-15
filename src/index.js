import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./reducers";

const store = createStore(rootReducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
