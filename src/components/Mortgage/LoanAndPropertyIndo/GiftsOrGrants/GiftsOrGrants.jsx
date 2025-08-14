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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Information_Png from "../../../../assets/information.png";
const GiftsOrGrants = () => {
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
  ];

  return (
    <div className="flex flex-col gap-5">
      <Label className="font-bold">
        Include all accounts below. Under Account Type, choose from the types
        listed here:
      </Label>
      <div className="flex gap-10 text-xs font-light">
        <ul className="list-disc pl-4">
          <li>Community Nonprofit</li>
          <li>Employer</li>
          <li>Federal Agency</li>
          <li>Local Agency</li>
          <li>Relative</li>
        </ul>
        <ul className="list-disc">
          <li>Religious Nonprofit</li>
          <li>State Agency</li>
          <li>Unmarried Partner</li>
          <li>Lender</li>
          <li>Other</li>
        </ul>
      </div>
      <Table>
        <TableHeader className="bg-blue-50 rounded-xl text-red-100">
          <TableRow>
            <TableHead>
              <div className="flex gap-1">
                <Label>Asset Type</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={Information_Png}
                      alt="information"
                      width="14px"
                      height="14px"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Cash Gift, Gift of Equity, Grant</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TableHead>
            <TableHead>Deposited/Not Deposited</TableHead>
            <TableHead>
              <Label className="font-bold">
                Source <span className="font-light">– use list above</span>
              </Label>
            </TableHead>
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
      </Table>
    </div>
  );
};

export default GiftsOrGrants;
