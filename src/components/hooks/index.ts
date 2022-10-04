import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { fetchCurrentWeather } from "../../store/slices/current.slice";
import { toggleTheme } from "../../store/slices/theme.slice";

export const useHandleSearchChange = () => {
  const [searchCity, setSearchCity] = useState("");
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = useCallback(
    debounce((searchTxt: string) => {
      dispatch(fetchCurrentWeather(searchTxt || "Belgrade, RS"))
    }, 1000),
    []
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchCity = (event.currentTarget as HTMLInputElement).value;
    setSearchCity(searchCity);
    search(searchCity);
  };

  useEffect(() => {
    dispatch(fetchCurrentWeather('Belgrade, RS'));
  }, [dispatch]);

  return { searchCity, handleSearchChange };
};

export const useHandleToggle = () => {
  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(toggleTheme());

  return onToggle;
};
