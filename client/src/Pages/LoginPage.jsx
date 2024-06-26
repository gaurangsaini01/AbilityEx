import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [accountType, setAccountType] = useState("personal");
  return (
    <div className="flex h-screen">
      <div className="min-w-[50%] border-2">img</div>
      <div className="w-1/2 flex items-center justify-center bg-[#f9fafa]">
        <div className="lg:w-[500px]">
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
            <form className="flex flex-col gap-6 mt-6">
              {accountType === "corporate" && (
                <div>
                  <label
                    htmlFor="corporatename"
                    className="block uppercase font-semibold text-gray-500 mb-2"
                  >
                    corporate name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="corporatename"
                    id="corporatename"
                    className="input-class "
                  />
                </div>
              )}
              <div>
                <label
                  htmlFor="username"
                  className="block uppercase font-semibold text-gray-500 mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  id="username"
                  className="input-class"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block uppercase font-semibold text-gray-500 mb-2"
                >
                  Password
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="password"
                  id="password"
                  className="input-class"
                />
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
                    <p className="font-semibold text-[14px] text-gray-500">Don't have an account?</p>
                    <Link to={"/signup"} className="underline text-[15px] text-[#22a7f1] font-bold">Sign Up</Link>
                </div>
                <div>
                <button className="px-6 py-3 rounded-xl font-semibold text-white hover:scale-95 transition-all duration-200 ease-in-out bg-[#22a7f1]">Login</button>
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
