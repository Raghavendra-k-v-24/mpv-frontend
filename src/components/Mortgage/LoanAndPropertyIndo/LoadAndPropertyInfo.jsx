import { Label } from "@/components/ui/label";
import { Accordion } from "@/components/ui/accordion";
import CustomAccordionItem from "../CustomAccordionItem";
import { Checkbox } from "@/components/ui/checkbox";
import LoanInfo from "./LoanInfo/LoanInfo";
import MortgageLoans from "./MortgageLoans/MortgageLoans";
import RentalIncome from "./RentalIncome/RentalIncome";
import GiftsOrGrants from "./GiftsOrGrants/GiftsOrGrants";

const LoanAndPropertyInfo = () => {
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
      <Label className="self-center text-xs text-center">
        This section asks about the loan’s purpose and the property you want to
        purchase or refinance.
      </Label>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        orientation="vertical"
      >
        <CustomAccordionItem
          value={1}
          header={<Label>Loan and Property Information</Label>}
          body={<LoanInfo />}
        />
        <CustomAccordionItem
          value={2}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>
                Other New Mortgage Loans on the Property You are Buying or
                Refinancing
              </Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<MortgageLoans />}
        />
        <CustomAccordionItem
          value={3}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label className="flex items-baseline">
                Rental Income on the Property You Want to Purchase{" "}
                <span className="text-xs">(For Purchase Only)</span>
              </Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<RentalIncome />}
        />
        <CustomAccordionItem
          value={4}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>
                Gifts or Grants You Have Been Given or Will Receive for this
                Loan
              </Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<GiftsOrGrants />}
        />
      </Accordion>
    </div>
  );
};

export default LoanAndPropertyInfo;
