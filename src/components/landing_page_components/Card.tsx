import React, { FC } from 'react'
import { MdNavigateNext } from "react-icons/md";

const Card:FC = () => {
  return (
    <div className='lg:w-[30%] md:w-[45%] w-full flex flex-col span_bg border-[0.5px] border-gray-500 rounded relative p-4'>
              <span className='absolute top-2 left-2 bg-gray-500 rounded-full p-3 text-white text-[10px] px-2 py-1'>Category</span>
              <img src="/poor.png" alt="campaign image" className='w-full h-32' loading='lazy'/>
              <div className='w-full absolute left-0 top-20 flex items-center justify-between z-10'>
                <button className='rotate-180'><MdNavigateNext className='text-4xl hover:scale-110'/></button>
                <button className=''><MdNavigateNext className='text-4xl hover:scale-110'/></button>
              </div>
              <span className='h-[0.15px] bg-green-500'></span>
              <h1 className='font-semibold mt-2'>Campaign Name</h1>
              <h3 className='text-sm mt-1'>Deadline:31/12/2025</h3>
              <div className='flex items-center justify-between mt-2 mb-1'>
                <h1 className='text-sm'>Goal:100$</h1>
                <h1 className='text-sm'>Raised:50$</h1>
              </div>
              <progress className="progress progress-success w-full" value="50" max="100"></progress>
              
            </div>
  )
}

export default Card