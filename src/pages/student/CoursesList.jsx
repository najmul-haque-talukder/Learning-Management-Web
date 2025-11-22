import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../../Components/student/SearchBar'
import { AppContex } from '../../contex/AppContex'
import { useParams } from 'react-router'
import { CourseCard } from '../../Components/student/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../Components/student/Footer'

const CoursesList = () => {

  const {navigate, allCourses} = useContext(AppContex)
  const {input} = useParams()


  const [filterCourse, setFilterCourse] = useState([])

  useEffect(()=>{
    if (allCourses && allCourses.length > 0){
      const tempCourse = allCourses.slice()

      input? setFilterCourse(tempCourse.filter(item => item.courseTitle.toLowerCase().includes(input.toLowerCase()))) : setFilterCourse(tempCourse)
    }

    

  },[allCourses, input])


  return (
    <>
      <div className='px-7 py-10'>
        <div>
          <div className='flex flex-col space-y-3 md:flex-row md:px-20 w-full items-start md:items-center md:justify-between'>
            <div className=''>
              <p className='text-3xl font-semibold'>Course List</p>
              <p className='text-sm'><span className='font-semibold text-blue-700 cursor-pointer' onClick={()=>navigate("/")}>Home</span> / Course List</p>
            </div>

            <div className='md:w-auto sm:w-full w-full'>
              <SearchBar data={input} />
            </div>
            {
              input && <div className='flex items-center gap-3 border border-gray-300 px-3 py-2 rounded'>
                <p className='text-gray-500'>{input}</p>
                <img src={assets.cross_icon} className='cursor-pointer ' onClick={()=> navigate("/course-list")} />
              </div>
            }
          </div>


          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-7 md:px-20 py-20 '>
            {
              filterCourse.map((course, index)=>(
                <CourseCard key={index} course={course} />
              ))
            }
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  )
}

export default CoursesList