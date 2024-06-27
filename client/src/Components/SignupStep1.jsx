import React from "react";
import { Button } from "@mui/material";
function SignupStep1({
  handleBack,
  handleNext,
  activeStep,
  steps,
  formData,
  changeHandler,
}) {
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <h1 className="font-bold">Personal Information</h1>
      <p className="text-[12px] text-gray-500 font-semibold">
        Any information about the registration step goes here cloud system or
        cloud computing technology refers to the computing components.
      </p>
      <form className="flex flex-col">
        <div className="flex gap-4">
          <div>
            <label
              className="block uppercase font-semibold text-gray-500 mb-2"
              htmlFor="firstName"
            >
              FIRST NAME
            </label>
            <input
              onChange={changeHandler}
              autoComplete="off"
              type="text"
              id="firstName"
              className="input-class"
              name="firstName"
              value={formData.firstName}
            />
          </div>
          <div>
            <label
              className="block uppercase font-semibold text-gray-500 mb-2"
              htmlFor="lastName"
            >
              LAST NAME
            </label>
            <input 
            value={formData.lastName}
              onChange={changeHandler}
              autoComplete="off"
              type="text"
              id="lastName"
              className="input-class"
              name="lastName"
            />
          </div>
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="password"
          >
            PASSWORD
          </label>
          <input value={formData.password}
            onChange={changeHandler}
            autoComplete="off"
            type="text"
            id="password"
            className="input-class"
            name="password"
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="email"
          >
            EMAIL
          </label>
          <input 
          value={formData.email}
            onChange={changeHandler}
            autoComplete="off"
            type="email"
            id="email"
            className="input-class"
            name="email"
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

export default SignupStep1;
