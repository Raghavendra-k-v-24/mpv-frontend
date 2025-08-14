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
const MortgageLoans = () => {
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
  ];
  return (
    <div className="flex flex-col gap-5">
      <Table>
        <TableHeader className="bg-blue-50 rounded-xl">
          <TableRow>
            <TableHead>
              <Label className="font-bold w-[100px]">Creditor Name</Label>
            </TableHead>
            <TableHead className="">Lien Type</TableHead>
            <TableHead>Monthly Payment</TableHead>
            <TableHead>Loan Amount/ Amount to be Drawn</TableHead>
            <TableHead>Monthly Rental Income</TableHead>
            <TableHead>Credit Limit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="h-[30px]">
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.unpaidBalance}</TableCell>
              <TableCell>{invoice.toBePaidOff}</TableCell>
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

export default MortgageLoans;
