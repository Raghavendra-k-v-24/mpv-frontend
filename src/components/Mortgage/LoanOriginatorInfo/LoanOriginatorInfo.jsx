import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
// import Information_Png from "../../../../assets/information.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
const LoanOriginatorInfo = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
      <div className="flex flex-col gap-5 text-xs">
        {/* 1 */}
        <CustomInput
          label="Borrower Name"
          input={<Input type="text" placeholder="Name" className="w-[300px]" />}
        />
        <CustomInput
          label="Street"
          input={
            <Textarea placeholder="Street Address" className="w-[600px]" />
          }
        />
        <div className="flex gap-10">
          <CustomInput
            label="Loan Originator Organization NMLSR ID#"
            input={
              <Input type="number" placeholder="ID" className="w-[300px]" />
            }
          />
          <CustomInput
            label="State License ID#"
            input={
              <Input type="number" placeholder="ID" className="w-[300px]" />
            }
          />
        </div>
        <CustomInput
          label="Loan Originator Name"
          input={<Input type="text" placeholder="ID" className="w-[300px]" />}
        />
        <div className="flex gap-10">
          <CustomInput
            label="Loan Originator NMLSR ID#"
            input={
              <Input type="number" placeholder="ID" className="w-[300px]" />
            }
          />
          <CustomInput
            label="State License ID#"
            input={
              <Input type="number" placeholder="ID" className="w-[300px]" />
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
          <CustomInput
            label="Date"
            input={
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-[300px] justify-between font- text-gray-500"
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
      </div>
    </div>
  );
};

export default LoanOriginatorInfo;
