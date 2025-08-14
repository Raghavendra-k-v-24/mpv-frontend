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
const OtherAssets = () => {
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
  ];

  return (
    <div className="flex flex-col gap-5">
      <Label className="font-bold">
        Include all other assets and credits below. Under Asset or Credit Type,
        choose from the types listed here:
      </Label>
      <div className="flex gap-10 text-xs font-light">
        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Assets</Label>
          <ul className="list-disc pl-4">
            <li>
              Proceeds from Real Estate Property to be sold on or before closing
            </li>
            <li>Proceeds from Sale of Non-Real Estate Asset</li>
            <li>Secured Borrowed Funds</li>
            <li>Unsecured Borrowed Funds</li>
            <li>Other</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Credits</Label>
          <div className="flex gap-5">
            <ul className="list-disc pl-4">
              <li>Earnest Money</li>
              <li>Employer Assistance</li>
              <li>Lot Equity</li>
              <li>Relocation Funds</li>
            </ul>
            <ul className="list-disc pl-4">
              <li>Rent Credit</li>
              <li>Sweat Equity</li>
              <li>Trade Equity</li>
            </ul>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-blue-50 rounded-xl text-red-100">
          <TableRow>
            <TableHead>
              <Label className="font-bold">
                Asset or Credit Type{" "}
                <span className="font-light">– use list above</span>
              </Label>
            </TableHead>
            <TableHead className="text-right">Cash or Market Value</TableHead>
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

export default OtherAssets;
