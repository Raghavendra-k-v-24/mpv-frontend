import { Label } from "@/components/ui/label";
import { Accordion } from "@/components/ui/accordion";
import CustomAccordionItem from "../CustomAccordionItem";
import { Checkbox } from "@/components/ui/checkbox";
import Assets from "./Assets/Assets";
import OtherAssets from "./OtherAssets/OtherAssets";
import Liabilities from "./Liabilities/Liabilities";
import OtherLiabilities from "./OtherLiabilities/OtherLiabilities";
const FinancialInfoAL = () => {
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30">
      <Label className="self-center text-xs text-center">
        This section asks about things you own that are worth money and that you
        want considered to qualify for this loan. It then asks about your
        liabilities (or debts) that you pay each month, such as credit cards,
        alimony, or other expenses.
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
            <Label>
              Assets – Bank Accounts, Retirement, and Other Accounts You Have
            </Label>
          }
          body={<Assets />}
        />
        <CustomAccordionItem
          value={2}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>Other Assets and Credits You Have</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<OtherAssets />}
        />
        <CustomAccordionItem
          value={3}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>
                Liabilities – Credit Cards, Other Debts, and Leases that You Owe
              </Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<Liabilities />}
        />
        <CustomAccordionItem
          value={4}
          header={
            <div className="flex gap-3 justify-between w-full">
              <Label>Other Liabilities and Expenses </Label>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs">
                  Does not apply
                </Label>
              </div>
            </div>
          }
          body={<OtherLiabilities />}
        />
      </Accordion>
    </div>
  );
};

export default FinancialInfoAL;
