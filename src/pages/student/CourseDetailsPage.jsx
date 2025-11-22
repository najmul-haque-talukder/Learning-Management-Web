import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContex } from '../../contex/AppContex'
import Loading from '../../Components/student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Youtube from 'react-youtube'

import Footer from "../../Components/student/Footer"

const CourseDetailsPage = () => {

  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSection, setOpenSection] = useState({})
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
  const [playerData, setPlayerData] = useState(null)


  const { allCourses, calculateRating, calculateChepterTime, calculateCourseDuration, calculateNoOfLecture, currency } = useContext(AppContex)

  useEffect(() => {
    if (allCourses.length > 0) {
      const findCourse = allCourses.find(course => course._id === id)
      setCourseData(findCourse)
    }
  }, [allCourses, id])


  const toggleSection = (index)=>{
    setOpenSection((prev)=>(
      {...prev, [index] : !prev[index]}
    ))

  }




  return courseData? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>

        <div className='absolute top-0 left-0 w-full h-[500px] z-1 bg-gradient-to-b from-cyan-100/70'>
        </div>

        {/* left Column */}
        <div className='max-w-xl z-10 text-gray-500'>
          <h1 className='text-[30px] font-semibold text-gray-800'>{courseData.courseTitle}</h1>
          <p className='text-sm ' dangerouslySetInnerHTML={{__html : courseData.courseDescription.slice(0, 200)}}>{}</p>
          
          {/* Review & rateing */}
          <div className='flex items-center gap-3'>
            <p className='text-lg'>{calculateRating(courseData)}</p>
            <div className='flex items-center space-x-0.5'>
              {[...Array(5)].map((_, index) => (
                <img key={index} src={index < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} className='w-3.5 h-3.5' />
              ))}
            </div>

            <p className='text-gray-800'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? "Ratings" : "Rating"})</p>

            <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1? "Students" : "Student"}</p>
          </div>

          <p>Course By : <span className='underline font-semibold text-blue-500 cursor-pointer'>Great tesk</span></p>


          <div className='pt-8 text-gray-800'>
            <h2 className='font-semibold text-xl'>Course Structure</h2>

            <div className='pt-5'>
              {
                courseData.courseContent.map((chepter, index)=> (
                  <div key={index} className='border border-gray-300 bg-white rounded-md mb-2'>
                    <div className='flex px-4 py-3 items-center justify-between cursor-pointer select-none' onClick={()=> toggleSection(index)}>
                      <div className='flex items-center gap-3'>
                        <img src={assets.down_arrow_icon} className={`transform transition-transform ${openSection[index]? "rotate-180" : ""}`} />
                        <p className='font-medium md:text-base text-sm'>{chepter.chapterTitle}</p>
                      </div>

                      <p className='text-sm'>{chepter.chapterContent.length} Lectures - {calculateChepterTime(chepter)}</p>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96' : 'max-h-0'} `}>
                        <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                          {chepter.chapterContent.map((lecture, index)=>(
                            <li key={index} className='flex items-start gap-2 py-1'>
                              <img src={assets.play_icon} className='w-4 h-4 mt-1 mr-2'/>
                              <div className='flex items-center justify-between w-full text-gray-800'>
                                <p>{lecture.lectureTitle}</p>
                                <div className='flex gap-2'>
                                  {
                                    lecture.isPreviewFree && <p onClick={() => setPlayerData({
                                      videoId: lecture.lectureUrl.split("/").pop()
                                    })} className='text-blue-500 cursor-pointer hover:underline duration-300'>Preview</p>
                                    
                                  }

                                  <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, {units : ["h" , "m"]})}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                  </div>
                ))
              }
            </div>

            <div className='py-5 rich-text'>
              <h3 className='text-gray-800 text-xl font-semibold'>Course Description : </h3>
              <p className='pt-3' dangerouslySetInnerHTML={{__html : courseData.courseDescription}}>{}</p>
            </div>

          </div>
        </div>

        {/* right Column */}
        <div className='z-10 shadow-md rounded overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>
          {
                playerData? 
                <Youtube videoId={playerData.videoId} opts={{playerVars : {autoplay : 1}}} iframeClassName='w-full aspect-video' />
                : 
                <img src={courseData.courseThumbnail} />
              }
          

          <div className='p-5'>
            <div className='flex items-center gap-2 '>
              <img className='w-3.5' src={assets.time_left_clock_icon} />
              <p className='text-red-500'><span className='font-semibold'>5 Days</span> Left at this Price</p>
            </div>
             <div className='flex gap-3 py-1 items-center text-gray-500'>
                <p className='font-semibold text-black text-2xl'>{currency} {(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
                <p className='text-lg line-through'>{currency} {courseData.coursePrice}</p>
                <p className='text-lg'><span className='font-semibold'>{courseData.discount}</span> % Off</p>
             </div>

             <div className='pb-1 flex items-center gap-5'>
              <div className='flex gap-1 '>
                <img src={assets.star} />
                <p>{calculateRating(courseData)}</p>
              </div>

              <div className='flex gap-1 border-l pl-3 border-gray-300'>
                <img src={assets.time_clock_icon} />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>

              <div className='flex gap-1 border-l pl-3 border-gray-300'>
                <img src={assets.lesson_icon} />
                <p>{calculateNoOfLecture(courseData)}</p>
              </div>
             </div>

             <div className='py-3'>
                <button className='btn btn-primary w-full'>{isAlreadyEnrolled? "Already Enrolled" : "Enroll Now"}</button>
              </div>

              <div className='py-2'>
                <p className='text-lg font-semibold text-gray-800'>What is in The Course?</p>

                <ul className='text-sm list-disc px-7 py-1 text-gray-600'>
                  <li>Lifetime access with free updates.</li>
                  <li>Step-by-step, hands-on project guidance.</li>
                  <li>Downloadable resources and source code.</li>
                  <li>Quizzes to test your knowledge.</li>
                  <li>Certificate of completion.</li>
                </ul>
              </div>


          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : <Loading />
}

export default CourseDetailsPage
