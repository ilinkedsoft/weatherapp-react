import { IStore } from "../common/interfaces/IStore";

export const mockInitialStore: IStore = {
  theme: {
    theme: "dark",
  },
  current: {
    loading: false,
    data: null,
    error: null,
  },
};
