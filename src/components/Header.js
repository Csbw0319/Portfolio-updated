import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <ul className='header-list'>
          <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/contact"}>Contact Me</Link></li>
            <li><Link to={"/skills"}>Skills</Link></li>
            <li><Link to={"/project"}>Projects</Link></li>
            <li><Link to={"/resume"}>Resume</Link></li>
        </ul>
    </div>
  )
}

export default Header