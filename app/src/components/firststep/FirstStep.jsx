import React from "react";
import "../../assets/css/first_step/FirstStep.css";
import "../../assets/img/icon.png";
import { useNavigate } from "react-router-dom";

const FirstStep = () => {
  const navigate = useNavigate();
  return (
    // <html>
    <div>
      <div className="bg-login"></div>
      <div className="logo-start">
        <div className="logo-stamp"></div>
        <div className="logo-typo"></div>
      </div>
      <div className="box-start">
        <div className="box-start-div">
          <div className="title_start">
            <h2>A solution for a smarter contract</h2>
            <p>
              Get your first decentralized contract, entirely managed with
              blockchain technology.
            </p>
          </div>
          <div className="btn-div-start" >
            <div className="btn-div-load-start" >
              <div className="loader1"></div>
              <div className="loader2"></div>
              <div className="loader3"></div>
            </div>
            <button className="btn-start" onClick={navigate("/login")}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
