import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router";
import humanizeDuration from "humanize-duration";

export const AppContex = createContext();

export const AppContexProvider = (props) => {
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  //! Fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //! Fetch user enrolled courses (dummy version)
  const fetchUserEnrolledCourses = async () => {
    // Normally, fetch from API:
    // const res = await fetch(`/api/user/enrolledCourses`);
    // const data = await res.json();
    // setEnrolledCourses(data);

    // Dummy version:
    setEnrolledCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  //! Calculate rating
  const calculateRating = (course) => {
    if (!course.courseRatings || course.courseRatings.length === 0) return 0;
    const totalRating = course.courseRatings.reduce((sum, r) => sum + r.rating, 0);
    return totalRating / course.courseRatings.length;
  };

  //! Calculate chapter time
  const calculateChepterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.forEach(lecture => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  //! Calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.forEach(chapter => {
      chapter.chapterContent.forEach(lecture => (time += lecture.lectureDuration));
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  //! Calculate total number of lectures
  const calculateNoOfLecture = (course) => {
    let totalLecture = 0;
    course.courseContent.forEach(chapter => {
      if (Array.isArray(chapter.chapterContent)) totalLecture += chapter.chapterContent.length;
    });
    return totalLecture;
  };

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    calculateChepterTime,
    isEducator,
    setIsEducator,
    calculateCourseDuration,
    calculateNoOfLecture,
    enrolledCourses,
    fetchUserEnrolledCourses
  };

  return <AppContex.Provider value={value}>{props.children}</AppContex.Provider>;
};
