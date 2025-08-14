import React from "react";
import { Label } from "@/components/ui/label";

const CustomQuestionnarieInput = ({ label, input }) => {
  return (
    <div className="flex justify-between gap-3">
      <Label className="text-justify text-md">{label}</Label>
      <div>{input}</div>
    </div>
  );
};

export default CustomQuestionnarieInput;
