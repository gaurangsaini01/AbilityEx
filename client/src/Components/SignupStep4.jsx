import React from "react";
import { Button } from "@mui/material";
function SignupStep4({
  handleBack,
  handleNext,
  formData,
  changeHandler,
}) {
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <h1 className="font-bold">Expertise</h1>
      <p className="text-[12px] text-gray-500 font-semibold">
        Expertise in a more general category like marketing , technology , sales
        , information and technology etc .
      </p>
      <form className="flex flex-col">
        <select
          name="expertise"
          id="expertise"
          className="p-2 border-2 border-gray-400 rounded-md"
          onChange={changeHandler}
          value={formData.expertise}
        >
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="technology">Technology</option>
          <option value="design">Design</option>
          <option value="management">Management</option>
          <option value="government">Government</option>
          <option value="finance">Finance</option>
          <option value="health">Health</option>
          <option value="social">Social</option>
        </select>
        <div className="flex">
          <Button
            variant="contained"
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Back
          </Button>

          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 1, mr: 1 }}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupStep4;
