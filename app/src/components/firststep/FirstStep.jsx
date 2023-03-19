import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';

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
        <Button variant="contained"
        position="bottom"
        >Next</Button>
    )
  }

const FirstStep = () => {
    return (
        <div>
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
    );
    }

export default FirstStep;