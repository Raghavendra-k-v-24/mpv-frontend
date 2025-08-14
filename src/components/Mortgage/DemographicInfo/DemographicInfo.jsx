import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Information_Png from "../../../assets/information.png";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CustomQuestionnarieInput from "../CustomQuestionnarieInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DemographicInfo = () => {
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
      <Label className="self-center text-xs text-justify">
        The purpose of collecting this information is to help ensure that all
        applicants are treated fairly and that the housing needs of communities
        and neighborhoods are being fulfilled. For residential mortgage lending,
        Federal law requires that we ask applicants for their demographic
        information (ethnicity, sex, and race) in order to monitor our
        compliance with equal credit opportunity, fair housing, and home
        mortgage disclosure laws. You are not required to provide this
        information, but are encouraged to do so. You may select one or more
        designations for "Ethnicity" and one or more designations for "Race."
        The law provides that we may not discriminate on the basis of this
        information, or on whether you choose to provide it. However, if you
        choose not to provide the information and you have made this application
        in person, Federal regulations require us to note your ethnicity, sex,
        and race on the basis of visual observation or surname. The law also
        provides that we may not discriminate on the basis of age or marital
        status information you provide in this application. If you do not wish
        to provide some or all of this information, please check below.
      </Label>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          <Label className="font-bold">
            Ethnicity:{" "}
            <span className="font-light text-xs">Check one or more answer</span>
          </Label>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Hispanic or Latino
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Mexican
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Puerto Rican
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Cuban
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Other Hispanic or Latino – Print origin:
            </Label>
            <Input
              type="text"
              placeholder="Other"
              className="w-[200px] h-[30px]"
            />
            <Tooltip>
              <TooltipTrigger>
                <img
                  src={Information_Png}
                  alt="information"
                  width="14px"
                  height="14px"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  For example: Argentinean, Colombian, Dominican, Nicaraguan,
                  Salvadoran, Spaniard, and so on.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Not Hispanic or Latino
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              I do not wish to provide this information
            </Label>
          </div>
          <Label className="font-bold">Sex:</Label>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Female
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Male
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              I do not wish to provide this information
            </Label>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Label className="font-bold">
            Race:{" "}
            <span className="font-light text-xs">Check one or more answer</span>
          </Label>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              American Indian or Alaska Native – Print name of enrolled or
              principal tribe :
            </Label>
            <Input
              type="text"
              placeholder="Other"
              className="w-[200px] h-[30px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Asian
            </Label>
          </div>
          <div className="flex gap-5 pl-4">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Asian Indian
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Japanese
                </Label>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Chinese
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Korean
                </Label>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Filipino
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Vietnamese
                </Label>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Other Asian – Print race:
            </Label>
            <Input
              type="text"
              placeholder="Other"
              className="w-[200px] h-[30px]"
            />
            <Tooltip>
              <TooltipTrigger>
                <img
                  src={Information_Png}
                  alt="information"
                  width="14px"
                  height="14px"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  For example: Hmong, Laotian, Thai, Pakistani, Cambodian, and
                  so on
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Black or African American
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Native Hawaiian or Other Pacific Islander
            </Label>
          </div>
          <div className="flex gap-5 pl-4">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-xs">
                Native Hawaiian
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-xs">
                Guamanian or Chamorro
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-xs">
                Samoan
              </Label>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Other Pacific Islander – Print race:
            </Label>
            <Input
              type="text"
              placeholder="Other"
              className="w-[200px] h-[30px]"
            />
            <Tooltip>
              <TooltipTrigger>
                <img
                  src={Information_Png}
                  alt="information"
                  width="14px"
                  height="14px"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>For example: Fijian, Tongan, and so on.</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              White
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              I do not wish to provide this information
            </Label>
          </div>
        </div>
      </div>
      <Label className="font-bold">
        To Be Completed by Financial Institution (for application taken in
        person):
      </Label>
      <CustomQuestionnarieInput
        label={
          <Label>
            Was the ethnicity of the Borrower collected on the basis of visual
            observation or surname?
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
      <CustomQuestionnarieInput
        label={
          <Label>
            Was the sex of the Borrower collected on the basis of visual
            observation or surname?
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
      <CustomQuestionnarieInput
        label={
          <Label>
            Was the race of the Borrower collected on the basis of visual
            observation or surname?
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
      <Label className="font-bold">
        The Demographic Information was provided through:
      </Label>

      <RadioGroup defaultValue="comfortable" className="w-full flex">
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="Face-to-Face Interview (includes Electronic Media w/ Video Component)"
            id="r1"
          />
          <Label htmlFor="r1" className="font-normal">
            Face-to-Face Interview (includes Electronic Media w/ Video
            Component)
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="Telephone Interview" id="r2" />
          <Label htmlFor="r2" className="font-normal">
            Telephone Interview
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="Telephone Interview" id="r3" />
          <Label htmlFor="r3" className="font-normal">
            Fax or Mail
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="Telephone Interview" id="r4" />
          <Label htmlFor="r4" className="font-normal">
            Email or Internet
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default DemographicInfo;
