import { useState } from "react";
import FileUpload from "./FileUpload";
import BorrowerInfo from "./BorrowerInfo/BorrowerInfo";
import { Button } from "@/components/ui/button";
import CustomStepper from "./CustomStepper";
import FinancialInfoAL from "./FinancialInfo-Assets&Liabilities/FinancialInfoAL";
import FinancialInfoRE from "./FinancialInfo-RealEstate/FinancialInfoRE";
import LoanAndPropertyInfo from "./LoanAndPropertyIndo/LoadAndPropertyInfo";
import Declarations from "./Declarations/Declarations";
import Acknowledgments from "./Acknowledgments/Acknowledgments";
import MilitaryService from "./MilitaryService/MilitaryService";
import DemographicInfo from "./DemographicInfo/DemographicInfo";
import LoanOriginatorInfo from "./LoanOriginatorInfo/LoanOriginatorInfo";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Mortgage = () => {
  const [step, setStep] = useState(0);
  const stepComponent = [
    <BorrowerInfo />,
    <FinancialInfoAL />,
    <FinancialInfoRE />,
    <LoanAndPropertyInfo />,
    <Declarations />,
    <Acknowledgments />,
    <MilitaryService />,
    <DemographicInfo />,
    <LoanOriginatorInfo />,
  ];
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 px:50 lg:px-60 gap-5">
      <FileUpload />
      <CustomStepper step={step} />
      <div className="w-full flex">
        <ChevronLeft
          className={`text-blue-900 hover:text-blue-600 ${
            step === 0 ? "opacity-30 cursor-not-allowed" : ""
          }`}
          onClick={() => step > 0 && setStep((prev) => prev - 1)}
        />
        {stepComponent[step]}
        <ChevronRight
          className={`text-blue-900 hover:text-blue-700 ${
            step === 8 ? "opacity-30 cursor-not-allowed" : ""
          }`}
          onClick={() => setStep((prev) => Math.min(prev + 1, 8))}
        />
      </div>
      {/* <div className="w-max h-full flex gap-2">
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
      </div> */}
      {step == 8 && (
        <Button
          variant="outline"
          className={`w-[100px] mt-3 bg-blue-950 text-white hover:bg-blue-950 hover:text-white ${
            step == 8 && "bg-green-950 hover:bg-green-900"
          }`}
          onClick={() => setStep((prev) => Math.min(prev + 1, 8))}
        >
          {step == 8 ? "Submit" : "Next"}
        </Button>
      )}
    </div>
  );
};

export default Mortgage;
