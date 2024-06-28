import React from "react";

function ProfileCard({ img, name, desc, time }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
        <img src={img} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <div className="text-gray-800 font-normal text-[15px]"><span className="text-base font-semibold text-black">{name}</span> {desc}</div>
        <div className="text-[14px] text-gray-500">{time}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
