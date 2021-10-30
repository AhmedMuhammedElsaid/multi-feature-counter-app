import React from "react";
import "@testing-library/jest-dom";

import { cleanup, render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counterReducer from "./reducers/counter";
import { combineReducers } from "redux";

const addBtn = "add-btn-testid",
  decBtn = "dec-btn-testid",
  resetBtn = "reset-btn-testid",
  countHolder = "count-value-testid",
  slider = "slider-testid";
  
// this is a fancy function to keep  our component under redux context umbrella
const customRender = (component) => {
  return {
    ...render(
      <Provider
        store={createStore(combineReducers({ counters: counterReducer }))}
      >
        {component}
      </Provider>
    ),
  };
};
describe("test app functionalities", () => {
  afterEach(cleanup);
  it("should render app  without crashing", () => {
    const { asFragment } = customRender(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should change both counters  correctly without crashing", () => {
    const { asFragment, getByTestId, getAllByTestId } = customRender(<App />);
    fireEvent.change(getByTestId(slider), { target: { value: 2 } });
    expect(getAllByTestId(countHolder)[0]).toHaveTextContent(2);
    expect(getAllByTestId(countHolder)[1]).toHaveTextContent(-2);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should increment correctly without crashing", () => {
    const { asFragment, getAllByTestId } = customRender(<App />);
    fireEvent.click(getAllByTestId(addBtn)[0]);
    expect(getAllByTestId(countHolder)[0]).toHaveTextContent(1);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should decrement correctly without crashing", () => {
    const { asFragment, getAllByTestId } = customRender(<App />);
    fireEvent.click(getAllByTestId(decBtn)[0]);
    expect(getAllByTestId(countHolder)[0]).toHaveTextContent(-1);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should reset correctly without crashing", () => {
    const { asFragment, getAllByTestId } = customRender(<App />);
    fireEvent.click(getAllByTestId(resetBtn)[0]);
    expect(getAllByTestId(countHolder)[0]).toHaveTextContent(0);
    expect(asFragment()).toMatchSnapshot();
  });
});
