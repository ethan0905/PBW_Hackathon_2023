import React from "react";
import "../../assets/css/dashboard/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-board">
      <div className="dash-board-1">
        <div>
          <div className="logo-dash"></div>
        </div>
        <div>
          <h1>Hi, Mélodie !</h1>
        </div>
        <div className="blocks">
          <div>
            <p>My balance</p>
            <div className="graph-box"></div>
          </div>
          <div>
            <p>My transactions</p>
            <div className="trans-box">
            </div>
          </div>
        </div>
      </div>

      <div className="nav-bar-main">
        <div className="nav-bar">
          {/* <button></button> */}
          {/* <button></button> */}
          <button className="create-contract-btn"></button>
          {/* <button></button> */}
          {/* <button></button> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
