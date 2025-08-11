import React from "react";
import { Input } from "@/components/ui/input";
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
import { Label } from "@/components/ui/label";
const OtherLiabilities = () => {
  const invoices = [
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
      unpaidBalance: "",
      toBePaidOff: "",
    },

    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
      unpaidBalance: "",
      toBePaidOff: "",
    },
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
      unpaidBalance: "",
      toBePaidOff: "",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <Label className="font-bold">
        Include all other liabilities and expenses below. Choose from the types
        listed here:
      </Label>
      <div className="flex gap-10 text-xs font-light">
        <ul className="list-disc flex gap-10 pl-4">
          <li>Alimony</li>
          <li>Child Support</li>
          <li>Separate Maintenance</li>
          <li>Job Related Expenses</li>
          <li>Other</li>
        </ul>
      </div>
      <Table>
        <TableHeader className="bg-blue-50 rounded-xl text-red-100">
          <TableRow>
            <TableHead>
              <Label className="font-bold">
                Liability or Expense Type{" "}
                <span className="font-light">– use list above</span>
              </Label>
            </TableHead>
            <TableHead className="text-right">Monthly Payment</TableHead>
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
      </Table>
    </div>
  );
};

export default OtherLiabilities;
