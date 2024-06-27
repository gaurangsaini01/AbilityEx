import React from "react";
import { Button } from "@mui/material";
function SignupStep2({
  handleBack,
  handleNext,
  activeStep,
  steps,
  formData,
  changeHandler,
}) {
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <h1 className="font-bold">Employee Information</h1>
      <p className="text-[12px] text-gray-500 font-semibold">
        Any information about the registration step goes here cloud system or
        cloud computing technology refers to the computing components.
      </p>
      <form className="flex flex-col">
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="employeeNumber"
          >
            EMPLOYEE NUMBER
          </label>
          <input 
          value={formData.employeeNumber}
            onChange={changeHandler}
            autoComplete="off"
            type="number"
            id="employeeNumber"
            className="input-class"
            name="employeeNumber"
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="corporateName"
          >
            CORPORATE NAME
          </label>
          <input value={formData.corporateName}
            onChange={changeHandler}
            autoComplete="off"
            type="text"
            id="corporateName"
            className="input-class"
            name="corporateName"
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="department"
          >
            Department
          </label>
          <input value={formData.department}
            onChange={changeHandler}
            autoComplete="off"
            type="text"
            id="department"
            className="input-class"
            name="department"
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="role"
          >
            ROLE
          </label>
          <input value={formData.role}
            onChange={changeHandler}
            autoComplete="off"
            type="text"
            id="role"
            className="input-class"
            name="role"
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

export default SignupStep2;
