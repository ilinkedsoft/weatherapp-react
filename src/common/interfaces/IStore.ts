import { ICurrentState } from "./ICurrentState";
import { IThemeState } from "./IThemeState";

export interface IStore {
  theme: IThemeState;
  current: ICurrentState;
}
