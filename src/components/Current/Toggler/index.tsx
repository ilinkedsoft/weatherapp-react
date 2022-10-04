import React, { FC } from "react";
import { ITogglerComponent } from "../../../common/interfaces/ITogglerComponent";
import "./Toggler.scss";

const Toggler: FC<ITogglerComponent> = ({ onToggle }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        name="theme-toggle"
        data-testid="toggler"
        onChange={onToggle}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Toggler;
