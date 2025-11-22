import React, { useContext } from "react";
import { Link } from "react-router";
import {assets} from "../../assets/assets"
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContex } from "../../contex/AppContex";

const Navbar = () => {

  const isCoursesListPage = location.pathname.includes('/course-list')

  const {openSignIn} = useClerk()
  const {user} = useUser()

  const {navigate, isEducator} = useContext(AppContex)

  return (
    <div>
      <div className={`flex items-center  justify-between px-5 md:px-20 py-4 border-b border-gray-300 ${isCoursesListPage? "bg-white" : "bg-cyan-100/70" }`}>
        <div className="flex items-center">
          <Link to={"/"} className="flex items-center">
            <img src="/public/naj.png" className="w-15 cursor-pointer" />
            <p className="font-black md:text-3xl">N Tech Academy</p>
          </Link>
        </div>

        <div className=" items-center gap-5 hidden md:flex">
          <div className="flex items-center gap-5">
            {
              user && <>
                {/* onClick={()=> navigate("/educator")} */}
                <button >{isEducator ? "Educator Dashboard" : "Become A Educator"} </button> |{" "}
                <Link to="/my-enrollment">My Enrollment</Link>
              </>
            }
          </div>

          {
            user? <UserButton /> : <button onClick={()=> openSignIn()} className="btn btn-primary">Create Acccount</button>
          }
        </div>

        <div className="md:hidden flex items-center gap-7 text-gray-700">
          <div>
            {
              user && <>
                <button onClick={()=> navigate("/educator")}>{isEducator ? "Educator Dashboard" : "Become A Educator"} </button>
                <br />
                <Link to="/my-enrollment" className="text-sm font-semibold">My Enrollment</Link>
              </>
            }
          </div>

          {
            user ? <UserButton /> : <button onClick={()=> openSignIn()}><img src={assets.user_icon} alt="" /></button>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
