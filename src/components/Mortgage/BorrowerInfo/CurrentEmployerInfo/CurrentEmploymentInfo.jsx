import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
const CurrentEmploymentInfo = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  return (
    <div className="flex flex-col gap-5">
      {/* 1 */}
      <div className="flex gap-10">
        <CustomInput
          label="Employer or Business Name"
          input={<Input type="text" placeholder="Name" className="w-[300px]" />}
        />
        <CustomInput
          label="Phone"
          input={
            <Input type="number" placeholder="Phone" className="w-[300px]" />
          }
        />
      </div>
      {/* 2 */}
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
      {/* 3 */}
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
      {/* 4 */}
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
      <Separator />
      {/* 5 */}
      <div className="flex gap-10">
        <CustomInput
          label="Position or Title"
          input={
            <Input type="text" placeholder="Position" className="w-[300px]" />
          }
        />
        <CustomInput
          label="Start Date"
          input={
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger>
                <Button
                  variant="outline"
                  id="date"
                  className="w-[300px] justify-between text-gray-500"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          }
        />
      </div>
      {/* 6 */}
      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          <Label className="font-bold">How long in this line of work?</Label>
          <CustomInput
            label="Years"
            input={
              <Input type="number" placeholder="Years" className="w-[300px]" />
            }
          />
          <CustomInput
            label="Months"
            input={
              <Input type="text" placeholder="Months" className="w-[300px]" />
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <Label className="font-bold text-md">
            Check if this statement applies:
          </Label>
          <div className="flex items-center gap-3 w-[300px]">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="font-light">
              I am employed by a family member, property seller, real estate
              agent, or other party to the transaction.
            </Label>
          </div>
          <CustomInput
            label="Monthly Income (or Loss)"
            input={
              <Input type="number" placeholder="Amount" className="w-[300px]" />
            }
          />
        </div>
      </div>
      {/* 7 */}
      <div className="flex gap-10">
        <div className="flex items-center gap-3 w-[300px]">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="font-regular">
            Check if you are the Business Owner or Self-Employed
          </Label>
        </div>
        <CustomInput
          label="Ownership Percentage"
          input={
            <RadioGroup defaultValue="comfortable" className="">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="I have an ownership share of less than 25%."
                  id="r1"
                />
                <Label htmlFor="r1" className="font-normal">
                  I have an ownership share of less than 25%.
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="I have an ownership share of 25% or more."
                  id="r2"
                />
                <Label htmlFor="r2" className="font-normal">
                  I have an ownership share of 25% or more.
                </Label>
              </div>
            </RadioGroup>
          }
        />
      </div>
      <Separator />
      {/* 8 */}
      <div className="flex flex-col gap-5">
        <Label className="font-bold">Gross Monthly Income</Label>
        {/* 1 */}
        <div className="flex gap-10">
          <CustomInput
            label="Base ($)"
            input={
              <Input
                type="number"
                placeholder="Base per month"
                className="w-[300px]"
              />
            }
          />
          <CustomInput
            label="Overtime ($)"
            input={
              <Input
                type="number"
                placeholder="Overtime per month"
                className="w-[300px]"
              />
            }
          />
        </div>
        {/* 2 */}
        <div className="flex gap-10">
          <CustomInput
            label="Bonus ($)"
            input={
              <Input
                type="number"
                placeholder="Bonus per month"
                className="w-[300px]"
              />
            }
          />
          <CustomInput
            label="Commission ($)"
            input={
              <Input
                type="number"
                placeholder="Commission per month"
                className="w-[300px]"
              />
            }
          />
        </div>
        {/* 3 */}
        <div className="flex gap-10">
          <CustomInput
            label="Military Entitlements"
            input={
              <Input
                type="number"
                placeholder="Military Entitlements per month"
                className="w-[300px]"
              />
            }
          />
          <CustomInput
            label="Other ($)"
            input={
              <Input
                type="number"
                placeholder="Other per month"
                className="w-[300px]"
              />
            }
          />
        </div>
        {/* 4 */}
        <CustomInput
          label="Total ($)"
          input={
            <Input
              type="number"
              placeholder="Total per month"
              className="w-[300px]"
            />
          }
        />
      </div>
    </div>
  );
};

export default CurrentEmploymentInfo;
