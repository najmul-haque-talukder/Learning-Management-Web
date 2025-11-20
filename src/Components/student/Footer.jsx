import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-gray-950'>
      <div>

        <div className='flex justify-between px-15 gap-10 text-white py-10'>
          <div>
            <div className='flex items-center'>
              <img src="/naj.png" className='w-15'/>
              <p className=' font-bold text-2xl'>N Tech Acedamy</p>
            </div>

            <p className='w-90 text-gray-400 pt-4 font-normal'>It offers structured courses, progress tracking, and an easy-to-use interface to enhance the online learning experience.</p>
          </div>


          <div className='space-y-2'>
            <p className='text-xl font-bold'>Quick Links</p>
            <ul className='space-y-5 text-gray-400'>
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"/course-list"}><li>All Courses</li></Link>
              <Link to={"/"}><li onClick={()=> scrollTo(0, 0)}>Sign In</li></Link>
            </ul>
          </div>
          
          <div className='space-y-4'>
            <p className='text-xl font-semibold'>Subscribe to our newsletter</p>
            <p className='text-gray-400'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className=' flex gap-2'>
              <input type="text" className='outline-none input text-gray-700' placeholder='Enter your email' />
              <button className='btn btn-primary'>Subscribe</button>
            </div>

          </div>
        </div>



        <div className='flex items-center justify-between w-full py-7 px-15 text-white border-t border-gray-500'>
          <p className='text-gray-400'>All Rights & Reserved by &copy; <a href="https://www.facebook.com/najmul.9341">Najmul Haque Talukder</a></p>


          <div className=''>

            <ul className='flex items-center gap-2 text-xl text-gray-400'>
              <li className='hover:-translate-y-2 duration-700'><a target='_blank' href="https://www.facebook.com/najmul.9341"><i class="fa-brands fa-facebook"></i></a></li>
              <li className='hover:-translate-y-2 duration-700'><a target='_blank' href="https://github.com/najmul-haque-talukder"><i class="fa-brands fa-github"></i></a></li>
              <li className='hover:-translate-y-2 duration-700'><a target='_blank' href="https://x.com/najmul_41"><i class="fa-brands fa-x-twitter"></i></a></li>
              <li className='hover:-translate-y-2 duration-700'><a target='_blank' href="https://www.linkedin.com/in/najmul-haque-talukder/"><i class="fa-brands fa-linkedin"></i></a></li>
              <li className='hover:-translate-y-2 duration-700'><a target='_blank' href="https://www.behance.net/robiulahsan"><i class="fa-brands fa-behance"></i></a></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer