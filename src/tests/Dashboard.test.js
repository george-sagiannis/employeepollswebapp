import { render } from "@testing-library/react";
import React from "react";
import Dashboard from "../components/Dashboard";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

describe("Dashboard", () => {
  it("matches the snapshot", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
