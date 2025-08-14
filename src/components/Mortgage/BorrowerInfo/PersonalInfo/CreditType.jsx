import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { FORMDATA } from "../../../../redux";

const CreditType = () => {
  const data = useSelector((store) => store.formData);
  const dispatch = useDispatch();
  const handleRadioChange = (name, value) => {
    dispatch(FORMDATA.setFormData({ [name]: value }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(FORMDATA.setFormData({ [name]: value }));
  };
  return (
    <div className="flex flex-col gap-5">
      <CustomInput
        label="Type of Credit"
        input={
          <RadioGroup
            className="w-[300px]"
            value={data.Data.type_of_credit}
            onValueChange={(e) => handleRadioChange("type_of_credit", e)}
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Individual" id="r1" />
              <Label htmlFor="r1" className="font-normal">
                I am applying for individual credit.
              </Label>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="Joint" id="r2" />
                <Label htmlFor="r2" className="font-normal">
                  I am applying for joint credit
                </Label>
              </div>
            </div>
          </RadioGroup>
        }
      />
      <CustomInput
        label="Total number of Borrowers"
        input={
          <Input
            type="number"
            name="number_of_borrowers"
            placeholder="Number of Borrowers"
            className="w-[300px]"
            value={data.Data.number_of_borrowers}
            onChange={handleChange}
          />
        }
      />
      <CustomInput
        label="Each Borrower intends to apply for joint credit"
        input={
          <Input
            type="text"
            name="initials"
            className="w-[300px]"
            placeholder="Your initials"
            value={data.Data.initials}
            onChange={handleChange}
          />
        }
      />
    </div>
  );
};

export default CreditType;
