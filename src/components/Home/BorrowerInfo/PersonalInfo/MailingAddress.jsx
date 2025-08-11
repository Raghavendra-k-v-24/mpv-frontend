import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import Duration from "./Duration";
import Housing from "./Housing";
import { Checkbox } from "@/components/ui/checkbox";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Information_Png from "../../../../assets/information.png";

const MailingAddress = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <Label className="font-bold text-md">Mailing Address</Label>
        <HoverCard>
          <HoverCardTrigger asChild>
            <img
              src={Information_Png}
              alt=""
              className="h-[12px] w-[12px] mt-1"
            />
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <Label className="text-xs">If different from current address</Label>
          </HoverCardContent>
        </HoverCard>
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
    </div>
  );
};

export default MailingAddress;
