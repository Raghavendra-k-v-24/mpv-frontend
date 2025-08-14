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
const Assets = () => {
  const invoices = [
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
    },
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
    },
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
    },
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
    },
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <Label className="font-bold">
        Include all accounts below. Under Account Type, choose from the types
        listed here:
      </Label>
      <div className="flex gap-10 text-xs font-light">
        <ul className="list-disc pl-4">
          <li>Checking</li>
          <li>Savings</li>
          <li>Money Market</li>
          <li>Certificate of Deposit</li>
          <li>Mutual Fund</li>
        </ul>
        <ul className="list-disc">
          <li>Stocks</li>
          <li>Stock Options</li>
          <li>Bonds</li>
          <li>Retirement (e.g., 401k, IRA)</li>
          <li>Bridge Loan Proceeds</li>
        </ul>
        <ul className="list-disc">
          <li>Individual Development Account</li>
          <li>Trust Account</li>
          <li>Cash Value of Life Insurance (used for the transaction)</li>
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
            <TableHead>Financial Institution</TableHead>
            <TableHead>Account Number </TableHead>
            <TableHead className="text-right">Cash or Market Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="h-[30px]">
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">USD</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Assets;
