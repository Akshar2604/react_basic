import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import {FaHamburger, FaTimes} from "react-icons/fa"

const Navbar = () => {

const [resp, setRes]=useState(false); { /* false because desktop view is present */}
  return (
    <nav className='nav-main'>
        <h2 className='logo'>Ubiquity</h2> { /* logo */}
        <ul className={resp?"nav-links-mob":"ul-list"}
        onClick={()=>setRes(false)}
        
        >
            <Link to="/" className='home'><li>Home</li></Link>
            <Link to="/about" className='about'><li>About</li></Link>
            <Link to="/todo" className='todo'><li>Todo</li></Link>
            <Link to="/contact" className='contact'><li>Contact us</li></Link>
        </ul>
        <button className='menu-icon' onClick={()=>setRes(!resp)}>
            {resp ?<FaTimes/> : <FaHamburger/>}
            </button>
    </nav>
  )
}

export default Navbar