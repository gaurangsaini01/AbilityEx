import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SignupStep1 from "../Components/SignupStep1";
import SignupStep2 from "../Components/SignupStep2";
import SignupStep3 from "../Components/SignupStep3";
import SignupStep4 from "../Components/SignupStep4";
import SignupStep5 from "../Components/SignupStep5";

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



function SignupPage() {

  const [formData,setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    corporateName: "", // Default value is ""
    employeeNumber:"", // Default value should be a number, but keeping as string for initialization
    department: "", // Default value as per schema
    role: "", // Default value as per schema
    lineManagerName: "",
    lineManagerEmail: "",
    phoneNumber: "", // Default value should be a number, but keeping as string for initialization
    expertise: "", // Default value as per schema
    educationGrade: "",
    yearGraduate: "", // Default value should be a number, but keeping as string for initialization
    schoolName: "",
    subjectStudied: ""
  })
  

  function changeHandler(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
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
    <SignupStep1 handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} steps={steps} changeHandler={changeHandler} formData={formData}/>,
    <SignupStep2 handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} steps={steps} changeHandler={changeHandler} formData={formData}/>,
    <SignupStep3 handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} steps={steps} changeHandler={changeHandler} formData={formData}/>,
    <SignupStep4 handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} steps={steps} changeHandler={changeHandler} formData={formData}/>,
    <SignupStep5 handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} steps={steps} changeHandler={changeHandler} formData={formData}/>,
  ];

  return (
    <div className="flex bg-[#f9fafa]">
      <div className="w-1/3 h-screen">
        <img
          src="/signup.jpg"
          className="w-full h-full object-cover"
          alt="signup image"
        />
      </div>
      <div className="w-2/3 flex flex-col items-center justify-center">
        <div>
          <h1 className="font-bold text-4xl my-6">Signup</h1>
          <div className="flex w-[700px] h-[500px] rounded-xl bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className="w-1/3 p-4 border-4">
              <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                      // optional={
                      //   index === 4 ? (
                      //     <Typography variant="caption">Last step</Typography>
                      //   ) : null
                      // }
                      >
                        {step.label}
                      </StepLabel>
                      {/* <StepContent>
                        <Typography>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              {index === steps.length - 1
                                ? "Finish"
                                : "Continue"}
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Back
                            </Button>
                          </div>
                        </Box>
                      </StepContent> */}
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
            <div className="w-2/3">
              <div className="flex flex-col items-center">
                {components[activeStep]}

                {/* <div className="flex">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
