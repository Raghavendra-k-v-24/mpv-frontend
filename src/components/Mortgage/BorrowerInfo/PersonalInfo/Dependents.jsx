import React from "react";
import CustomInput from "../../CustomInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { FORMDATA } from "../../../../redux";

const Dependents = () => {
  const data = useSelector((store) => store.formData);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(FORMDATA.setFormData({ [name]: value }));
  };
  return (
    <div className="flex flex-col gap-2 ">
      <Label className="font-bold text-md">Dependents</Label>
      <CustomInput
        label="Number of Dependents"
        input={
          <Input
            type="text"
            name="number_of_dependents"
            placeholder="Dependents"
            className="w-[300px]"
            value={data.Data.number_of_dependents}
            onChange={handleChange}
          />
        }
      />
      <CustomInput
        label="Ages of Dependents"
        input={
          <Input
            type="text"
            name="ages_of_dependents"
            placeholder="Use a ',' seperator"
            className="w-[300px]"
            value={data.Data.ages_of_dependents}
            onChange={handleChange}
          />
        }
      />
    </div>
  );
};

export default Dependents;
