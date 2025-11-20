import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router'

const SearchBar = ({data}) => {


  const navigate = useNavigate()
  const [input, setInput] = useState(data? data : "")


  const onSearchHandeler = (e)=>{
    e.preventDefault()
    navigate("/course-list/" + input)
  }



  return (
    <form onSubmit={onSearchHandeler} className='max-w-xl w-full'>

      <div className='flex gap-4 items-center border border-gray-300 rounded-md px-4 py-2 '>
        <img src={assets.search_icon}/>
        <input onChange={e => setInput(e.target.value)} value={input} type="text" className='outline-none w-full h-full' placeholder='Search Your Course Name' />
        <button className='btn btn-primary'>Search</button>
      </div>
      
    </form>
  )
}

export default SearchBar