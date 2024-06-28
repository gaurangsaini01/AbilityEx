import React from 'react'
import Card from './Card'
import { cardData } from "../../data";

function Section1({user}) {
  return (
    <div className="w-1/4  flex flex-col items-center mt-2 rounded-xl overflow-hidden">
<div className="bg-gray-100 w-full">
  <div className="flex items-center flex-col ">
    <div className="rounded-full overflow-hidden">
      <img src="/man.png" className="object-contain" />
    </div>
    <h2 className="text-2xl font-bold">{user?.firstName}</h2>
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
</div>
  )
}

export default Section1