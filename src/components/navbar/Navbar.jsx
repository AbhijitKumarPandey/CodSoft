import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import './Style.scss'

const Navbar = () => {
  const [isnav, setisnav] = useState(false)
  const navref=useRef(null)
  const toggle=()=>{
      if(!isnav){
        navref.current.style.transform='translateY(0%)'
      }else{
        navref.current.style.transform='translateY(-500%)'
      }
      setisnav(!isnav)
  }
  return (
    <>
      <nav className='flex items-center justify-between bg-gray-900 text-white'>
        <h1 className='font-bold '>Abhijit.dev</h1>
        
        {!isnav?<GiHamburgerMenu size="1.3rem" className='icon' onClick={toggle}/>:<MdOutlineClose className='icon' size="1.4rem" onClick={toggle}/>}
        <div className="options font-semibold text-md">
             <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </nav>
    <div className="subnav py-10 absolute w-[100%] bg-white" ref={navref}>
       <div className="flex flex-col items-center gap-5 ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
       </div>
    </div>
    </>
  )
}

export default Navbar