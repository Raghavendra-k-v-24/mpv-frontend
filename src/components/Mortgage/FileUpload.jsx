import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FORMDATA } from "../../redux";
import { Spinner } from "@/components/ui/spinner";

const FileUpload = () => {
  const disptach = useDispatch();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!file) {
      toast.warning("Please select a file to upload");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // const response = await axios.post(
      //   "https://imv2f0l8ch.execute-api.us-east-1.amazonaws.com/v1/users/u002/applications/a002/sections",
      //   {
      //     "PK": "user#u003",

      //     "SK": "app#a001#borrower",

      //     "ApplicationId": "a001",

      //     "UserId": "u001",

      //     "Data": {
      //       "first_name": "name2testfromreact",

      //       "middle_name": "name3",

      //       "last_name": "lastname",

      //       "suffix": "sfx",

      //       "ssn": "1234",

      //       "date_of_birth": "10/10/80",

      //       "citizenship_status": "yes",

      //       "marital_status": "M",
      //     },

      //     "EntityType": "application",

      //     "Category": "mortage",
      //   }
      // );
      // console.log("Success:", response.data);
      const data = response.data;
      console.log(data);
      disptach(FORMDATA.setFormData(data));
      toast.success("Form processed successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };
  return (
    <div className="h-max w-full flex flex-col items-center gap-4 ">
      <Label>
        Have a pre-filled 1003 Mortgage form ready? Upload it below.
      </Label>
      <div className="h-max w-max flex gap-2">
        <Input
          id="form"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="w-max"
        />
        <Button
          type="submit"
          className="w-[100px] bg-blue-950 hover:bg-blue-950"
          onClick={handleSubmit}
        >
          {loading ? <Spinner className="text-white" size="small" /> : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
