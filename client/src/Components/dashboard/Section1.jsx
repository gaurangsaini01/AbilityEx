import React from "react";
import Card from "./Card";
import { cardData } from "../../data";
import { Line } from "rc-progress";

function Section1({ user }) {
  return (
    <div className="w-1/4  flex flex-col items-center mt-2 rounded-xl ">
      <div className="bg-gray-100 w-full ">
        <div className="flex items-center flex-col ">
          <div className="rounded-full overflow-hidden">
            <img src="/man.png" className="object-contain" />
          </div>
          <h2 className="text-2xl capitalize font-bold">{user?.firstName}</h2>
          <p className="text-gray-500 font-semibold">
            {user?.role || "IT Specialist"}
          </p>
        </div>
        <div className="flex rounded-md justify-between mt-4">
          {cardData.map((card, index) => (
            <Card
              index={index}
              key={index}
              heading={card.number}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className="w-full p-4 bg-white mt-5 rounded-2xl ">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-gray-500 text-lg">Work On Project</h1>
          <div className=" bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-2 rounded-xl">
            <h1 className="text-lg font-medium">LAN Network maintenance</h1>
            <p className="text-[14px] text-gray-600">Computer • Network</p>
            <button className="bg-[#eb9700] p-1 text-[12px] mt-3 text-white rounded-full px-2">4 Days left</button>
          </div>

          <h1 className="text-gray-500 text-lg">Most Used Skills</h1>
          <div className="flex flex-col gap-2 ">
            <p>C++ Programming</p>
            <Line
              percent={79}
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#22a7f1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Cloud System</p>
            <Line
              percent={60}
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#22a7f1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>UI Design</p>
            <Line
              percent={72}
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#22a7f1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Research And Analysis</p>
            <Line
              percent={59}
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#22a7f1"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <p>IT Solution</p>
            <Line
              percent={26}
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#22a7f1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
