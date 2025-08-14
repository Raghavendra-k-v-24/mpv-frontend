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
const Liabilities = () => {
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
        List all liabilities below (except real estate) and include deferred
        payments. Under Account Type, choose from the types listed here:
      </Label>
      <div className="flex gap-10 text-xs font-light">
        <ul className="list-disc flex gap-10 pl-4">
          <li>Revolving (e.g., credit cards)</li>
          <li>Installment (e.g., car, student, personal loans)</li>
          <li>Open 30-Day (balance paid monthly)</li>
          <li>Lease (not real estate)</li>
          <li>Other</li>
        </ul>
      </div>
      <Table>
        <TableHeader className="bg-blue-50 rounded-xl text-red-100">
          <TableRow>
            <TableHead>
              <Label className="font-bold">
                Account Type{" "}
                <span className="font-light">– use list above</span>
              </Label>
            </TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Account Number</TableHead>
            <TableHead>Unpaid Balance</TableHead>
            <TableHead className="text-xs font-light">
              To be paid off at or before closing{" "}
            </TableHead>
            <TableHead className="text-right">Monthly Payment</TableHead>
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

export default Liabilities;
