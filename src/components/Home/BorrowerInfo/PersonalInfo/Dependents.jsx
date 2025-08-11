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
        additionalCssForLabel="text-xs"
        input={
          <Input
            type="text"
            id="Number of Dependents"
            placeholder="Dependents"
            // value={data?.borrower_name || ""}
            // onChange={handleChange}
          />
        }
      />
      <CustomInput
        label="Ages of Dependents"
        additionalCssForLabel="text-xs"
        input={
          <Input
            type="text"
            id="Ages of Dependents"
            placeholder="Use a ',' seperator"
            // value={data?.borrower_name || ""}
            // onChange={handleChange}
          />
        }
      />
    </div>
  );
};

export default Dependents;
