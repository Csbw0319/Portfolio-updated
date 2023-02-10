import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Skills() {
  return (
    <div>
      <h1>Skills and Certifications:</h1>
      <Splide  aria-label="My Skills" 
      options={{
        perPage: 5,
        pagination: false,
        drag: 'free',
        
      }}>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/js.png')} alt='javascript logo' />
        </SplideSlide>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/css-3.png')} alt='css logo' />
        </SplideSlide>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/python.png')} alt='python logo' />
        </SplideSlide>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/atom.png')} alt='react logo' />
        </SplideSlide>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/nodejs-1-logo-png-transparent.png')} alt='' />
        </SplideSlide>
        <SplideSlide>
          <img id='mongo-logo' className='skill-logos' src={require('../assets/mongodb-logo-png-transparent.png')} alt='' />
        </SplideSlide>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/html5-logo-png-transparent.png')} alt='' />
        </SplideSlide>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/react-native-firebase-1-logo-png-transparent.png')} alt='' />
        </SplideSlide>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/postgresql-inc-logo-png-transparent.png')} alt='' />
        </SplideSlide>
        <SplideSlide>
          <img className='skill-logos' src={require('../assets/git.png')} alt='' />
        </SplideSlide>
      </Splide>
      <div>
        <img className='certifications' src={require('../assets/Certificate-of-Completion-cwilkins0319@icloud.com-1663858411-1.png')} alt='' />
      </div>
    </div>
  )
}

export default Skills