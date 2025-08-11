import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const CreditType = () => {
  return (
    <div className="flex flex-col gap-5">
      <CustomInput
        label="Type of Credit"
        input={
          <RadioGroup defaultValue="comfortable" className="w-[300px]">
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="I am applying for individual credit."
                id="r1"
              />
              <Label htmlFor="r1" className="font-normal">
                I am applying for individual credit.
              </Label>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Permanent Resident Alien" id="r2" />
                <Label htmlFor="r2" className="font-normal">
                  I am applying for joint credit
                </Label>
              </div>
            </div>
          </RadioGroup>
        }
      />
      <CustomInput
        label="Total number of Borrowers"
        input={
          <Input
            type="text"
            placeholder="Number of Borrowers"
            className="w-[300px]"
            disabled
          />
        }
      />
      <CustomInput
        label="Each Borrower intends to apply for joint credit"
        input={
          <Input
            type="text"
            className="w-[300px]"
            placeholder="Your initials"
            disabled
          />
        }
      />
    </div>
  );
};

export default CreditType;
