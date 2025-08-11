import React from "react";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const IncomeFromOtherSource = () => {
  const invoices = [
    {
      invoice: "",
      totalAmount: "",
    },
    {
      invoice: "",
      totalAmount: "",
    },
    {
      invoice: "",
      totalAmount: "",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Label className="font-bold">
        Include income from other sources below. Under Income Source, choose
        from the sources listed here:
      </Label>
      <div className="flex gap-10 text-xs font-light">
        <ul className="list-disc pl-4">
          <li>Alimony</li>
          <li>Automobile Allowance</li>
          <li>Boarder Income</li>
          <li>Capital Gains</li>
          <li>Child Support</li>
          <li>Disability</li>
          <li>Foster Care</li>
        </ul>
        <ul className="list-disc">
          <li>Housing or Parsonage</li>
          <li>Interest and Dividends</li>
          <li>Mortgage Credit Certificate</li>
          <li>Mortgage Differential Payments</li>
          <li>Notes Receivable</li>
          <li>Public Assistance</li>
          <li>Retirement (e.g., Pension, IRA)</li>
        </ul>
        <ul className="list-disc">
          <li>Royalty Payments</li>
          <li>Separate Maintenance</li>
          <li>Social Security</li>
          <li>Trust</li>
          <li>Unemployment Benefits</li>
          <li>VA Compensation</li>
          <li>Other</li>
        </ul>
      </div>
      <Label className="font-light text-xs">
        <span className="font-bold">Note:</span>
        Reveal alimony, child support, separate maintenance, or other income
        ONLY IF you want it considered in determining your qualification for
        this loan
      </Label>

      <Table>
        <TableHeader className="bg-blue-50 rounded-xl text-red-100">
          <TableRow>
            <TableHead>
              <Label className="font-bold">
                Income Source{" "}
                <span className="font-light">– use list above</span>
              </Label>
            </TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="h-[30px]">
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell className="text-right">USD</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default IncomeFromOtherSource;
