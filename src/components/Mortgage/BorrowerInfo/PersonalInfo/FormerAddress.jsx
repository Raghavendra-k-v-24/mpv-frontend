import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import Duration from "./Duration";
import Housing from "./Housing";
import { Checkbox } from "@/components/ui/checkbox";

const FormerAddress = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <Label className="font-bold text-md">Former Address</Label>
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Does not apply</Label>
        </div>
      </div>
      {/* 1 */}
      <div className="flex gap-10">
        <CustomInput
          label="Street"
          input={
            <Textarea placeholder="Street Address" className="w-[300px]" />
          }
        />
        <CustomInput
          label="Unit Number"
          input={
            <Input
              type="number"
              placeholder="Unit Number"
              className="w-[300px]"
            />
          }
        />
      </div>
      {/* 2 */}
      <div className="flex gap-10">
        <CustomInput
          label="City"
          input={<Input type="text" placeholder="City" className="w-[300px]" />}
        />
        <CustomInput
          label="State"
          input={
            <Input type="text" placeholder="State" className="w-[300px]" />
          }
        />
      </div>
      {/* 3 */}
      <div className="flex gap-10">
        <CustomInput
          label="ZipCode"
          input={
            <Input type="number" placeholder="ZipCode" className="w-[300px]" />
          }
        />
        <CustomInput
          label="Country"
          input={
            <Input type="text" placeholder="Country" className="w-[300px]" />
          }
        />
      </div>
      {/* 4 */}
      <div className="flex gap-10">
        <Housing />
        <Duration />
      </div>
    </div>
  );
};

export default FormerAddress;
