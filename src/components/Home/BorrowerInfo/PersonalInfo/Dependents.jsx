import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Dependents = ({ data }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <Label className="font-bold text-md">Dependents</Label>
      <CustomInput
        label="Number of Dependents"
        input={
          <Input type="text" placeholder="Dependents" className="w-[300px]" />
        }
      />
      <CustomInput
        label="Ages of Dependents"
        input={
          <Input
            type="text"
            placeholder="Use a ',' seperator"
            className="w-[300px]"
          />
        }
      />
    </div>
  );
};

export default Dependents;
