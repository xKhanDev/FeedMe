import React, { FC } from 'react'
import { FaArrowRight } from "react-icons/fa";

const Hero:FC = () => {
  return (
    <div className='w-full flex flex-col-reverse items-center lg:flex-row md:flex-row justify-between pt-2 md:pt-4 lg:pt-6'>
      <div className='w-full lg:w-1/2 h-full flex flex-col justify-center my-6'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>
        Empower Change. Make a Difference.
        </h1>
        <p className='mt-4 text-[16px] gray_text'>Create or contribute to fundraising campaigns that inspire change, while tracking your impact with every donation.</p>
        <p className='my-2 text-[12px] gray_text'>
          <span className='font-semibold mr-1'>
            Your support matters 
          </span>
            Every contribution helps bring hope to those in need.
        </p>
        <div className='flex items-center my-4 gap-4'>
          <button className='my_btn green_bg text-white'>
            Connect
          </button>
          <button className='border-[0.5px] border-gray-400 border_btn flex items-center gap-2 hover:bg-[#1b2836]'>
            <span>
              Explore More
            </span>
             <FaArrowRight />
          </button>
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0'><img src="/poor.png" alt="" className='size-72 lg:w-[500px] lg:h-full lg:p-8'/></div>
    </div>
  )
}

export default Hero