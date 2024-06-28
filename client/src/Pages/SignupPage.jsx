import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { IoIosArrowBack } from "react-icons/io";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SignupStep1 from "../Components/SignupStep1";
import SignupStep2 from "../Components/SignupStep2";
import SignupStep3 from "../Components/SignupStep3";
import SignupStep4 from "../Components/SignupStep4";
import SignupStep5 from "../Components/SignupStep5";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    label: "Personal Information",
  },
  {
    label: "Employee Information",
  },
  {
    label: "Line Manager Information",
  },
  {
    label: "Expertise",
  },
  {
    label: "Education",
  },
];

function SignupPage({ loginStatus, setLoginStatus }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (loginStatus) {
      navigate("/dashboard");
    }
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    corporateName: "", // Default value is ""
    employeeNumber: "", // Default value should be a number, but keeping as string for initialization
    department: "", // Default value as per schema
    role: "", // Default value as per schema
    lineManagerName: "",
    lineManagerEmail: "",
    phoneNumber: "", // Default value should be a number, but keeping as string for initialization
    expertise: "marketing", // Default value as per schema
    educationGrade: "",
    yearGraduate: "", // Default value should be a number, but keeping as string for initialization
    schoolName: "",
    subjectStudied: "",
  });

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const components = [
    <SignupStep1
      handleNext={handleNext}
      changeHandler={changeHandler}
      formData={formData}
    />,
    <SignupStep2
      handleBack={handleBack}
      handleNext={handleNext}
      changeHandler={changeHandler}
      formData={formData}
    />,
    <SignupStep3
      handleBack={handleBack}
      handleNext={handleNext}
      changeHandler={changeHandler}
      formData={formData}
    />,
    <SignupStep4
      handleBack={handleBack}
      handleNext={handleNext}
      changeHandler={changeHandler}
      formData={formData}
    />,
    <SignupStep5
      handleBack={handleBack}
      changeHandler={changeHandler}
      formData={formData}
      setLoginStatus={setLoginStatus}
    />,
  ];

  return (
    <div className="flex bg-[#f9fafa]">
      <div className="w-1/3 h-screen lg:block hidden">
        <img
          src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt="signup image"
        />
      </div>
      <div className="lg:w-2/3 w-full flex flex-col items-center justify-center">
        <div>
          <div
            onClick={() => navigate("/")}
            className="flex hover:cursor-pointer font-semibold text-blue-400 items-center gap-1"
          >
            <IoIosArrowBack />
            Back to Login
          </div>
          <h1 className="font-bold text-4xl my-6">Signup</h1>
          <div className="flex md:w-[700px] w-fit h-[500px] rounded-xl bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className="md:w-1/3 md:block hidden p-4 ">
              <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </Box>
            </div>
            <div className="md:w-2/3 w-full">
              <div className="flex flex-col items-center">
                {components[activeStep]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
