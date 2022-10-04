import React from "react";
import Current from ".";
import { mockCurrent } from "../../mocks/current";
import { renderWithStore } from "../../mocks/renderWithStore";
import { mockInitialStore } from "../../mocks/store";
import * as hooks from "../hooks";

describe("<Current>", () => {
  it("should call hooks", () => {
    const useHandleSearchChange = jest
      .spyOn(hooks, "useHandleSearchChange")
      .mockImplementation(() => ({
        searchCity: "Belgrade, RS",
        handleSearchChange: jest.fn(),
      }));
    renderWithStore(<Current />);
    expect(useHandleSearchChange).toBeCalled();
  });
  it("should render correct value into input element", () => {
    jest.spyOn(hooks, "useHandleSearchChange").mockImplementation(() => ({
      searchCity: "Belgrade, RS",
      handleSearchChange: jest.fn(),
    }));
    const { getByTestId } = renderWithStore(<Current />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const searchInput = getByTestId("searchCity");
    expect((searchInput as HTMLInputElement).value).toEqual("Belgrade, RS");
  });
  it("should render loading text", () => {
    jest.spyOn(hooks, "useHandleSearchChange").mockImplementation(() => ({
      searchCity: "Belgrade, RS",
      handleSearchChange: jest.fn(),
    }));
    const { getByText } = renderWithStore(<Current />, {
      ...mockInitialStore,
      current: {
        loading: true,
        data: null,
        error: null,
      },
    });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Loading ...")).not.toBeNull();
  });
  it("should render correct info", () => {
    jest.spyOn(hooks, "useHandleSearchChange").mockImplementation(() => ({
      searchCity: "Belgrade, RS",
      handleSearchChange: jest.fn(),
    }));
    const { getByText } = renderWithStore(<Current />, {
      ...mockInitialStore,
      current: {
        loading: false,
        data: mockCurrent,
        error: null,
      },
    });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Broken clouds")).not.toBeNull();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Belgrade, RS")).not.toBeNull();
  });
  it("should render 00.0 when data is nil", () => {
    jest.spyOn(hooks, "useHandleSearchChange").mockImplementation(() => ({
      searchCity: "Belgrade, RS",
      handleSearchChange: jest.fn(),
    }));
    const { getByText } = renderWithStore(<Current />, {
      ...mockInitialStore,
      current: {
        loading: false,
        data: null,
        error: null,
      },
    });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("00.0")).not.toBeNull();
  });
});
