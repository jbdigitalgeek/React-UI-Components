import React from "react";
import "./App.scss";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import "./components/ButtonComponents/Button.scss";
import "./components/DisplayComponents/Display.scss";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="buttons">
        <div className="row-1">
          <ActionButton className="clear-contents" text="clear" />
          <NumberButton buttonStyle="mod-button" text="÷" />
        </div>
        <div className="row-2">
          <NumberButton buttonStyle="num-button" text="7" />
          <NumberButton buttonStyle="num-button" text="8" />
          <NumberButton buttonStyle="num-button" text="9" />
          <NumberButton buttonStyle="mod-button" text="x" />
        </div>
        <div className="row-3">
          <NumberButton buttonStyle="num-button" text="4" />
          <NumberButton buttonStyle="num-button" text="5" />
          <NumberButton buttonStyle="num-button" text="6" />
          <NumberButton buttonStyle="mod-button" text="-" />
        </div>
        <div className="row-4">
          <NumberButton buttonStyle="num-button" text="1" />
          <NumberButton buttonStyle="num-button" text="2" />
          <NumberButton buttonStyle="num-button" text="3" />
          <NumberButton buttonStyle="mod-button" text="+" />
        </div>
        <div className="bottom-row">
          <NumberButton buttonStyle="zero" text="0" />
          <NumberButton buttonStyle="mod-button" text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
