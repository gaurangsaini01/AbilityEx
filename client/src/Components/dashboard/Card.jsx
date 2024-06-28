import React from "react";

function Card({ index, heading, description }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2
        className={`font-bold text-xl ${
          index === 0 ? "text-blue-500" : "text-black"
        }`}
      >
        {heading}
      </h2>
      <p className="font-normal text-[14px] leading-none text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}

export default Card;
