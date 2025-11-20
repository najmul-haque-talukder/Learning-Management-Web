import { Route, Routes, useMatch } from "react-router";
import Home from "../src/pages/student/Home";
import CoursesList from "../src/pages/student/CoursesList";
import CourseDetailsPage from "../src/pages/student/CourseDetailsPage";
import MyEnrollment from "../src/pages/student/MyEnrollment";
import Player from "../src/pages/student/Player";
import Loading from "../src/Components/student/Loading";

import Educator from "../src/pages/educator/Educator";
import Dashboard from "../src/pages/educator/Dashboard";
import MyCourses from "../src/pages/educator/MyCourses";
import AddCourses from "../src/pages/educator/AddCourses";
import StudentEnrolled from "../src/pages/educator/StudentEnrolled";
import Navbar from "./Components/student/Navbar";
import Footer from "./Components/student/Footer";

function App() {

  const isEducatorRoute = useMatch("/educator/*")
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />

        <Route path="/my-enrollment" element={<MyEnrollment />} />
        <Route path="/player/:CourseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        
        <Route path="/educator" element={<Educator/>}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="add-courses" element={<AddCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>



        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
