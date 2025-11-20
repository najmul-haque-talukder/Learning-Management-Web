import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContex } from '../../contex/AppContex'
import { Link } from 'react-router'

export const CourseCard = ({course}) => {


  const {currency, calculateRating} = useContext(AppContex)

  return (
    <div className='border border-gray-500/30 pb-6 rounded-lg overflow-hidden hover:scale-103 duration-700'>
      <Link to={"/course/" + course._id} onClick={()=> scrollTo(0, 0)}  >
        <img src={course.courseThumbnail} className='w-full' />
        
        <div className='p-3 text-left'>
          <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
          <p className='text-gray-500'>{course.educator.name}</p>
          
          <div className='flex items-center gap-3'>
            <p className='text-lg'>{calculateRating(course)}</p>
            <div className='flex items-center space-x-0.5'>
              {[...Array(5)].map((_, index) => (
                <img key={index} src={index < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} className='w-3.5 h-3.5' />
              ))}
            </div>

            <p className='text-gray-500 text-lg'>({course.courseRatings.length})</p>
          </div>
          <p className='font-semibold text-xl'>{currency} {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
        </div>

        

        
      </Link>
    </div>

  )
}
