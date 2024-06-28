import React from 'react'

function Stats({heading,request}) {
  return (
    <div className='flex items-center justify-between p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md'>
        <div className='w-[40%] text-[14px] font-semibold'>{heading}</div>
        <div className='h-[20px]  border-[1px] border-gray-300'></div>
        <div className='px-2 text-[14px] text-gray-700'>{request} Requests</div>
        <div className='h-[20px] border-[1px] border-gray-300'></div>
        <div><img src="/chart.png" width={50}/></div>
    </div>
  )
}

export default Stats