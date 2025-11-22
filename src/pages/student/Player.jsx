import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { AppContex } from '../../contex/AppContex'
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube'
import { useParams } from 'react-router'

const Player = () => {
  const { calculateChepterTime, enrolledCourses } = useContext(AppContex)
  const { id } = useParams()

  const [courseData, setCourseData] = useState(null)
  const [openSection, setOpenSection] = useState({})
  const [playerData, setPlayerData] = useState(null)

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      const findCourse = enrolledCourses.find(course => course._id === id)
      setCourseData(findCourse || null)

      // Auto select first lecture
      if (findCourse && findCourse.courseContent.length > 0) {
        const firstChapter = findCourse.courseContent[0]
        if (firstChapter.chapterContent.length > 0) {
          setPlayerData({
            ...firstChapter.chapterContent[0],
            chapter: 1,
            lectureIndex: 1
          })
          setOpenSection({ 0: true }) // first chapter open
        }
      }
    }
  }, [enrolledCourses, id])

  const toggleSection = (index) => {
    setOpenSection(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
      {/* Left Column */}
      <div className='text-gray-800'>
        <h2 className='text-xl font-semibold'>Course Structure</h2>
        <div className='pt-5'>
          {courseData && courseData.courseContent.map((chapter, index) => (
            <div key={index} className='border border-gray-300 bg-white rounded-md mb-2'>
              <div
                className='flex px-4 py-3 items-center justify-between cursor-pointer select-none'
                onClick={() => toggleSection(index)}
              >
                <div className='flex items-center gap-3'>
                  <img
                    src={assets.down_arrow_icon}
                    className={`transform transition-transform ${openSection[index] ? "rotate-180" : ""}`}
                  />
                  <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                </div>
                <p className='text-sm'>
                  {chapter.chapterContent.length} Lectures - {calculateChepterTime(chapter)}
                </p>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96' : 'max-h-0'}`}>
                <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                  {chapter.chapterContent.map((lecture, lIndex) => (
                    <li key={lIndex} className='flex items-start gap-2 py-1'>
                      <img
                        src={false ? assets.blue_tick_icon : assets.play_icon}
                        className='w-4 h-4 mt-1 mr-2'
                      />
                      <div className='flex items-center justify-between w-full text-gray-800'>
                        <p>{lecture.lectureTitle}</p>
                        <div className='flex gap-2'>
                          {lecture.lectureUrl && (
                            <p
                              onClick={() => setPlayerData({
                                ...lecture,
                                chapter: index + 1,
                                lectureIndex: lIndex + 1
                              })}
                              className='text-blue-500 cursor-pointer hover:underline duration-300'
                            >
                              Watch
                            </p>
                          )}
                          <p>
                            {humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ["h", "m"] })}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className='md:mt-10'>
        {playerData ? (
          <div>
            <YouTube
              videoId={playerData.lectureUrl.split("/").pop()}
              iframeClassName='w-full aspect-video'
            />
            <div className='flex items-center justify-between mt-1'>
              <p>{playerData.chapter}.{playerData.lectureIndex} - {playerData.lectureTitle}</p>
              <button className='text-blue-600'>{false ? "Completed" : "Mark Complete"}</button>
            </div>
          </div>
        ) : (
          <img src={assets.courseThumbnail} />
        )}
      </div>
    </div>
  )
}

export default Player
