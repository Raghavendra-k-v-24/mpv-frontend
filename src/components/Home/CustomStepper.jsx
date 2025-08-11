import { Stepper, Step } from "react-form-stepper";

import colors from "tailwindcss/colors";

const CustomStepper = ({ step }) => {
  return (
    <Stepper
      activeStep={step}
      className="w-full"
      connectorStyleConfig={{
        activeColor: "black",
        completedColor: colors.yellow[500],
        size: 1,
        stepSize: "2em",
      }}
      styleConfig={{
        activeBgColor: "#1c398e",
        completedBgColor: "#162556",
        activeTextColor: "white",
        completedTextColor: colors.gray[300],
        size: "32px",
        circleFontSize: "12px",
        labelFontSize: "12px",
      }}
    >
      <Step label="Borrower Information" />
      <Step
        label={
          <>
            Financial Information
            <br />
            (Assets and Liabilities)
          </>
        }
      />
      <Step
        label={
          <>
            Financial Information
            <br />
            (Real Estate)
          </>
        }
      />
      <Step label="Loan and Property Information" />
      <Step label="Declarations" />
      <Step label="Acknowledgments and Agreements" />
      <Step label="Military Service" />
      <Step label="Demographic Information" />
      <Step label="Loan Originator Information" />
    </Stepper>
  );
};

export default CustomStepper;
