import { Label } from "@/components/ui/label";
import { Accordion } from "@/components/ui/accordion";
import CustomAccordionItem from "../CustomAccordionItem";
import AboutProperty from "./AboutProperty/AboutProperty";
import AboutFinances from "./AboutFinances/AboutFinances";
import { Checkbox } from "@/components/ui/checkbox";

const Declarations = () => {
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
      <Label className="self-center text-xs text-center">
        This section asks you specific questions about the property, your
        funding, and your past financial history.
      </Label>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        orientation="vertical"
      >
        <CustomAccordionItem
          value={1}
          header={
            <Label>About this Property and Your Money for this Loan</Label>
          }
          body={<AboutProperty />}
        />
        <CustomAccordionItem
          value={2}
          header={<Label>About Your Finances</Label>}
          body={<AboutFinances />}
        />
      </Accordion>
    </div>
  );
};

export default Declarations;
