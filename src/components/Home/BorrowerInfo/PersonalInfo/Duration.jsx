import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Duration = () => {
  return (
    <div className="flex flex-col gap-5">
      <Label className="font-bold">Duration</Label>
      <CustomInput
        label="Years"
        input={
          <Input type="number" className="w-[300px]" placeholder="Years" />
        }
      />
      <CustomInput
        label="Months"
        input={
          <Input type="number" placeholder="Months" className="w-[300px]" />
        }
      />
    </div>
  );
};

export default Duration;
