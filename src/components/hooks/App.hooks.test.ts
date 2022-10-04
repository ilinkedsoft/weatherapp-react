import { act, renderHook } from "@testing-library/react-hooks";
import { ChangeEvent } from "react";
import { useHandleSearchChange, useHandleToggle } from ".";
import * as currentSlice from "../../store/slices/current.slice";
import * as themeSlice from "../../store/slices/theme.slice";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("App hooks", () => {
  const mockfetchCurrent = jest.spyOn(currentSlice, "fetchCurrentWeather");
  const mockToggleTheme = jest.spyOn(themeSlice, "toggleTheme");

  it("should fire useEffect", () => {
    renderHook(() => useHandleSearchChange());
    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockfetchCurrent).toBeCalledWith("Belgrade, RS");
  });
  it("should fire call with new city string", async () => {
    const { result } = renderHook(() => useHandleSearchChange());
    const mockEvent = { currentTarget: { value: "123" } };
    act(() => {
      result.current.handleSearchChange(
        mockEvent as ChangeEvent<HTMLInputElement>
      );
    });
    await new Promise((r) => setTimeout(r, 1500));
    expect(mockDispatch).toBeCalledTimes(2);
    expect(mockfetchCurrent).toBeCalledWith("123");
  });
  it("should fire call with empty city string", async () => {
    const { result } = renderHook(() => useHandleSearchChange());
    const mockEvent = { currentTarget: { value: "" } };
    act(() => {
      result.current.handleSearchChange(
        mockEvent as ChangeEvent<HTMLInputElement>
      );
    });
    await new Promise((r) => setTimeout(r, 1500));
    expect(mockDispatch).toBeCalledTimes(2);
    expect(mockfetchCurrent).toBeCalledWith("Belgrade, RS");
  });

  it("should fire toggle theme", async () => {
    const { result } = renderHook(() => useHandleToggle());
    act(() => {
      const onToggle = result.current;
      onToggle();
    });
    await new Promise((r) => setTimeout(r, 1000));
    expect(mockToggleTheme).toBeCalled();
  });
});
