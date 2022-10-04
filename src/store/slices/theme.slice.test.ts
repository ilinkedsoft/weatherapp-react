import reducer, { toggleTheme } from "./theme.slice";

jest.mock("../../services/WeatherbitApp.ts");
describe("current weather slice", () => {
  it("toggle theme mode from dark to light successfully", async () => {
    const initialState = {
      theme: "dark",
    };
    const action = {
      type: toggleTheme.type,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      theme: "light",
    });
  });

  it("toggle theme mode from light to dark successfully", async () => {
    const initialState = {
      theme: "light",
    };
    const action = {
      type: toggleTheme.type,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      theme: "dark",
    });
  });
});
