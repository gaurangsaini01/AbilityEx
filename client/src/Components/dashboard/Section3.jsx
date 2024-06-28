import React from "react";
import Certificate from "./Certificate";
import { MdOutlineNavigateNext } from "react-icons/md";
function Section3() {
  return (
    <div className="w-1/4 flex flex-col rounded-xl items-center ">
      <div className="rounded-2xl w-full bg-white overflow-hidden pb-8">
        <div className=" w-full p-4 ">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600">Your Certification(16)</h3>
            <MdOutlineNavigateNext size={20} />
          </div>
          <div className="w-[30px] border-2 mt-2 border-blue-500"></div>
        </div>
        <div className="px-4 mb-4 w-full flex flex-col gap-4">
          <Certificate />
          <Certificate />
          <Certificate />
        </div>
      </div>
      <div className="rounded-md overflow-hidden mt-10">
        <img
          src="/Rating.png"
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
}

export default Section3;
