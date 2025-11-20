import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AppContex } from '../../contex/AppContex'
import { CourseCard } from './CourseCard'

const CourseCardSecton = () => {

  const {allCourses} = useContext(AppContex)


  return (
    <div className='py-16 space-y-2 md:px-40 px-8 bg-gray-100/40'>
      <h2 className='font-semibold text-3xl'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-600 px-10 md:px-0'>Discover our top-rated courses across various categories. From coding and design to <br /> business and wellness, our courses are crafted to deliver results.</p>
    

      <div className='grid md:grid-cols-4 px-4 gap-6 md:px-0 md:my-16 my-10'>
        {
          allCourses.slice(0, 4).map((course, index)=>{
            return <CourseCard key={index} course={course} />
          })
        }
      </div>
    
      <Link to={"/course-list"} onClick={()=> scrollTo(0, 0)} className='btn btn-primary'>Show All Courses</Link>
    
    </div>
  )
}

export default CourseCardSecton