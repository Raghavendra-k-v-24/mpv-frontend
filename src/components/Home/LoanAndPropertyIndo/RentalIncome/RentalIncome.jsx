import React from "react";
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
const RentalIncome = () => {
  const invoices = [
    {
      invoice: "Expected Monthly Rental Income",
      totalAmount: "",
    },
    {
      invoice: (
        <Label className="font-bold">
          For LENDER to calculate:{" "}
          <span className="font-light text-xs">
            Expected Net Monthly Rental Income
          </span>
        </Label>
      ),
      totalAmount: "",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Table>
        <TableHeader className="bg-blue-50 rounded-xl">
          <TableRow>
            <TableHead>
              Complete if the property is a 2-4 Unit Primary Residence or an
              Investment Property
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
      </Table>
    </div>
  );
};

export default RentalIncome;
