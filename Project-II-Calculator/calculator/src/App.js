import React from 'react';
import './App.scss';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './components/ButtonComponents/Button.scss'

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="row-1">
        <ActionButton className="clear-contents" text="clear" />
        <NumberButton buttonStyle="mod-bg" text="÷" /> 
      </div>
      <div className="row-2">
        <NumberButton buttonStyle="" text="7" />
        <NumberButton buttonStyle="" text="8" />
        <NumberButton buttonStyle="" text="9" />
        <NumberButton buttonStyle="" text="x" />
      </div>
      <div className="row-3">
        <NumberButton buttonStyle="" text="4" />
        <NumberButton buttonStyle="" text="5" />
        <NumberButton buttonStyle="" text="6" />
        <NumberButton buttonStyle="" text="-" />
      </div>
      <div className="row-4">
        <NumberButton buttonStyle="" text="1" />
        <NumberButton buttonStyle="" text="2" />
        <NumberButton buttonStyle="" text="3" />
        <NumberButton buttonStyle="" text="+" />
      </div>
      <div className="bottom-row">
        <NumberButton buttonStyle="" text="0" />
        <NumberButton buttonStyle="" text="=" />
      </div>
    
    </div>
  );
};

export default App;
