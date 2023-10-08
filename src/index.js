import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./reducers";
import middleware from "./middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const rootElement = document.getElementById("root");

// Use createRoot from react-dom/client
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
