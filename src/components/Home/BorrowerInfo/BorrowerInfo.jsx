import { Label } from "@/components/ui/label";
import { Accordion } from "@/components/ui/accordion";
import CustomAccordionItem from "../CustomAccordionItem";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import CurrentEmploymentInfo from "./CurrentEmploymentInfo";
import AdditionalEmploymentInfo from "./AdditionalEmploymentInfo";
import PreviousEmploymentInfo from "./PreviousEmploymentInfo";
import IncomeFromOtherSource from "./IncomeFromOtherSource";

const BorrowerInfo = () => {
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
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
            <Label>Current Employement/ Self Employment and Income</Label>
          }
          body={<CurrentEmploymentInfo />}
        />
        <CustomAccordionItem
          value={3}
          header={
            <Label>
              Additional Employement/ Self Employment and Income{" "}
              <span className="text-xs">(If Applicable)</span>
            </Label>
          }
          body={<AdditionalEmploymentInfo />}
        />
        <CustomAccordionItem
          value={4}
          header={
            <Label>
              Previous Employement/ Self Employment and Income{" "}
              <span className="text-xs">(If Applicable)</span>
            </Label>
          }
          body={<PreviousEmploymentInfo />}
        />
        <CustomAccordionItem
          value={5}
          header={<Label>Income from Other Sources</Label>}
          body={<IncomeFromOtherSource />}
        />
      </Accordion>
    </div>
  );
};

export default BorrowerInfo;
