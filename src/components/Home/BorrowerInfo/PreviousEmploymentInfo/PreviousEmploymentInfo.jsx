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
const PreviousEmploymentInfo = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  return (
    <div className="flex flex-col gap-5">
      <Label className="font-bold">
        Provide at least 2 years of current and previous employment and income.{" "}
      </Label>
      {/* 1 */}
      <div className="flex gap-10">
        <CustomInput
          label="Employer or Business Name"
          input={<Input type="text" placeholder="Name" className="w-[300px]" />}
        />
        <CustomInput
          label="Street"
          input={
            <Input type="text" placeholder="Street" className="w-[300px]" />
          }
        />
      </div>
      {/* 2 */}
      <div className="flex gap-10">
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
        <CustomInput
          label="City"
          input={<Input type="text" placeholder="City" className="w-[300px]" />}
        />
      </div>
      {/* 3 */}
      <div className="flex gap-10">
        <CustomInput
          label="State"
          input={
            <Input type="text" placeholder="State" className="w-[300px]" />
          }
        />
        <CustomInput
          label="ZipCode"
          input={
            <Input type="number" placeholder="ZipCode" className="w-[300px]" />
          }
        />
      </div>
      {/* 4 */}
      <div className="flex gap-10">
        <CustomInput
          label="Country"
          input={
            <Input type="text" placeholder="Country" className="w-[300px]" />
          }
        />
        <CustomInput
          label="Position or Title"
          input={
            <Input type="text" placeholder="Position" className="w-[300px]" />
          }
        />
      </div>
      {/* 5 */}
      <div className="flex gap-10">
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
        <CustomInput
          label="End Date"
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
      <div className="flex items-center gap-3 w-full">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="font-regular">
          Check if you are the Business Owner or Self-Employed
        </Label>
      </div>
      <Separator />
      {/* 8 */}
      <div className="flex flex-col gap-5">
        <Label className="font-bold">Previous Gross Monthly Income</Label>

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

export default PreviousEmploymentInfo;
