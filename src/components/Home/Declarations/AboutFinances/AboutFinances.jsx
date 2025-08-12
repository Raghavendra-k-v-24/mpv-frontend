import React from "react";
import CustomQuestionnarieInput from "../CustomQuestionnarieInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
const AboutFinances = () => {
  return (
    <ul className="list-disc pl-2 flex flex-col gap-5">
      {/* 1 */}
      <li>
        <CustomQuestionnarieInput
          label="Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?"
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
      {/* 2 */}
      <li>
        <CustomQuestionnarieInput
          label="Are there any outstanding judgments against you?"
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
        <CustomQuestionnarieInput
          label="Are you currently delinquent or in default on a Federal debt?"
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
      {/* 4 */}
      <li>
        <CustomQuestionnarieInput
          label="Are you a party to a lawsuit in which you potentially have any personal financial liability?"
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
      {/* 5 */}
      <li>
        <CustomQuestionnarieInput
          label="Have you conveyed title to any property in lieu of foreclosure in the past 7 years?"
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
      {/* 6 */}
      <li>
        <CustomQuestionnarieInput
          label="Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the property was sold to a
third party and the Lender agreed to accept less than the outstanding mortgage balance due?"
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
      {/* 7 */}
      <li>
        <CustomQuestionnarieInput
          label="Have you had property foreclosed upon in the last 7 years?"
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
      {/* 8 */}
      <li>
        <div className="flex flex-col gap-2">
          <Label>Have you declared bankruptcy within the past 7 years?</Label>
          <CustomQuestionnarieInput
            label={
              <div className="flex flex-col gap-5">
                <Label className="text-xs font-light">
                  If YES, identify the type(s) of bankruptcy:
                </Label>
                <div className="flex gap-5">
                  <div className="flex items-center gap-2 ">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-xs font-light">
                      Chapter 7
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-xs font-light">
                      Chapter 11
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-xs font-light">
                      Chapter 12
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-xs font-light">
                      Chapter 13
                    </Label>
                  </div>
                </div>
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

export default AboutFinances;
