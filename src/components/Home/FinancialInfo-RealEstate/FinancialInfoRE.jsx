import { Label } from "@/components/ui/label";
import { Accordion } from "@/components/ui/accordion";
import CustomAccordionItem from "../CustomAccordionItem";
import { Checkbox } from "@/components/ui/checkbox";
import PropertyYouOwn from "./PropertyYouOwn/PropertyYouOwn";
import AdditionalProperty1 from "./AdditionalProperty1/AdditionalProperty1";
import AdditionalProperty2 from "./AdditionalProperty2/AdditionalProperty2";

const FinancialInfoRE = () => {
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
      <Label className="self-center text-xs text-center">
        This section asks you to list all properties you currently own and what
        you owe on them.
      </Label>
      <div className="flex items-center gap-2 self-center">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-xs">
          I do not own any real estate
        </Label>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        orientation="vertical"
      >
        <CustomAccordionItem
          value={1}
          header={
            <Label>
              Property You Own{" "}
              <span className="text-xs">
                ( If you are refinancing, list the property you are refinancing
                FIRST )
              </span>
            </Label>
          }
          body={<PropertyYouOwn />}
        />
        <CustomAccordionItem
          value={2}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>Complete Information for Additional Property</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<AdditionalProperty1 />}
        />
        <CustomAccordionItem
          value={3}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>Complete Information for Additional Property</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<AdditionalProperty2 />}
        />
      </Accordion>
    </div>
  );
};

export default FinancialInfoRE;
