import React from "react";
import { RiRobot2Line } from "react-icons/ri";
import { profileData } from "../../data";
import { MdOutlineNavigateNext } from "react-icons/md";
import ProfileCard from "./ProfileCard";
function Section4() {
  return (
    <div className="lg:w-1/4 md:w-3/4 w-full md:mx-auto flex flex-col p-6 md:p-0">
      <div className="bg-gradient-to-r from-blue-600  to-indigo-600 flex flex-col gap-2 p-6 rounded-xl">
        <RiRobot2Line size={55} color="white" />
        <h1 className="text-2xl font-bold text-white">Skill Coach</h1>
        <p className="text-[#ded5ff] ">
          Increase your AI Skills to improve the function of your Page
        </p>
        <button className="bg-[#22a7f1] text-xl w-full px-2 mt-4 font-bold tracking-wider py-4 text-white rounded-xl">
          Start
        </button>
      </div>
      <div className="bg-white w-full p-4 rounded-md mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-600">Activities({profileData.length})</h3>
          <MdOutlineNavigateNext size={20} />
        </div>
        <div className="w-[30px] border-2 mt-2 border-blue-500"></div>
        <div className="flex flex-col gap-3 mt-4">
            {
                profileData.map((profile,index)=>(
                    <ProfileCard key={index} img={profile.img} name={profile.name} desc={profile.desc} time={profile.time} />
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default Section4;
