import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import "../../assets/css/first_step/FirstStep.css"

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
        variant="progress"
        steps={3}
        position="bottom"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
      />
    );
  }

  function NextButton() {

    return (
        <Button variant="contained"
        position="bottom"
        style={{ backgroundColor: "white",
        color: "black",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        bottom: "0",
        right: "0",
        margin: "0",
        textTransform: "lowercase"
        }}
        >Next</Button>
    )
  }

const FirstStep = () => {
    return (
       <html>
        <header>
            <title>Payconsent</title>
        </header>
        <body>
        <div className="bg-login">
            <p className="title-style">PAYCONSENT</p>
            <div className="text-style">
            <form>
            <h1>
                A solution for a smarter contract
            </h1>
            <h4>
                Get your first decentralized contract, entirely managed with blockchain technology.
                <ProgressMobileStepper />
                <NextButton />
            </h4>
            </form>
         </div>
        </div>
        </body>
        </html>
    );
    }

export default FirstStep;