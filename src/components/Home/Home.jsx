import { useState } from "react";
import FileUpload from "./FileUpload";
import BorrowerInfo from "./BorrowerInfo/BorrowerInfo";
import { Button } from "@/components/ui/button";
import CustomStepper from "./CustomStepper";

const Home = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 px:50 lg:px-60 gap-3">
      <FileUpload />
      <CustomStepper step={step} />
      <BorrowerInfo />
      <div className="w-max h-full flex gap-2">
        <Button
          variant="outline"
          className="w-[100px] bg-blue-950 text-white hover:bg-blue-950 hover:text-white"
          onClick={() => setStep((prev) => prev - 1)}
          disabled={step == 0}
        >
          Back
        </Button>
        <Button
          variant="outline"
          className="w-[100px] bg-blue-950 text-white hover:bg-blue-950 hover:text-white"
          onClick={() => setStep((prev) => prev + 1)}
          disabled={step == 8}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;
