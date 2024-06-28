import React from 'react'
import { RiRobot2Line } from "react-icons/ri";
function Section4() {
  return (
    <div className='w-1/4 flex flex-col'>
        <div className='bg-gradient-to-r from-blue-600 to-indigo-600 flex flex-col gap-2 p-6 rounded-xl'>
            <RiRobot2Line size={55} color='white'/>
            <h1 className='text-2xl font-bold text-white'>Skill Coach</h1>
            <p className='text-[#ded5ff] '>Increase your AI Skills to improve  the function of your Page</p>
            <button className='bg-[#22a7f1] text-xl w-full px-2 mt-4 font-bold tracking-wider py-4 text-white rounded-xl'>Start</button>
        </div>
        <div></div>

    </div>
  )
}

export default Section4