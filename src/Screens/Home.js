import React from 'react'
import Typewriter from 'typewriter-effect';
import MainPhoto from '../components/MainPhoto';
import Title from '../components/title';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
          <FaLinkedin size={40}/>
        </div>
        <div className='icons'>
          <FaGithub size={40}/>
        </div>
       </div>
    </div>
  )
}

export default Home