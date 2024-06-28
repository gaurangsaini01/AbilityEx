import React from "react";
import Stats from "../../Components/dashboard/Stats";
import { MdOutlineNavigateNext } from "react-icons/md";
import { statsData } from "../../data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Section2() {
  return (
    <div className="w-1/4 flex flex-col overflow-hidden rounded-xl items-center ">
      <div className="rounded-2xl mb-3 overflow-hidden">
        <div className="bg-white w-full p-4 ">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600">Projects In Progress(6)</h3>
            <MdOutlineNavigateNext size={20} />
          </div>
          <div className="w-[30px] border-2 mt-2 border-blue-500"></div>
        </div>
        <div className="flex bg-white p-4 gap-4">
          <div className="flex pt-6 flex-col p-2 gap-6 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md">
            {/* <img src="/83.png" alt="" /> */}
            <CircularProgressbar
              className="w-32 h-32"
              value={83}
              text={`83%`}
              styles={buildStyles({
                // Colors
                pathColor: `#22a7f1`,
              })}
            />
            <div>
              <h2 className="font-semibold">Route adddress Inititative</h2>
              <p className="text-blue-400 text-[14px] cursor-pointer underline">
                Cloud System
              </p>
            </div>
          </div>
          <div className="flex flex-col p-2 gap-1 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md">
            {/* <img src="/61.png" alt="" /> */}
            <CircularProgressbar
              className="w-40 h-40"
              value={61}
              text={`61%`}
              styles={buildStyles({
                // Colors
                pathColor: `#eb9700`,
              })}
            />
            <h2 className="font-semibold text-md">Dashboard Inter Design</h2>
            <p className="text-blue-400 cursor-pointer text-[14px] underline">
              Cloud System
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white mt-2 rounded-2xl overflow-hidden">
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-white w-full p-4 ">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500">Most Wanted Skills(20)</h3>
              <MdOutlineNavigateNext size={20} />
            </div>
            <div className="w-[30px] border-2 mt-2 border-blue-500"></div>
          </div>
          <div className="px-4 flex flex-col gap-4 ">
            {statsData.map((stat, index) => (
              <Stats
                key={index}
                heading={stat.heading}
                request={stat.request}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
