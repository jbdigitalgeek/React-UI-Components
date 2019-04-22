import React from "react";
import "./Header.scss";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";


const HeaderContainer = () => {
  return (
    <div className="header-container">
      
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;