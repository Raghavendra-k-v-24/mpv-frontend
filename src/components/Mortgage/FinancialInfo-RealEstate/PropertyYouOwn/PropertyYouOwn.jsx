import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Information_Png from "../../../../assets/information.png";
import { Checkbox } from "@/components/ui/checkbox";

const PropertyYouOwn = () => {
  const invoices1 = [
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
  const invoices2 = [
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
      unpaidBalance: "",
      toBePaidOff: "",
      creditlimit: "",
      type: "",
    },
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
      unpaidBalance: "",
      toBePaidOff: "",
      creditlimit: "",
      type: "",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {/* 1 */}
      <Label className="font-bold">Address</Label>
      <div className="flex gap-10">
        <CustomInput
          label="Street"
          input={
            <Input type="text" placeholder="Street" className="w-[300px]" />
          }
        />
        <CustomInput
          label="Unit Number"
          input={
            <Input
              type="number"
              placeholder="Unit Number"
              className="w-[300px]"
            />
          }
        />
      </div>
      {/* 2 */}
      <div className="flex gap-10">
        <CustomInput
          label="City"
          input={<Input type="text" placeholder="City" className="w-[300px]" />}
        />
        <CustomInput
          label="State"
          input={
            <Input type="number" placeholder="State" className="w-[300px]" />
          }
        />
      </div>
      {/* 3 */}
      <div className="flex gap-10">
        <CustomInput
          label="ZipCode"
          input={
            <Input type="number" placeholder="ZipCode" className="w-[300px]" />
          }
        />
        <CustomInput
          label="Country"
          input={
            <Input type="text" placeholder="Country" className="w-[300px]" />
          }
        />
      </div>
      <Separator />
      {/* 4 */}
      <Table>
        <TableHeader className="bg-blue-50 rounded-xl">
          <TableRow>
            <TableHead>
              <Label className="font-bold w-[100px]">Property Value</Label>
            </TableHead>
            <TableHead>
              <div className="flex gap-1">
                <Label>Status</Label>
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
                    <p>Sold, Pending Sale, or Retained</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-1 w-[120px]">
                <Label className="text-wrap">Intended Occupancy</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={Information_Png}
                      alt="information"
                      width="20px"
                      height="20px"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Investment, Primary Residence, Second Home, Other</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-1 w-[150px]">
                <Label className="text-wrap text-xs">
                  Monthly Insurance,Taxes, Association Dues, etc.
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={Information_Png}
                      alt="information"
                      width="30px"
                      height="30px"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>if not included in Monthly Mortgage Payment</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TableHead>
            <TableHead>Monthly Rental Income</TableHead>
            <TableHead className="text-right">
              <div className="flex gap-1">
                <Label>For LENDER to calculate</Label>
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
                    <p>Net Monthly Rental Incomet</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices1.map((invoice) => (
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
      <Separator />
      {/* 5 */}
      <div className="flex gap-5">
        <Label>Mortgage Loans on this Property</Label>
        <div className="flex items-center gap-2 self-center">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-xs">
            Does not apply
          </Label>
        </div>
      </div>
      {/* 6 */}
      <Table>
        <TableHeader className="bg-blue-50 rounded-xl">
          <TableRow>
            <TableHead>
              <Label className="font-bold w-[100px]">Creditor Name</Label>
            </TableHead>
            <TableHead className="">Account Number</TableHead>
            <TableHead>Monthly Mortgage Payment</TableHead>
            <TableHead>Unpaid Balance</TableHead>
            <TableHead>Monthly Rental Income</TableHead>
            <TableHead className="text-xs font-light">
              To be paid off at or before closing
            </TableHead>
            <TableHead>
              <div className="flex gap-2 w-max">
                <Label>Type</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={Information_Png}
                      alt="information"
                      width="12px"
                      height="12px"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p> FHA, VA, Conventional, USDA-RD, Other</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-1">
                <Label>Credit Limit </Label>
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
                    <p>if applicable</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices2.map((invoice) => (
            <TableRow key={invoice.invoice} className="h-[30px]">
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.unpaidBalance}</TableCell>
              <TableCell>{invoice.toBePaidOff}</TableCell>
              <TableCell>{invoice.creditlimit}</TableCell>
              <TableCell>{invoice.type}</TableCell>
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

export default PropertyYouOwn;
