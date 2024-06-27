import {React,useState} from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
function SignupStep1({ handleNext, formData, changeHandler }) {
  const [showPassword, setShowPassword] = useState(false);

  function errorHandler() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !formData.email ||
      !formData.password ||
      !formData.firstName ||
      !formData.lastName
    ) {
      toast.error("Missing Fields");
    } else if (!emailRegex.test(formData.email)) {
      toast.error("Invalid Email");
    } else {
      handleNext();
    }
  }
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <h1 className="font-bold">Personal Information (Mandatory)</h1>
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
        <div className="relative">
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="password"
          >
            PASSWORD
          </label>
          <input
            value={formData.password}
            onChange={changeHandler}
            autoComplete="off"
            type={showPassword ? "text" : "password"}
            id="password"
            className="input-class"
            name="password"
          />
          {showPassword && (
                  <LuEyeOff
                    className="absolute right-[3%] cursor-pointer top-[60%] text-gray-500"
                    onClick={() => setShowPassword(false)}
                  />
                )}
                {!showPassword && (
                  <LuEye
                    className="absolute right-[3%] cursor-pointer top-[60%] text-gray-500"
                    onClick={() => setShowPassword(true)}
                  />
                )}
        </div>
        <div className="mt-2">
          <Button
            variant="contained"
            onClick={errorHandler} //handlenext call kero
            sx={{ mt: 1, mr: 1 }}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupStep1;
