import { Label } from "@/components/ui/label";
import React from "react";

const CustomInput = ({ label, input }) => {
  const toSnakeCase = (str) => {
    return str
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "_");
  };
  const id = toSnakeCase(label);
  return (
    <div className="w-max flex flex-col gap-1">
      <Label htmlFor={id} className={`font-medium text-md `}>
        {label}
      </Label>
      {React.cloneElement(input, { id: id })}
    </div>
  );
};

export default CustomInput;
