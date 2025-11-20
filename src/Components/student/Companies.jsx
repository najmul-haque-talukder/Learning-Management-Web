import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='space-y-5 pt-16'>
      <h1 className='text-gray-500 text-base'>Trusted by learners from</h1>

      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16'>
        <img src={assets.microsoft_logo} className='w-20 md:w-28' />
        <img src={assets.walmart_logo} className='w-20 md:w-28' />
        <img src={assets.accenture_logo} className='w-20 md:w-28' />
        <img src={assets.adobe_logo} className='w-20 md:w-28' />
        <img src={assets.paypal_logo} className='w-20 md:w-28' />
      </div>
    </div>
  )
}

export default Companies