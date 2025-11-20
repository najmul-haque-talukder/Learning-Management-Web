import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='pb-20'>
      <div className='space-y-2'>
        <h2 className='font-bold text-4xl'>Learn anything, anytime, anywhere</h2>
        <p className='text-base text-gray-500'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      </div>

      <div className='flex items-center gap-7 justify-center py-10'>
        <button className='btn btn-primary px-7 py-3 text-lg'>Get Started</button>
        <button className='flex gap-2 font-medium text-lg cursor-pointer'> Learn More <img src={assets.arrow_icon} /></button>
      </div>
    </div>
  )
}

export default CallToAction