import React, { FC } from 'react'

const Works:FC = () => {
  return (
    <div className='w-full flex flex-col mt-6'>
      <span className='w-full h-12 border-t-[0.5px] border-b-[0.5px] border-gray-400 flex items-center justify-center font_text mb-6'>
      <marquee behavior="scroll" direction="left">
        <h1>Your Small Contribution Can Make A Big Difference. Join Our Community And Help Those In Need.</h1>
      </marquee>
      </span>

      <h2 className='font-bold text-xl mb-6 md:text-2xl lg:text-2xl lg:pt-4'>
      Step-by-step process
      </h2>

      <div className='flex flex-col lg:flex-row justify-between items-center mt-4 w-full'>
        <div className='w-[60%] md:w-[40%] flex flex-col gap-3 border-[0.5px] border-green-500 rounded-md p-4 -ml-12 lg:ml-0'>
          <span className='text-blue-950 size-9 rounded-full green_bg content-center text-center font-semibold my-0 mx-auto -mt-8'>
            1
          </span>
          <img src="/connect.png" alt="" className='size-24 my-0 mx-auto'/>
          <h1 className='font-semibold text-center text-sm'>Connect Wallet</h1>
        </div>
        <span className='w-[1px] h-[70px] lg:w-full lg:flex lg:h-[0.15px] bg-green-500 -rotate-45 -mt-[10px] lg:rotate-0 lg:-mt-0'></span>
        <div className='w-[60%] md:w-[40%] flex flex-col gap-3 border-[0.5px] border-green-500 rounded-md p-4 ml-12 lg:ml-0 lg:z-0 z-10'>
          <span className='text-blue-950 size-9 rounded-full green_bg content-center text-center font-semibold my-0 mx-auto -mt-8'>2</span>
          <img src="/explore.png" alt="" className='size-24 my-0 mx-auto'/>
          <h1 className='font-semibold text-center text-sm'>Browse Campaigns</h1>
        </div>
        <span className='w-[1px] h-[70px] lg:w-full lg:flex lg:h-[0.15px] bg-green-500 rotate-45 -mt-[10px] lg:rotate-0 lg:-mt-0'></span>
        <div className='w-[60%] md:w-[40%] flex flex-col gap-3 border-[0.5px] border-green-500 rounded-md p-4 -ml-12 z-10 lg:ml-0 lg:z-0'>
          <span className='text-blue-950 size-9 rounded-full green_bg content-center text-center font-semibold my-0 mx-auto -mt-8'>3</span>
          <img src="/send.png" alt="" className='size-24 my-0 mx-auto'/>
          <h1 className='font-semibold text-center text-sm'>Donate or Create</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Works