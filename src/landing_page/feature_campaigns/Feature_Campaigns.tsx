import React, { FC } from 'react'
import Card from '../../components/landing_page_components/Card'

const Feature_Campaigns:FC = () => {
  return (
    <div className='w-full mt-12 pb-2 pt-2'>
      <h1 className='capitalize font-bold text-2xl w-full'>Feature campaigns</h1>
      <div className='w-full flex flex-col items-center md:justify-center md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-8 mb-2'>
      <span className='w-full h-[1px] bg-gray-400'></span>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='flex items-center justify-center w-full my-4'>
        <button className='my_btn green_bg'>Explore More...</button>
      </div>
    </div>
  )
}

export default Feature_Campaigns