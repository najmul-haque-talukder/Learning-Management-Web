import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const Testimonial = () => {
  return (
    <div>
      <h2 className='text-3xl font-semibold'>Testimonials</h2>
      <p className='text-gray-500'>Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.</p>


      <div className='grid md:grid-cols-3 gap-5 px-15 md:px-50 py-20'>
        {
          dummyTestimonial.map((item, index)=>{
            return <div key={index}>
              <div className='border w-full border-gray-200 rounded-lg shadow-md hover:scale-103 duration-700'>
                <div className='flex bg-gray-200 p-4 items-center gap-2'>
                  <img src={item.image} className='h-12 w-12' />
                  <div className='text-left'>
                    <p className='text-lg font-semibold'>{item.name}</p>
                    <p className='text-gray-700'>{item.role}</p>
                  </div>
                </div>


                <div className='p-4'>
                  <p>{item.feedback}</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Testimonial