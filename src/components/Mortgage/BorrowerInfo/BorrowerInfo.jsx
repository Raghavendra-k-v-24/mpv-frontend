import { Label } from "@/components/ui/label";
import { Accordion } from "@/components/ui/accordion";
import CustomAccordionItem from "../CustomAccordionItem";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import CurrentEmploymentInfo from "./CurrentEmployerInfo/CurrentEmploymentInfo";
import AdditionalEmploymentInfo from "./AdditionalEmploymentInfo/AdditionalEmploymentInfo";
import PreviousEmploymentInfo from "./PreviousEmploymentInfo/PreviousEmploymentInfo";
import IncomeFromOtherSource from "./IncomeFromOtherSource/IncomeFromOtherSource";
import { Checkbox } from "@/components/ui/checkbox";

const BorrowerInfo = () => {
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
      <Label className="self-center text-xs text-center">
        This section asks about your personal information and your income from
        employment and other sources, such as retirement, that you want
        considered to qualify for this loan.
      </Label>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        orientation="vertical"
      >
        <CustomAccordionItem
          value={1}
          header={<Label>Personal Information</Label>}
          body={<PersonalInfo />}
        />
        <CustomAccordionItem
          value={2}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>Current Employement/ Self Employment and Income</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<CurrentEmploymentInfo />}
        />
        <CustomAccordionItem
          value={3}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>Additional Employement/ Self Employment and Income</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<AdditionalEmploymentInfo />}
        />
        <CustomAccordionItem
          value={4}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>Previous Employement/ Self Employment and Income </Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<PreviousEmploymentInfo />}
        />
        <CustomAccordionItem
          value={5}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>Income from Other Sources</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<IncomeFromOtherSource />}
        />
      </Accordion>
    </div>
  );
};

export default BorrowerInfo;
