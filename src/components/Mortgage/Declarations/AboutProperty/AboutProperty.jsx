import React from "react";
import CustomInput from "../../CustomInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import CustomQuestionnarieInput from "../../CustomQuestionnarieInput";
const AboutProperty = () => {
  return (
    <ul className="list-disc pl-2 flex flex-col gap-5">
      {/* 1 */}
      <li>
        <div className="flex flex-col gap-2">
          <CustomQuestionnarieInput
            label="Will you occupy the property as your primary residence? "
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
          <CustomQuestionnarieInput
            label={
              <Label className="text-xs font-light">
                If YES, have you had an ownership interest in another property
                in the last three years?
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
          <Label className="font-light text-xs ml-2">
            If YES, complete (1) and (2) below:{" "}
          </Label>
          <CustomQuestionnarieInput
            label={
              <Label className="text-xs font-light ml-4">
                (1) What type of property did you own: primary residence (PR),
                FHA secondary residence (SR), second home (SH), or investment
                property (IP)?
              </Label>
            }
            input={
              <Input type="text" placeholder="Property" className="w-[300px]" />
            }
          />
          <CustomQuestionnarieInput
            label={
              <Label className="text-xs font-light ml-4">
                (2) How did you hold title to the property: by yourself (S),
                jointly with your spouse (SP), or jointly with another person
                (O)?
              </Label>
            }
            input={
              <Input type="text" placeholder="Title" className="w-[300px]" />
            }
          />
        </div>
      </li>
      {/* 2 */}
      <li>
        <CustomQuestionnarieInput
          label="If this is a Purchase Transaction: Do you have a family relationship or business affiliation with the seller of the property?"
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
      </li>
      {/* 3 */}
      <li>
        <div className="flex flex-col gap-2">
          <CustomQuestionnarieInput
            label="Are you borrowing any money for this real estate transaction (e.g., money for your closing costs or down payment) or
obtaining any money from another party, such as the seller or realtor, that you have not disclosed on this loan application? "
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
          <CustomQuestionnarieInput
            label={
              <Label className="text-xs font-light">
                If YES, what is the amount of this money?
              </Label>
            }
            input={
              <Input type="text" placeholder="Amount" className="w-[300px]" />
            }
          />
        </div>
      </li>
      {/* 4 */}
      <li>
        <div className="flex flex-col gap-3">
          <CustomQuestionnarieInput
            label="(1) Have you or will you be applying for a mortgage loan on another property (not the property securing this loan) on or
                    before closing this transaction that is not disclosed on this loan application? "
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
          <CustomQuestionnarieInput
            label="(2) Have you or will you be applying for any new credit (e.g., installment loan, credit card, etc.) on or before closing this loan that
is not disclosed on this application?"
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
      </li>
      {/* 5 */}
      <li>
        <div className="flex flex-col gap-3">
          <CustomQuestionnarieInput
            label={
              <div>
                Will this property be subject to a lien that could take priority
                over the first mortgage lien, such as a clean energy lien paid
                through your property taxes{" "}
                <span className="text-xs">
                  <i>(e.g., the Property Assessed Clean Energy Program)?</i>
                </span>
              </div>
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
        </div>
      </li>
    </ul>
  );
};

export default AboutProperty;
