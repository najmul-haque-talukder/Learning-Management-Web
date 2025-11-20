import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router";

export const AppContex = createContext()



export const AppContexProvider = (props) =>{




    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)

    //! fetch All Courses
    const fetchAllCourses = async ()=> {
        setAllCourses(dummyCourses)
    }

    useEffect(()=>{
        fetchAllCourses()
    },[])

    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate()

    const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
        return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach(rating => {
        totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
}







    const value = {
        currency, allCourses, navigate, calculateRating, isEducator, setIsEducator
    }
    
    return (
        <AppContex.Provider value={value}>
            {props.children}
        </AppContex.Provider>
    )
}