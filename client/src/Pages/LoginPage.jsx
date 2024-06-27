import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import axios from "axios";
import toast from "react-hot-toast";

function LoginPage({setLoginStatus}) {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("personal");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    corporateName: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response =
        accountType === "personal"
          ? await axios.post("http://localhost:6969/api/v1/login", {
              email: formData.email,
              password: formData.password,
            })
          : await axios.post("http://localhost:6969/api/v1/login", {
              email: formData.email,
              password: formData.password,
              corporateName: formData.corporateName,
            });
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      setLoginStatus(true)
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
  return (
    <div className="flex h-screen">
      <div className="min-w-[50%] relative lg:block hidden">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="text-6xl absolute top-[15%] left-[20%] font-bold text-white">
          Where Skills Are Developed
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-[#f9fafa]">
        <div className="lg:w-[500px] w-[400px]">
          {/* logo */}
          <div className="flex items-center ">
            <div></div>
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">LOGIN</h1>
              <p className="text-gray-600">Hello , welcome back !</p>
            </div>
          </div>
          {/* white bg wala div */}
          <div className="p-5 mt-10 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-2xl">
            <div className="bg-[#f1f3f4] p-1.5 rounded-md">
              <button
                onClick={() => setAccountType("personal")}
                className={`w-1/2 ${
                  accountType === "personal"
                    ? "text-black bg-white"
                    : "bg-transparent text-gray-500"
                } transition-all duration-200 ease-in-out rounded-sm font-semibold`}
              >
                Personal
              </button>
              <button
                onClick={() => setAccountType("corporate")}
                className={`w-1/2 ${
                  accountType === "corporate"
                    ? "text-black bg-white"
                    : "bg-transparent text-gray-500"
                } transition-all duration-200 ease-in-out rounded-sm font-semibold`}
              >
                Corporate
              </button>
            </div>
            <form className="flex flex-col gap-6 mt-6" onSubmit={submitHandler}>
              {accountType === "corporate" && (
                <div>
                  <label
                    htmlFor="corporateName"
                    className="block uppercase font-semibold text-gray-500 mb-2"
                  >
                    corporate name
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    name="corporateName"
                    id="corporateName"
                    className="input-class "
                  />
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block uppercase font-semibold text-gray-500 mb-2"
                >
                  Username / Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  className="input-class"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block uppercase font-semibold text-gray-500 mb-2"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  name="password"
                  id="password"
                  className="input-class"
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
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="w-4 h-4 "
                    id="remember"
                  />
                  <label htmlFor="remember" className="text-gray-700">
                    Remember Me
                  </label>
                </div>
                <div className="underline font-semibold cursor-pointer">
                  Forgot Password?
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col mt-6">
                  <p className="font-semibold text-[14px] text-gray-500">
                    Don't have an account?
                  </p>
                  <Link
                    to={"/signup"}
                    className="underline text-[15px] text-[#22a7f1] font-bold"
                  >
                    Sign Up
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    onSubmit={submitHandler}
                    className="px-6 py-3 rounded-xl font-semibold text-white hover:scale-95 transition-all duration-200 ease-in-out bg-[#22a7f1]"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* need help contact support */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
