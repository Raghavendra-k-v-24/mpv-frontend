import { useState } from "react";
import FileUpload from "./FileUpload";
import BorrowerInfo from "./BorrowerInfo/BorrowerInfo";
import { Button } from "@/components/ui/button";
import CustomStepper from "./CustomStepper";
import FinancialInfoAL from "./FinancialInfo-Assets&Liabilities/FinancialInfoAL";
import FinancialInfoRE from "./FinancialInfo-RealEstate/FinancialInfoRE";

const Home = () => {
  const [step, setStep] = useState(1);
  const stepComponent = [
    <BorrowerInfo />,
    <FinancialInfoAL />,
    <FinancialInfoRE />,
  ];
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 px:50 lg:px-60 gap-3">
      <FileUpload />
      <CustomStepper step={step} />
      {stepComponent[step]}
      <div className="w-max h-full flex gap-2">
        <Button
          variant="outline"
          className="w-[100px] bg-blue-950 text-white hover:bg-blue-950 hover:text-white"
          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
          disabled={step == 0}
        >
          Back
        </Button>
        <Button
          variant="outline"
          className={`w-[100px] bg-blue-950 text-white hover:bg-blue-950 hover:text-white ${
            step == 8 && "bg-green-950 hover:bg-green-900"
          }`}
          onClick={() => setStep((prev) => Math.min(prev + 1, 8))}
        >
          {step == 8 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Home;
