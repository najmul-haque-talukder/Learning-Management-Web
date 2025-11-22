import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-gray-950'>
      <div>

        <div className='flex flex-col md:flex-row justify-between px-6 md:px-16 lg:px-24 gap-10 text-white py-10'>

          <div className='md:w-1/3'>
            <div className='flex items-center gap-3'>
              <img src="/naj.png" className='w-14' />
              <p className='font-bold text-2xl'>N Tech Academy</p>
            </div>

            <p className='text-gray-400 pt-4 font-normal leading-relaxed'>
              It offers structured courses, progress tracking, and an
              easy-to-use interface to enhance the online learning experience.
            </p>
          </div>

          <div className='space-y-3'>
            <p className='text-xl font-bold'>Quick Links</p>
            <ul className='space-y-3 text-gray-400'>
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"/course-list"}><li>All Courses</li></Link>
              <Link to={"/"}><li onClick={() => scrollTo(0, 0)}>Sign In</li></Link>
            </ul>
          </div>

          <div className='space-y-4 md:w-1/3'>
            <p className='text-xl font-semibold'>Subscribe to our newsletter</p>
            <p className='text-gray-400'>
              The latest news, articles, and resources,
              sent to your inbox weekly.
            </p>

            <div className='flex flex-col sm:flex-row gap-3'>
              <input
                type="text"
                className='outline-none input text-gray-700 w-full'
                placeholder='Enter your email'
              />
              <button className='btn btn-primary w-full sm:w-auto'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between w-full py-7 px-6 md:px-16 lg:px-24 text-white border-t border-gray-500 gap-4 md:gap-0'>
          
          <p className='text-gray-400 text-center md:text-left'>
            All Rights & Reserved by &copy;{" "}
            <a
              href="https://www.facebook.com/najmul.9341"
            >
              Najmul Haque Talukder
            </a>
          </p>

          <ul className='flex items-center gap-3 text-xl text-gray-400'>
            <li className='hover:-translate-y-2 duration-700'>
              <a target='_blank' href="https://www.facebook.com/najmul.9341">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className='hover:-translate-y-2 duration-700'>
              <a target='_blank' href="https://github.com/najmul-haque-talukder">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className='hover:-translate-y-2 duration-700'>
              <a target='_blank' href="https://x.com/najmul_41">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li className='hover:-translate-y-2 duration-700'>
              <a target='_blank' href="https://www.linkedin.com/in/najmul-haque-talukder/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className='hover:-translate-y-2 duration-700'>
              <a target='_blank' href="https://www.behance.net/robiulahsan">
                <i class="fa-brands fa-behance"></i>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Footer
