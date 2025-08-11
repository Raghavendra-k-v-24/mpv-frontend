import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import store, { FORMDATA } from "../../../../redux";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CustomInput from "../../CustomInput";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import Information_Png from "../../../../assets/information.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Dependents from "./Dependents";
import ContactInformation from "./ContactInformation";
import CurrentAddress from "./CurrentAddress";
import FormerAddress from "./FormerAddress";
import MailingAddress from "./MailingAddress";
import { Separator } from "@/components/ui/separator";
import CreditType from "./CreditType";
const PersonalInfo = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const data = useSelector((store) => store.formData);
  const disptach = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    disptach(FORMDATA.setFormData({ [name]: value }));
  };
  return (
    <div className="flex flex-col gap-5">
      {/* 1 */}
      <div className="flex gap-10">
        <CustomInput
          label="Borrower Name"
          input={<Input type="text" placeholder="Name" className="w-[300px]" />}
        />
        <CustomInput
          label="Social Security Number"
          input={
            <Input type="number" placeholder="SSN" className="w-[300px]" />
          }
        />
      </div>
      {/* 2 */}
      <div className="flex gap-10">
        <CustomInput
          label="Date of Birth"
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
        <CustomInput
          label="Alternate Names"
          input={
            <Input
              type="text"
              placeholder="Alternate Names"
              className="w-[300px]"
            />
          }
        />
      </div>
      {/* 3 */}
      <div className="flex gap-10">
        <CustomInput
          label="Citizenship"
          input={
            <RadioGroup defaultValue="comfortable" className="w-[300px]">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="U.S. Citizen" id="r1" />
                <Label htmlFor="r1" className="font-normal">
                  U.S. Citizen
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Permanent Resident Alien" id="r2" />
                <Label htmlFor="r2" className="font-normal">
                  Permanent Resident Alien
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Non-Permanent Resident Alien" id="r3" />
                <Label htmlFor="r3" className="font-normal">
                  Non-Permanent Resident Alien
                </Label>
              </div>
            </RadioGroup>
          }
        />
        <CustomInput
          label="Marital Status"
          input={
            <RadioGroup defaultValue="comfortable" className="w-[300px]">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Married" id="r1" />
                <Label htmlFor="r1" className="font-normal">
                  Married
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Separated" id="r2" />
                <Label htmlFor="r2" className="font-normal">
                  Separated
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Unmarried" id="r3" />
                <Label htmlFor="r3" className="font-normal">
                  Unmarried
                </Label>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <img
                      src={Information_Png}
                      alt=""
                      className="h-[12px] w-[12px]"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <Label className="text-xs">
                      Single, Divorced, Widowed, Civil Union, Domestic
                      Partnership, Registered Reciprocal Beneficiary
                      Relationship.
                    </Label>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </RadioGroup>
          }
        />
      </div>
      {/* 4 */}
      <div className="flex gap-10">
        <CreditType />
        <div className="flex flex-col gap-3">
          <Dependents />
          <CustomInput
            label="Name(s) of Other Borrower(s) Applying for this Loan"
            input={
              <Input
                className="w-[300px]"
                type="text"
                placeholder="Use a ',' seperator"
              />
            }
          />
        </div>
      </div>
      <Separator />
      {/* 5 */}
      <ContactInformation />
      <Separator />
      {/* 6 */}
      <CurrentAddress />
      <Separator />
      {/* 7 */}
      <FormerAddress />
      <Separator />
      {/* 8 */}
      <MailingAddress />
    </div>
  );
};

export default PersonalInfo;
