import React from "react";
import CustomInput from "../../CustomInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const LoanInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* 1 */}
      <div className="flex gap-10">
        <CustomInput
          label="Loan Amount"
          input={
            <Input
              type="number"
              placeholder="Loan Amount"
              className="w-[300px]"
            />
          }
        />
        <CustomInput
          label="Loan Purpose"
          input={
            <RadioGroup defaultValue="comfortable" className="w-[300px]">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Purchase" id="r1" />
                <Label htmlFor="r1" className="font-normal">
                  Purchase
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Refinance" id="r2" />
                <Label htmlFor="r2" className="font-normal">
                  Refinance
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Other" id="r3" />
                <Label htmlFor="r3" className="font-normal">
                  Other(specify)
                </Label>
              </div>
              <Input type="number" placeholder="Other" className="w-[300px]" />
            </RadioGroup>
          }
        />
      </div>
      <Separator />
      {/* 2 */}
      <div className="flex flex-col gap-5">
        <Label className="font-bold">Property Address</Label>
        {/* 1 */}
        <div className="flex gap-10">
          <CustomInput
            label="Street"
            input={
              <Input type="text" placeholder="Street" className="w-[300px]" />
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
            input={
              <Input type="text" placeholder="City" className="w-[300px]" />
            }
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
              <Input
                type="number"
                placeholder="ZipCode"
                className="w-[300px]"
              />
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
          <CustomInput
            label="Number of Units"
            input={
              <Input type="number" placeholder="Units" className="w-[300px]" />
            }
          />
          <CustomInput
            label="Property Value"
            input={
              <Input type="number" placeholder="Value" className="w-[300px]" />
            }
          />
        </div>
        {/* 5 */}
        <div className="flex gap-10">
          <CustomInput
            label="Occupancy"
            input={
              <RadioGroup defaultValue="comfortable" className="w-[300px]">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="Primary Residence" id="r1" />
                  <Label htmlFor="r1" className="font-normal">
                    Primary Residence
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="Second Home" id="r2" />
                  <Label htmlFor="r2" className="font-normal">
                    Second Home
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="Investment Property" id="r3" />
                  <Label htmlFor="r3" className="font-normal">
                    Investment Property
                  </Label>
                </div>
              </RadioGroup>
            }
          />
          <div className="flex items-center gap-2">
            <Label htmlFor="terms">FHA Secondary Residence</Label>
            <Checkbox id="terms" />
          </div>
        </div>
      </div>
      <Separator />
      {/* 3 */}
      <div className="flex flex-col gap-5">
        {/* 1 */}
        <div className="flex justify-between">
          <div>
            <Label>Mixed-Use Property</Label>
            <Label className="text-xs font-light">
              If you will occupy the property, will you set aside space within
              the property to operate your own business? (e.g., daycare
              facility, medical office, beauty/barber shop)
            </Label>
          </div>
          <CustomInput
            label=""
            input={
              <RadioGroup defaultValue="comfortable" className="w-[300px] flex">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="No" id="r1" />
                  <Label htmlFor="r1" className="font-normal">
                    No
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="Yes" id="r2" />
                  <Label htmlFor="r2" className="font-normal">
                    Yes
                  </Label>
                </div>
              </RadioGroup>
            }
          />
        </div>
        {/* 2 */}
        <div className="flex justify-between">
          <div>
            <Label>Manufactured Home</Label>
            <Label className="text-xs font-light">
              Is the property a manufactured home? (e.g., a factory built
              dwelling built on a permanent chassis)
            </Label>
          </div>
          <CustomInput
            label=""
            input={
              <RadioGroup defaultValue="comfortable" className="w-[300px] flex">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="No" id="r1" />
                  <Label htmlFor="r1" className="font-normal">
                    No
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="Yes" id="r2" />
                  <Label htmlFor="r2" className="font-normal">
                    Yes
                  </Label>
                </div>
              </RadioGroup>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LoanInfo;
