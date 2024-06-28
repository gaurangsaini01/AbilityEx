import React from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignupStep5({
  handleBack,
  formData,
  changeHandler,
  setLoginStatus
}) {
  const navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:6969/api/v1/signup',
        formData
      );
      localStorage.setItem("AbilityExtoken", response.data.token);
      localStorage.setItem("AbilityExuser", JSON.stringify(response.data.user));

      toast.success(response.data.message);

      setLoginStatus(true);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <h1 className="font-bold">Education</h1>
      <p className="text-[12px] text-gray-500 font-semibold">
        Education level starts from high school all the way to college , make
        sure you enter correct education details !
      </p>
      <form className="flex flex-col" onSubmit={submitHandler}>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="educationGrade"
          >
            EDUCATION GRADE
          </label>
          <input
            onChange={changeHandler}
            autoComplete="off"
            type="text"
            id="educationGrade"
            className="input-class"
            name="educationGrade"
            value={formData.educationGrade}
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="yearGraduate"
          >
            Graduation Year
          </label>
          <input
            onChange={changeHandler}
            autoComplete="off"
            type="number"
            id="yearGraduate"
            className="input-class"
            name="yearGraduate"
            value={formData.yearGraduate}
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="schoolName"
          >
            School Name
          </label>
          <input
            onChange={changeHandler}
            autoComplete="off"
            type="text"
            id="schoolName"
            className="input-class"
            name="schoolName"
            value={formData.schoolName}
          />
        </div>
        <div>
          <label
            className="block uppercase font-semibold text-gray-500 mb-2"
            htmlFor="subjectStudied"
          >
            Subject Studied
          </label>
          <input
            onChange={changeHandler}
            autoComplete="off"
            type="text"
            id="subjectStudied"
            className="input-class"
            name="subjectStudied"
            value={formData.subjectStudied}
          />
        </div>
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
            onClick={submitHandler}
            sx={{ mt: 1, mr: 1 }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupStep5;
