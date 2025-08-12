import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CustomQuestionnarieInput from "../CustomQuestionnarieInput";
import { Checkbox } from "@/components/ui/checkbox";
import CustomInput from "../CustomInput";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
const MilitaryService = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
      <CustomQuestionnarieInput
        label={
          <Label>
            <span className="font-bold">Military Service</span> – Did you (or
            your deceased spouse) ever serve, or are you currently serving, in
            the United States Armed Forces?
          </Label>
        }
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
      <Label>If YES, check all that apply:</Label>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-xs">
          Currently serving on active duty with projected expiration date of
          service/tour
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
              <Button
                variant="outline"
                id="date"
                className="w-[120px] h-[30px] justify-between font- text-gray-500"
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
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-xs">
          Currently retired, discharged, or separated from service
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-xs">
          Only period of service was as a non-activated member of the Reserve or
          National Guard
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-xs">
          Surviving spouse
        </Label>
      </div>
    </div>
  );
};

export default MilitaryService;
