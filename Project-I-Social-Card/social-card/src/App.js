import React from 'react';
import "../src/App.scss";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="container">
      <div className="app-contents">
      <HeaderContainer />
      <CardContainer />
      </div>
    </div>
  );
};

export default App;
