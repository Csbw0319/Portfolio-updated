import React from 'react'
import Typewriter from 'typewriter-effect';
import MainPhoto from '../components/MainPhoto';
import Title from '../components/title';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='typewriter'>
          <Typewriter 
          className='typewriter'
          onInit={(typewriter) => {
            typewriter.typeString("Software Engineer")
            .pauseFor(2000)
            .deleteAll()
            .typeString('Full-Stack Developer')
            .pauseFor(2000)
            // .deleteAll()
            .start()
          }}/>
          </div>
          <div className='middle-container'>
        <MainPhoto />
        <Title />
      </div>
      <div className='social-icons'>
        <div className='icons'>
        </div>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/courtney-e-wilkins/'>
          <FaLinkedin size={40}/>
          </a>
        </div>
        <div className='icons'>
        <a href='https://github.com/Csbw0319'>
          <FaGithub size={40}/>
          </a>
        </div>
       </div>
    </div>
  )
}

export default Home