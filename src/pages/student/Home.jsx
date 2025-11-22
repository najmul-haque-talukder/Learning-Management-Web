import CallToAction from "../../Components/student/CallToAction"
import Companies from "../../Components/student/Companies"
import CourseCardSecton from "../../Components/student/CourseCardSecton"
import Footer from "../../Components/student/Footer"
import Hero from "../../Components/student/Hero"
import SearchBar from "../../Components/student/SearchBar"
import Testimonial from "../../Components/student/Testimonial"

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-7 text-center">
        <Hero />
        <Companies />
        <CourseCardSecton />
        <Testimonial />
        <CallToAction />
      </div>
        <Footer />
    </div>
  )
}

export default Home