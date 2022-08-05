import React from "react";
import { useNavigate } from "react-router-dom";

const Navget = (props) => {
  const { text, navget } = props;
  const navgetMenu = useNavigate();
  const handleNavgetValue = () => {
    navgetMenu(navget);
  };
  return (
    <div>
      <button onClick={handleNavgetValue}>{text}</button>
    </div>
  );
};

export default Navget;
