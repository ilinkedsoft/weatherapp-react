import React from "react";
import "./App.scss";
import Current from "../Current";

const App = () => (
  <div className="App">
    <div className="App__WeatherWrapper">
      <div className="App__WeatherCurrent">
        <Current />
      </div>
    </div>
  </div>
);

export default App;
