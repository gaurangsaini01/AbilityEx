import React from 'react'

function Certificate() {
  return (
    <div className='flex items-center p-2 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md'>
        <div className='w-[40px]' ><img src="/logo.png" className='h-full w-full object-contain' alt="" /></div>
        <div className='h-[20px] mx-4 border-[1px] border-gray-300'></div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[14px]'>Certified Design Specialist .</h1>
          <p className='text-[14px]'>GT Certification</p>
        </div>
    </div>
  )
}

export default Certificate