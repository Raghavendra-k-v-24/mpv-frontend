import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactInformation = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <Label className="font-bold text-md">Contact Information</Label>
      <div className="flex gap-10">
        <CustomInput
          label="Home Phone"
          input={
            <Input type="text" className="w-[300px]" placeholder="Home Phone" />
          }
        />
        <CustomInput
          label="Cell Phone"
          input={
            <Input type="text" className="w-[300px]" placeholder="Cell Phone" />
          }
        />
      </div>
      <div className="flex gap-10">
        <CustomInput
          label="Email"
          input={
            <Input type="email" placeholder="Email" className="w-[300px]" />
          }
        />
        <div className="w-min flex gap-2">
          <CustomInput
            label="Work Phone"
            input={
              <Input
                type="text"
                placeholder="Work Phone"
                className="w-[300px]"
              />
            }
          />
          <CustomInput
            label="Ext"
            input={
              <Input
                type="number"
                className="w-[120px]"
                placeholder="Extension"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
