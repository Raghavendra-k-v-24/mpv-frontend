import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Housing = () => {
  return (
    <div className="flex flex-col gap-5">
      <CustomInput
        label="Housing"
        input={
          <RadioGroup defaultValue="comfortable" className="w-[300px]">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="No primary housing expense" id="r1" />
              <Label htmlFor="r1" className="font-normal">
                No primary housing expense
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Own" id="r2" />
              <Label htmlFor="r2" className="font-normal">
                Own
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Rent" id="r3" />
              <Label htmlFor="r3" className="font-normal">
                Rent
              </Label>
            </div>
          </RadioGroup>
        }
      />
      <CustomInput
        label="Rent Amount (in USD)"
        input={
          <Input
            type="number"
            placeholder="Rent Amount"
            className="w-[300px]"
          />
        }
      />
    </div>
  );
};

export default Housing;
