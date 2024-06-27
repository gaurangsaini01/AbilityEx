import React from "react";
import { Button } from "@mui/material";
function SignupStep3({
  handleBack,
  handleNext,
  activeStep,
  steps,
  formData,
  changeHandler,
}) {
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <h1 className="font-bold">Line Manager Information</h1>
      <p className="text-[12px] text-gray-500 font-semibold">
        Any information about the registration step goes here cloud system or
        cloud computing technology refers to the computing components.
      </p>
      <form className="flex flex-col">
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="lineManagerName"
          >
            LINE MANAGER NAME
          </label>
          <input value={formData.lineManagerName}
            onChange={changeHandler}
            autoComplete="off"
            type="text"
            id="lineManagerName"
            className="input-class"
            name="lineManagerName"
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="lineManagerEmail"
          >
            LINE MANAGER EMAIL
          </label>
          <input value={formData.lineManagerEmail}
            autoComplete="off"
            type="email"
            id="lineManagerEmail"
            className="input-class"
            name="lineManagerEmail"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="phoneNumber"
          >
            PHONE NUMBER
          </label>
          <input value={formData.phoneNumber}
            onChange={changeHandler}
            autoComplete="off"
            type="number"
            id="phoneNumber"
            className="input-class"
            name="phoneNumber"
          />
        </div>
        <div className="flex">
          {activeStep !== 0 && (
            <Button
              variant="contained"
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
          )}
          {activeStep !== steps.length && (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Continue
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignupStep3;
