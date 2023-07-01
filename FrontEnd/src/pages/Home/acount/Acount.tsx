import React from "react";
import "./Acount.scss";
import MyAcountData from "../../../components/MyAcount/MyAcountData";

function Acount() {
  return (
    <div className="myAcount">
      <div className="acount-container">
        <h1>Mi Perfil</h1>
        <span></span>
        <MyAcountData />
      </div>
    </div>
  );
}

export default Acount;
