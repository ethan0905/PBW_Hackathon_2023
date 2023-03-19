import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import "../../assets/css/first_step/FirstStep.css";
import "../../assets/img/icon.png";

function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={3}
      position="bottom"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 29 }}
    />
  );
}

function NextButton() {
  return (
    <Button variant="contained" position="bottom">
      Next
    </Button>
  );
}

const FirstStep = () => {
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
          <div className="btn-div-start">
            <div className="btn-div-load-start">
              <div className="loader1"></div>
              <div className="loader2"></div>
              <div className="loader3"></div>
            </div>
            <button className="btn-start">Next</button>
          </div>
        </div>
      </div>
    </div>
    // </html>
  );
};

export default FirstStep;
